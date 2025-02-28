import { EMAILS_QUEUE, RmqService } from '@app/common';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { EmailsModule } from './emails.module';

async function bootstrap() {
  const app = await NestFactory.create(
    EmailsModule,
    new FastifyAdapter({ logger: true }),
  );
  const rmqService = app.get(RmqService);

  app.connectMicroservice(rmqService.getOptions(EMAILS_QUEUE));

  await app.startAllMicroservices();
}
bootstrap();
