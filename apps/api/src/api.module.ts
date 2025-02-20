import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
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
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
