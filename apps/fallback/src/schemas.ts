import * as Joi from 'joi';

type FallbackConfig = {
  RABBIT_MQ_URI: string;
};

export const fallbackConfigSchema = Joi.object<FallbackConfig>({
  RABBIT_MQ_URI: Joi.string().required(),
});
