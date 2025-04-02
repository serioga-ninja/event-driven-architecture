import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import FallbackEvent from './events/fallback.event';
import { FallbackService } from './fallback.service';

@Controller()
export class FallbackController {
  constructor(private readonly _fallbackService: FallbackService) {}

  @EventPattern(FallbackEvent.type)
  async handleFallbackCallback(@Payload() data: FallbackEvent) {
    await this._fallbackService.saveFallbackEvent(data);
  }
}
