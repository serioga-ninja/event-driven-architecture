import * as Joi from 'joi';

type FallbackConfig = {
  RABBIT_MQ_URI: string;
  MONGODB_URI: string;
};

export const fallbackConfigSchema = Joi.object<FallbackConfig>({
  RABBIT_MQ_URI: Joi.string().required(),
  MONGODB_URI: Joi.string().required(),
});
