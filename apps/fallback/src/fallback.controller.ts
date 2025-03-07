import { RmqService } from '@app/common';
import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import FallbackEvent from './events/fallback.event';
import { FallbackService } from './fallback.service';

@Controller()
export class FallbackController {
  constructor(
    private readonly _fallbackService: FallbackService,
    private readonly _rmqService: RmqService,
  ) {}

  @EventPattern(FallbackEvent.type)
  async handleFallbackCallback(
    @Payload() data: FallbackEvent,
    @Ctx() context: RmqContext,
  ) {
    await this._fallbackService.saveFallbackEvent(data);

    this._rmqService.ack(context);
  }
}
