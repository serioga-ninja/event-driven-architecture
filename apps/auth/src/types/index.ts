import type { Users } from '../../../users/src/schemas';
import { Request } from 'express';

export type AuthRequest = Request & { user: Users };
export type AuthConfigs = {
  PORT: number;
  JWT_SECRET: string;
  JWT_EXPIRATION: number;
  MONGODB_URI: string;
  RABBIT_MQ_URI: string;
};
