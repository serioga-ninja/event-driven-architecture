import type { CacheConfig, MessageBrokerConfig, NODE_ENV } from '@app/common';
import type { FastifyRequest } from 'fastify';
import type { Users } from '../../../profile/src/users/mongo-schemas';

export type LoginRequest = FastifyRequest & { user: ValidateUserReturn };
export type AuthConfigs = {
  PORT: number;
  GRPC_URI: string;
  JWT_SECRET: string;
  JWT_EXPIRATION_SEC: number;
  MONGODB_URI: string;
  NODE_ENV: NODE_ENV;
} & CacheConfig &
  MessageBrokerConfig;
export type AuthUser = {
  id: string;
  email: string;
};
export type ValidateUserReturn = Pick<
  Users,
  'id' | 'email' | 'isTfaEnabled' | 'tfaSecret'
>;
