import type { FastifyRequest as Request } from 'fastify';
import type { AuthUser } from '../apps/auth/src/types';

export type TokenPayload = AuthUser;

declare module 'fastify' {
  interface FastifyRequest extends Request {
    user?: TokenPayload;
  }
}
