import {
  CacheModule,
  DatabaseModule,
  EMAILS_QUEUE,
  EMAILS_SERVICE,
  GrpcModule,
  MessageBrokerModule,
} from '@app/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import CommonModule from '../../../libs/common/src/common/common.module';
import { AuthController } from './auth.controller';
import {
  LoginUserHandler,
  RegisterUserHandler,
  ResetAuthUserCacheHandler,
  SendRegistrationEmailHandler,
} from './commands';
import { authConfigSchema } from './schemas';
import { AuthSaga, AuthService, PasswordService } from './services';
import AuthCacheService from './services/auth-cache.service';
import { JwtStrategy, LocalStrategy } from './strategies';
import AuthRepository from './repositories/auth.repository';

@Module({
  imports: [
    CqrsModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: authConfigSchema,
      envFilePath: './apps/auth/.env',
    }),
    DatabaseModule,
    CommonModule,
    MessageBrokerModule.register({
      name: EMAILS_SERVICE,
      queue: EMAILS_QUEUE,
    }),
    CacheModule,
    GrpcModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    AuthRepository,
    AuthSaga,
    AuthCacheService,
    PasswordService,
    LocalStrategy,
    JwtStrategy,
    RegisterUserHandler,
    SendRegistrationEmailHandler,
    LoginUserHandler,
    ResetAuthUserCacheHandler,
  ],
})
export class AuthModule {}
