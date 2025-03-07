import { EMAILS_QUEUE, EMAILS_SERVICE } from '@app/common';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Cron, CronExpression } from '@nestjs/schedule';
import FallbackEvent from './events/fallback.event';
import FallbackRepository from './fallback.repository';
import { FallbackEvents } from './mongo-schemas';

@Injectable()
export class FallbackService {
  private readonly _logger = new Logger(FallbackService.name);

  constructor(
    @Inject(EMAILS_SERVICE) private readonly _emailsService: ClientProxy,
    private readonly _fallbackRepository: FallbackRepository,
  ) {}

  async saveFallbackEvent(fallbackEvent: FallbackEvent) {
    this._logger.log(`Saving fallback event: ${fallbackEvent.data.eventType}`);

    const { event, queue, retryInSec, eventType } = fallbackEvent.data;
    const triggerAt = new Date();
    triggerAt.setSeconds(triggerAt.getSeconds() + retryInSec);

    const entity = await this._fallbackRepository.create({
      event,
      eventType,
      queue,
      triggerAt,
    });

    setTimeout(() => {
      this._handleEvent(entity);
    }, retryInSec * 1000);
  }

  @Cron(CronExpression.EVERY_MINUTE)
  async handleExpiredEvents() {
    this._logger.debug('Searching for expired events to handle');

    const expiredEvents = await this._fallbackRepository.findManyBy(
      {
        triggerAt: { $lte: new Date() },
      },
      { limit: 10 },
    );

    this._logger.debug('Found expired events:', expiredEvents.length);

    for (const entity of expiredEvents) {
      await this._handleEvent(entity);
    }
  }

  private async _handleEvent(entity: FallbackEvents) {
    try {
      const { queue, _id, event, eventType } = entity;
      const service = this._getService(queue);

      if (service) {
        this._logger.log(`Handling fallback event: ${eventType}`);
        service.emit(eventType, event);

        await this._fallbackRepository.deleteById(_id);
      }
    } catch (e) {
      this._logger.error(e);
    }
  }

  private _getService(queue: string) {
    switch (queue) {
      case EMAILS_QUEUE:
        return this._emailsService;
      default:
        return null;
    }
  }
}
