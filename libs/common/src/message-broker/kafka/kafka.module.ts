import { Module } from '@nestjs/common';
import KafkaConfigService from './kafka-config.service';

export type KafkaModuleOptions = {
  brokers: string[];
  topic: string;
};

@Module({
  providers: [KafkaConfigService],
  exports: [KafkaConfigService],
})
export default class KafkaModule {}
