import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import BrokerConfigService from './broker-config.service';
import { KafkaModule } from './kafka';
import { RmqModule } from './rmq';

@Global()
@Module({
  imports: [KafkaModule, RmqModule, ConfigModule],
  providers: [BrokerConfigService],
  exports: [BrokerConfigService],
})
export default class MessageBrokerConfig {}
