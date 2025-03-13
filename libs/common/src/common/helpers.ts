import type { ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import type { FastifyRequest } from 'fastify';

export const getRequest = <T = any>(
  context: ExecutionContext,
): T | undefined => {
  const contextType: string = context.getType();

  switch (contextType) {
    case 'http':
      return context.switchToHttp().getRequest();
    case 'rpc':
      return context.switchToRpc().getData();
    case 'ws':
      return context.switchToWs().getData();
    case 'graphql':
      return GqlExecutionContext.create(context).getContext().req;
  }
};

export const getAuthString = (
  context: ExecutionContext,
): string | undefined | null => {
  const contextType: string = context.getType();

  switch (contextType) {
    case 'http':
      return getRequest<FastifyRequest>(context)?.headers.authorization;
    case 'rpc':
      return getRequest(context).Authentication;
    case 'graphql': {
      const req = getRequest<FastifyRequest>(context);

      return req?.headers.authorization;
    }
  }
};
