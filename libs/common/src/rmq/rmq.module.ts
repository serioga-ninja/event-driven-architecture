import { type DynamicModule, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import RmqService from './rmq.service';

type RmqModuleOptions = {
  name: string;
  queue: string;
};

@Module({
  providers: [RmqService],
  exports: [RmqService],
})
export default class RmqModule {
  static register(
    options: RmqModuleOptions | RmqModuleOptions[],
  ): DynamicModule {
    const arrOptions = Array.isArray(options) ? options : [options];

    return {
      module: RmqModule,
      imports: [
        ClientsModule.registerAsync(
          arrOptions.map(({ name, queue }) => ({
            name,
            useFactory: (ConfigService: ConfigService) => ({
              transport: Transport.RMQ,
              options: {
                urls: [ConfigService.get<string>('RABBIT_MQ_URI') as string],
                queue,
              },
            }),
            inject: [ConfigService],
          })),
        ),
      ],
      exports: [ClientsModule],
    };
  }
}
