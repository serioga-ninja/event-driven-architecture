import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { COMMUNICATION_SERVICE } from '../../../src/constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: COMMUNICATION_SERVICE,
        transport: Transport.TCP,
        options: {
          port: 3001,
        },
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
