import { RmqService } from '@app/common';
import { NestFactory } from '@nestjs/core';
import { EmailsModule } from './emails.module';

async function bootstrap() {
  const app = await NestFactory.create(EmailsModule);
  const rmqService = app.get(RmqService);

  app.connectMicroservice(rmqService.getOptions('RMQ_EMAIL_QUEUE'));

  await app.startAllMicroservices();
}
bootstrap();
