import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import type { Users } from '../../../users/src/mongo-schemas';

const getCurrentUserByContext = (
  context: ExecutionContext,
): Users | undefined => {
  if (context.getType() === 'http') {
    return context.switchToHttp().getRequest().user;
  }
  if (context.getType() === 'rpc') {
    return context.switchToRpc().getData().user;
  }
};

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) =>
    getCurrentUserByContext(context),
);
