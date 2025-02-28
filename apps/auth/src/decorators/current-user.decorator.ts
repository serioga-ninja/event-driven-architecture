import type { ExecutionContext } from '@nestjs/common';
import { createParamDecorator } from '@nestjs/common';
import type { AuthRequest, AuthUser } from '../types';

const getCurrentUserByContext = (
  context: ExecutionContext,
): AuthUser | undefined => {
  if (context.getType() === 'http') {
    return context.switchToHttp().getRequest<AuthRequest>().user;
  }

  if (context.getType() === 'rpc') {
    return context.switchToRpc().getData().user;
  }
};

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) =>
    getCurrentUserByContext(context),
);
