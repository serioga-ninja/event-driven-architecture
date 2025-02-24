import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {
  DatabaseModule,
  EMAILS_QUEUE,
  EMAILS_SERVICE,
  RmqModule,
} from '@app/common';
import { UsersModule } from '../../users/src/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy, LocalStrategy } from './strategies';
import PasswordService from './passwords.service';
import type { AuthConfigs } from './types';

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    RmqModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object<AuthConfigs>({
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRATION: Joi.string().required(),
        MONGODB_URI: Joi.string().required(),
        RABBIT_MQ_URI: Joi.string().required(),
        PORT: Joi.string().required(),
      }),
      envFilePath: './apps/auth/.env',
    }),
    JwtModule.registerAsync({
      useFactory: (config: ConfigService) => ({
        secret: config.get('JWT_SECRET'),
        signOptions: { expiresIn: config.get('JWT_EXPIRATION') },
      }),
      inject: [ConfigService],
    }),
    RmqModule.register({
      name: EMAILS_SERVICE,
      queue: EMAILS_QUEUE,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy, PasswordService],
})
export class AuthModule {}
