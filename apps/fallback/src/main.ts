import { FALLBACK_QUEUE, RmqService } from '@app/common';
import { NestFactory } from '@nestjs/core';
import { FallbackModule } from './fallback.module';

async function bootstrap() {
  const app = await NestFactory.create(FallbackModule);
  const rmqService = app.get(RmqService);

  app.connectMicroservice(rmqService.getOptions(FALLBACK_QUEUE));

  await app.startAllMicroservices();
}
bootstrap();
