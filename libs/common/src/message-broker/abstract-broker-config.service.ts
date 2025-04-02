import type { ClientProvider } from '@nestjs/microservices/module/interfaces/clients-module.interface';

export type GetServerConfigOptions = {
  clientId?: string;
  autoCommit?: boolean;
  urls?: string[];
};

export type GetServiceConfigOptions = {
  queue: string;
  urls?: string[];
  clientId?: string;
};

export default abstract class AbstractBrokerConfigService {
  abstract getServerConfig(
    queue: string,
    options?: GetServerConfigOptions,
  ): any;

  abstract getServiceConfig(
    options: GetServiceConfigOptions,
  ): Promise<ClientProvider> | ClientProvider;
}
