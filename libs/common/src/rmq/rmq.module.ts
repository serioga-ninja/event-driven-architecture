import { Module, type DynamicModule } from '@nestjs/common';
import RmqService from './rmq.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

type RmqModuleOptions = {
  name: string;
  queue: string;
};

@Module({
  providers: [RmqService],
  exports: [RmqService],
})
export default class RmqModule {
  static register({ name, queue }: RmqModuleOptions): DynamicModule {
    return {
      module: RmqModule,
      imports: [
        ClientsModule.registerAsync([
          {
            name,
            useFactory: (ConfigService: ConfigService) => ({
              transport: Transport.RMQ,
              options: {
                urls: [ConfigService.get<string>('RABBIT_MQ_URI') as string],
                queue,
              },
            }),
            inject: [ConfigService],
          },
        ]),
      ],
      exports: [ClientsModule],
    };
  }
}
