import { Module } from '@nestjs/common';
import { AUTH_QUEUE, AUTH_SERVICE, GRPC_AUTH_SERVICE } from '../rmq';
import RmqModule from '../rmq/rmq.module';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { ConfigService } from '@nestjs/config';
import { AuthModuleConfig } from './types';
import JwtAuthGuard from '@app/common/auth/jwt-auth.guard';

@Module({
  imports: [
    RmqModule.register({ name: AUTH_SERVICE, queue: AUTH_QUEUE }),
    ClientsModule.registerAsync([
      {
        name: GRPC_AUTH_SERVICE,
        useFactory: (configService: ConfigService<AuthModuleConfig>) => ({
          transport: Transport.GRPC,
          options: {
            url: configService.getOrThrow('AUTH_SERVER_URI'),
            package: 'auth',
            protoPath: join(__dirname, 'proto/auth.proto'),
          },
        }),
        inject: [ConfigService],
      },
    ]),
  ],
  exports: [RmqModule, ClientsModule],
  providers: [JwtAuthGuard],
})
export class AuthModule {}
