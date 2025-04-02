import { AbstractEvent } from '@app/common';

type FallbackOptions = {
  event: object;
  eventType: string;
  retryInSec: number;
  queue: string;
};

export default class FallbackEvent extends AbstractEvent {
  public static type = 'fallback.create';

  constructor(public readonly data: FallbackOptions) {
    super();
  }
}
