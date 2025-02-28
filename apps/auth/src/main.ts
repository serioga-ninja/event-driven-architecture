import { AllExceptionsFilter, AUTH_QUEUE, RmqService } from '@app/common';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { AuthModule } from './auth.module';
import type { AuthConfigs } from './types';

async function bootstrap() {
  const app = await NestFactory.create(
    AuthModule,
    new FastifyAdapter({ logger: true }),
  );
  const rmqService = app.get(RmqService);

  app.connectMicroservice(rmqService.getOptions(AUTH_QUEUE, true));
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new AllExceptionsFilter());

  const configService = app.get(ConfigService<AuthConfigs, true>);
  await app.startAllMicroservices();
  await app.listen(configService.get('PORT'), '0.0.0.0');
}
bootstrap();
