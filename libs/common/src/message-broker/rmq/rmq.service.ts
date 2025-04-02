import { Injectable } from '@nestjs/common';
import {
  type RmqContext,
  type RmqOptions,
  Transport,
} from '@nestjs/microservices';
import AbstractBrokerConfigService, {
  type GetServerConfigOptions,
  type GetServiceConfigOptions,
} from '../abstract-broker-config.service';

@Injectable()
export default class RmqService extends AbstractBrokerConfigService {
  getServerConfig(
    queue: string,
    options: GetServerConfigOptions = {},
  ): RmqOptions {
    const { autoCommit = false, clientId, urls } = options;

    return {
      transport: Transport.RMQ,
      options: {
        urls,
        queue,
        noAck: !autoCommit,
        persistent: true,
        socketOptions: {
          clientProperties: {
            connection_name: clientId,
          },
        },
      },
    };
  }

  override getServiceConfig(options: GetServiceConfigOptions): RmqOptions {
    const { queue, urls } = options;

    return {
      transport: Transport.RMQ,
      options: {
        urls,
        queue,
      },
    };
  }

  ack(context: RmqContext) {
    const channel = context.getChannelRef();
    const message = context.getMessage();

    channel.ack(message);
  }
}
