import type { AuthModuleConfig } from '@app/common';

export type AppConfig = {
  MONGODB_URI: string;
  RABBIT_MQ_URI: string;
  PORT: string;
  TWO_FA_SECRET: string;
} & AuthModuleConfig;
