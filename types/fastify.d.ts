import type { FastifyRequest as Request } from 'fastify';
import type { TokenPayload } from '@app/common';

declare module 'fastify' {
  interface FastifyRequest extends Request {
    user?: TokenPayload;
  }
}
