import { AUTH_QUEUE, RmqService } from '@app/common';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import type { AuthConfigs } from './types';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  const rmqService = app.get(RmqService);

  app.connectMicroservice(rmqService.getOptions(AUTH_QUEUE, true));
  app.useGlobalPipes(new ValidationPipe());

  const configService = app.get(ConfigService<AuthConfigs, true>);
  await app.startAllMicroservices();
  await app.listen(configService.get('PORT'));
}
bootstrap();
