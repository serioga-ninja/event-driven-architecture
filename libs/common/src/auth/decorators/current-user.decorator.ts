import type { ExecutionContext } from '@nestjs/common';
import { createParamDecorator } from '@nestjs/common';
import type { TokenPayload } from '@app/common';
import { getRequest } from '@app/common';

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext): TokenPayload | undefined => {
    return getRequest<{ user?: TokenPayload }>(context)?.user;
  },
);
