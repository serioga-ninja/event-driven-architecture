import {
  AuthModule,
  EMAILS_QUEUE,
  EMAILS_SERVICE,
  RmqModule,
} from '@app/common';
import { Global, Module } from '@nestjs/common';
import UsersController from './users.controller';
import MongoUsersRepository from './repositories/mongo-users.repository';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UsersSchema } from './mongo-schemas';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Users.name, schema: UsersSchema }]),
    RmqModule.register({
      name: EMAILS_SERVICE,
      queue: EMAILS_QUEUE,
    }),
    AuthModule,
  ],
  controllers: [UsersController],
  providers: [UsersService, MongoUsersRepository],
  exports: [MongoUsersRepository, UsersService],
})
export class UsersModule {}
