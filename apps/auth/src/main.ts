import {
  AllExceptionsFilter,
  AUTH_QUEUE,
  BrokerConfigService,
  GrpcService,
} from '@app/common';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { AuthModule } from './auth.module';
import type { AuthConfigs } from './types';
import { join } from 'path';
import * as process from 'node:process';

async function bootstrap() {
  const app = await NestFactory.create(
    AuthModule,
    new FastifyAdapter({ logger: true }),
  );
  const brokerConfigService = app.get(BrokerConfigService);
  const grpcService = app.get(GrpcService);

  app.connectMicroservice(brokerConfigService.getServerConfig(AUTH_QUEUE));
  app.connectMicroservice(
    grpcService.getOptions({
      package: 'auth',
      protoPath: join(process.cwd(), 'libs/common/src/auth/proto/auth.proto'),
    }),
  );

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new AllExceptionsFilter());

  const configService = app.get(ConfigService<AuthConfigs, true>);
  await app.startAllMicroservices();
  await app.listen(configService.get('PORT'), '0.0.0.0');
}
bootstrap();
