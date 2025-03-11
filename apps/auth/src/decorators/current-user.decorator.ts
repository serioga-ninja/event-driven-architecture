import type { ExecutionContext } from '@nestjs/common';
import { createParamDecorator } from '@nestjs/common';
import type { FastifyRequest } from 'fastify';
import type { TokenPayload } from '@app/common';

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext): TokenPayload | undefined => {
    if (context.getType() === 'http') {
      return context.switchToHttp().getRequest<FastifyRequest>().user;
    }

    if (context.getType() === 'rpc') {
      return context.switchToRpc().getData<FastifyRequest>().user;
    }
  },
);
