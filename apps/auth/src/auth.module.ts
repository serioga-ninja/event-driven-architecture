import {
  CacheModule,
  DatabaseModule,
  EMAILS_QUEUE,
  EMAILS_SERVICE,
  RmqModule,
} from '@app/common';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UsersSchema } from '../../users/src/mongo-schemas';
import { AuthController } from './auth.controller';
import { AuthRepository } from './repositories';
import { authConfigSchema } from './schemas';
import { AuthService, PasswordService } from './services';
import { JwtStrategy, LocalStrategy } from './strategies';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: authConfigSchema,
      envFilePath: './apps/auth/.env',
    }),
    DatabaseModule,
    RmqModule,
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
    CacheModule,
    MongooseModule.forFeature([{ name: Users.name, schema: UsersSchema }]),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    PasswordService,
    AuthRepository,
  ],
})
export class AuthModule {}
