import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Transport, type RmqOptions } from '@nestjs/microservices';

@Injectable()
export default class RmqService {
  constructor(private readonly configService: ConfigService) {}

  getOptions(queue: string, noAck = false): RmqOptions {
    return {
      transport: Transport.RMQ,
      options: {
        urls: [this.configService.get<string>('RMQ_URL') as string],
        queue: this.configService.get<string>(queue) as string,
        noAck,
        persistent: true,
      },
    };
  }
}
