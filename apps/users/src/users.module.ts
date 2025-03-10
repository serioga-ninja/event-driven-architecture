import {
  AuthModule,
  DatabaseModule,
  EMAILS_QUEUE,
  EMAILS_SERVICE,
  RmqModule,
} from '@app/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RouterModule } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UsersSchema } from './mongo-schemas';
import { userConfigSchema } from './schemas';
import { SecurityModule } from './security/security.module';
import UsersController from './users.controller';
import UsersRepository from './users.repository';
import { UsersService } from './users.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: userConfigSchema,
      envFilePath: './apps/users/.env',
    }),
    DatabaseModule,
    MongooseModule.forFeature([{ name: Users.name, schema: UsersSchema }]),
    RmqModule.register({
      name: EMAILS_SERVICE,
      queue: EMAILS_QUEUE,
    }),
    AuthModule,
    SecurityModule,
    RouterModule.register([
      {
        path: 'security',
        module: SecurityModule,
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  exports: [UsersRepository, UsersService],
})
export class UsersModule {}
