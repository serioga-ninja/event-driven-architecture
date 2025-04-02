import AbstractBrokerConfigService, {
  type GetServerConfigOptions,
  type GetServiceConfigOptions,
} from '../abstract-broker-config.service';
import { Injectable } from '@nestjs/common';
import { KafkaOptions, Transport } from '@nestjs/microservices';

@Injectable()
export default class KafkaConfigService extends AbstractBrokerConfigService {
  getServerConfig(
    queue: string,
    options: GetServerConfigOptions = {},
  ): KafkaOptions {
    const { clientId, autoCommit = true, urls = [] } = options;

    return {
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId,
          brokers: urls,
        },
        run: {
          autoCommit,
        },
        consumer: {
          groupId: queue,
          allowAutoTopicCreation: true,
        },
      },
    };
  }

  override getServiceConfig(options: GetServiceConfigOptions): KafkaOptions {
    const { queue, urls, clientId } = options;

    return {
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId,
          brokers: urls || [],
        },
        consumer: {
          groupId: queue,
        },
      },
    };
  }
}
