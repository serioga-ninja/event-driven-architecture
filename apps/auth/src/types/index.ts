import type { CacheConfig, NODE_ENV } from '@app/common';
import type { FastifyRequest } from 'fastify';
import type { Users } from '../../../users/src/mongo-schemas';

export type AuthRequest = FastifyRequest & { user: AuthUser };
export type AuthConfigs = {
  PORT: number;
  JWT_SECRET: string;
  JWT_EXPIRATION: number;
  MONGODB_URI: string;
  RABBIT_MQ_URI: string;
  NODE_ENV: NODE_ENV;
} & CacheConfig;
export type AuthUser = Pick<Users, '_id' | 'email'>;
