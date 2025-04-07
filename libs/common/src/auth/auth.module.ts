import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { ConfigService } from '@nestjs/config';
import { AuthModuleConfig } from './types';
import JwtAuthGuard from '@app/common/auth/jwt-auth.guard';
import {
  AUTH_QUEUE,
  AUTH_SERVICE,
  GRPC_AUTH_SERVICE,
  MessageBrokerModule,
} from '../message-broker';
import * as process from 'node:process';

@Module({
  imports: [
    MessageBrokerModule.register({
      name: AUTH_SERVICE,
      queue: AUTH_QUEUE,
    }),
    ClientsModule.registerAsync([
      {
        name: GRPC_AUTH_SERVICE,
        useFactory: (configService: ConfigService<AuthModuleConfig>) => ({
          transport: Transport.GRPC,
          options: {
            url: configService.getOrThrow('AUTH_SERVER_URI'),
            package: 'auth',
            protoPath: join(
              process.cwd(),
              'libs/common/src/auth/proto/auth.proto',
            ),
          },
        }),
        inject: [ConfigService],
      },
    ]),
  ],
  exports: [MessageBrokerModule, ClientsModule],
  providers: [JwtAuthGuard],
})
export class AuthModule {}
