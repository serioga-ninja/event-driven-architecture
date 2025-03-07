type FallbackOptions = {
  data: any;
  eventType: string;
  retryInSec: number;
  queue: string;
};

export default class FallbackEvent {
  public static type = 'fallback';

  constructor(public readonly data: FallbackOptions) {}
}
