import { EMAILS_QUEUE, EMAILS_SERVICE } from '@app/common';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
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

  async saveFallbackEvent(event: FallbackEvent) {
    this._logger.log(`Saving fallback event: ${event.data.eventType}`);

    const { data, queue, retryInSec, eventType } = event.data;
    const triggerAt = new Date();
    triggerAt.setSeconds(triggerAt.getSeconds() + retryInSec);

    const entity = await this._fallbackRepository.create({
      data,
      eventType,
      queue,
      triggerAt,
    });

    setTimeout(() => {
      this._handleEvent(entity);
    }, retryInSec * 1000);
  }

  private async _handleEvent(entity: FallbackEvents) {
    try {
      const { queue, _id, data, eventType } = entity;
      const service = this._getService(queue);

      if (service) {
        this._logger.log(`Handling fallback event: ${eventType}`);
        service.emit(eventType, data);

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
