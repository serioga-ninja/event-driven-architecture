import { EMAILS_QUEUE, RmqService } from '@app/common';
import { NestFactory } from '@nestjs/core';
import { EmailsModule } from './emails.module';

async function bootstrap() {
  const app = await NestFactory.create(EmailsModule);
  const rmqService = app.get(RmqService);

  app.connectMicroservice(rmqService.getOptions(EMAILS_QUEUE));

  await app.startAllMicroservices();
}
bootstrap();
