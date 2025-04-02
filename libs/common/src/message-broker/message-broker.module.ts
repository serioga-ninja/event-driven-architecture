import { type DynamicModule, Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import BrokerConfigService from './broker-config.service';
import MessageBrokerConfig from './message-broker-configs.module';

type RegisterOptions = {
  name: string;
  queue: string;
};

@Module({})
export default class MessageBrokerModule {
  static register(options: RegisterOptions | RegisterOptions[]): DynamicModule {
    const arrOptions = Array.isArray(options) ? options : [options];

    return {
      module: MessageBrokerModule,
      imports: [
        MessageBrokerConfig,
        ClientsModule.registerAsync(
          arrOptions.map(({ name, queue }) => ({
            name,
            imports: [MessageBrokerConfig],
            inject: [BrokerConfigService],
            useFactory: (configService: BrokerConfigService) =>
              configService.getServiceConfig({
                queue,
              }),
          })),
        ),
      ],
      exports: [ClientsModule],
    };
  }
}
