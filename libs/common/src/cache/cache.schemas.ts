import * as Joi from 'joi';

export type CacheConfig = {
  CACHE_TTL?: number;
  CACHE_REDIS_URL: string;
};

export const cacheConfigSchema = Joi.object<CacheConfig>({
  CACHE_TTL: Joi.number().optional(),
  CACHE_REDIS_URL: Joi.string().required(),
});
