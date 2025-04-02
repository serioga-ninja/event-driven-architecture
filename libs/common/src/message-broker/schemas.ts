import * as Joi from 'joi';
import type { MessageBrokerConfig } from '@app/common';

export const messageBrokerConfigSchema = Joi.object<MessageBrokerConfig>({
  MESSAGE_BROKER_URLS: Joi.string().required(),
  MESSAGE_BROKER: Joi.string().required().allow('kafka', 'rmq'),
});
