import { AllExceptionsFilter } from '@app/common';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { useContainer } from 'class-validator';
import type { UserConfig } from './types';
import { UsersModule } from './users.module';

async function bootstrap() {
  const app = await NestFactory.create(
    UsersModule,
    new FastifyAdapter({ logger: true }),
  );

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new AllExceptionsFilter());

  useContainer(app.select(UsersModule), { fallbackOnErrors: true });

  const config = app.get(ConfigService<UserConfig, true>);

  await app.listen(config.get('PORT'));
}
bootstrap();
