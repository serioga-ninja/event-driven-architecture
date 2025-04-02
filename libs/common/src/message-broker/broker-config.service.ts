import { Injectable } from '@nestjs/common';
import { RmqService } from './rmq';
import { KafkaConfigService } from './kafka';
import AbstractBrokerConfigService, {
  GetServerConfigOptions,
  GetServiceConfigOptions,
} from './abstract-broker-config.service';
import { ConfigService } from '@nestjs/config';
import { MessageBrokerConfig } from './types';

@Injectable()
export default class BrokerConfigService extends AbstractBrokerConfigService {
  constructor(
    private readonly _rmqConfig: RmqService,
    private readonly _kafkaConfig: KafkaConfigService,
    private readonly _configService: ConfigService<MessageBrokerConfig>,
  ) {
    super();
  }

  getServerConfig(queue: string, options: GetServerConfigOptions = {}) {
    const { broker, urls } = this._getConfigs();

    options.urls = urls;

    switch (broker) {
      case 'kafka':
        return this._kafkaConfig.getServerConfig(queue, options);
      case 'rmq':
        return this._rmqConfig.getServerConfig(queue, options);
      default:
        throw new Error(`Unsupported message broker: ${broker}`);
    }
  }

  override getServiceConfig(options: GetServiceConfigOptions) {
    const { broker, urls } = this._getConfigs();

    options.urls = urls;

    switch (broker) {
      case 'kafka':
        return this._kafkaConfig.getServiceConfig(options);
      case 'rmq':
        return this._rmqConfig.getServiceConfig(options);
      default:
        throw new Error(`Unsupported message broker: ${broker}`);
    }
  }

  private _getConfigs() {
    const broker = this._configService.getOrThrow<string>('MESSAGE_BROKER');
    const urls = this._configService.getOrThrow<string>('MESSAGE_BROKER_URLS');

    const urlsArray = urls.split(',').map((url) => url.trim());

    return {
      broker,
      urls: urlsArray,
    };
  }
}
