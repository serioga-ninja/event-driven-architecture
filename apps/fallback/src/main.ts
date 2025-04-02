import { BrokerConfigService, FALLBACK_QUEUE } from '@app/common';
import { NestFactory } from '@nestjs/core';
import { FallbackModule } from './fallback.module';

async function bootstrap() {
  const app = await NestFactory.create(FallbackModule);
  const brokerConfigService = app.get(BrokerConfigService);

  app.connectMicroservice(brokerConfigService.getServerConfig(FALLBACK_QUEUE));

  await app.startAllMicroservices();
}
bootstrap();
