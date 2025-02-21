import { DatabaseModule, RmqModule } from '@app/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import * as Joi from 'joi';
import { EMAILS_SERVICE } from './constants';
import { Users, UsersSchema } from './schemas';
import { UsersController } from './users.controller';
import UsersRepository from './users.repository';
import { UsersService } from './users.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        USERS_PORT: Joi.number().required(),
      }),
      envFilePath: './apps/users/.env',
    }),
    DatabaseModule,
    MongooseModule.forFeature([{ name: Users.name, schema: UsersSchema }]),
    RmqModule.register({ name: EMAILS_SERVICE, queue: 'RMQ_EMAIL_QUEUE' }),
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
})
export class UsersModule {}
