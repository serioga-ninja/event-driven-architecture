import * as Joi from 'joi';
import type { MessageBrokerConfig } from '@app/common';
import { messageBrokerConfigSchema } from '@app/common';

type FallbackConfig = {
  MONGODB_URI: string;
} & MessageBrokerConfig;

export const fallbackConfigSchema = Joi.object<FallbackConfig>({
  MONGODB_URI: Joi.string().required(),
}).concat(messageBrokerConfigSchema as any);
