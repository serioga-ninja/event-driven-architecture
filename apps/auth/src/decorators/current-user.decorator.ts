import type { ExecutionContext } from '@nestjs/common';
import { createParamDecorator } from '@nestjs/common';
import type { FastifyRequest } from 'fastify';
import {TokenPayload} from "../../../../types";

const getCurrentUserByContext = (
  context: ExecutionContext,
): TokenPayload | undefined => {
  if (context.getType() === 'http') {
    return context.switchToHttp().getRequest<FastifyRequest>().user;
  }

  if (context.getType() === 'rpc') {
    return context.switchToRpc().getData().user;
  }
};

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) =>
    getCurrentUserByContext(context),
);
