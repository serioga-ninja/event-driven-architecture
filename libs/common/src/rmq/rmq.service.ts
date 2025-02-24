import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  Transport,
  type RmqContext,
  type RmqOptions,
} from '@nestjs/microservices';

@Injectable()
export default class RmqService {
  constructor(private readonly configService: ConfigService) {}

  getOptions(queue: string, noAck = false): RmqOptions {
    return {
      transport: Transport.RMQ,
      options: {
        urls: [this.configService.get<string>('RABBIT_MQ_URI') as string],
        queue,
        noAck,
        persistent: true,
      },
    };
  }

  ack(context: RmqContext) {
    const channel = context.getChannelRef();
    const message = context.getMessage();

    channel.ack(message);
  }
}
