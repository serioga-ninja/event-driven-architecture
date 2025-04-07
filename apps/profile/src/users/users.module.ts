import {
  AuthModule,
  DatabaseModule,
  EMAILS_QUEUE,
  EMAILS_SERVICE,
  MessageBrokerModule,
} from '@app/common';
import { Global, Module } from '@nestjs/common';
import UsersController from './users.controller';
import { UsersService } from './users.service';
import { UsersRepository } from './repositories';

@Global()
@Module({
  imports: [
    DatabaseModule,
    MessageBrokerModule.register({
      name: EMAILS_SERVICE,
      queue: EMAILS_QUEUE,
    }),
    AuthModule,
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  exports: [UsersService, UsersRepository],
})
export class UsersModule {}
