import {
  CacheModule,
  DatabaseModule,
  EMAILS_QUEUE,
  EMAILS_SERVICE,
  RmqModule,
  GrpcModule,
} from '@app/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import CommonModule from '../../../libs/common/src/common/common.module';
import { Users, UsersSchema } from '../../app/src/users/mongo-schemas';
import { AuthController } from './auth.controller';
import {
  LoginUserHandler,
  RegisterUserHandler,
  ResetAuthUserCacheHandler,
  SendRegistrationEmailHandler,
} from './commands';
import { MongoAuthRepository } from './repositories';
import { authConfigSchema } from './schemas';
import { AuthSaga, AuthService, PasswordService } from './services';
import AuthCacheService from './services/auth-cache.service';
import { JwtStrategy, LocalStrategy } from './strategies';

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
    RmqModule.register({
      name: EMAILS_SERVICE,
      queue: EMAILS_QUEUE,
    }),
    CacheModule,
    GrpcModule,
    MongooseModule.forFeature([{ name: Users.name, schema: UsersSchema }]),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    AuthSaga,
    AuthCacheService,
    PasswordService,
    LocalStrategy,
    JwtStrategy,
    MongoAuthRepository,
    RegisterUserHandler,
    SendRegistrationEmailHandler,
    LoginUserHandler,
    ResetAuthUserCacheHandler,
  ],
})
export class AuthModule {}
