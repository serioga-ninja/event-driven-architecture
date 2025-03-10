import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { FastifyRequest } from 'fastify';
import { catchError, Observable, tap } from 'rxjs';
import { AUTH_SERVICE } from '../rmq';
import { ValidateUserEvent } from './events';
import type { TokenPayload } from '@app/common';

@Injectable()
export default class JwtAuthGuard implements CanActivate {
  constructor(
    @Inject(AUTH_SERVICE) private readonly _authClient: ClientProxy,
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const authentication = this.getAuthentication(context);

    return this._authClient
      .send(ValidateUserEvent.type, new ValidateUserEvent(authentication))
      .pipe(
        tap((res) => {
          this.addUser(res, context);
        }),
        catchError(() => {
          throw new UnauthorizedException();
        }),
      );
  }

  private getAuthentication(context: ExecutionContext): string {
    let authentication: string | null = null;

    if (context.getType() === 'rpc') {
      authentication = context.switchToRpc().getData().Authentication;
    } else if (context.getType() === 'http') {
      authentication =
        context.switchToHttp().getRequest<FastifyRequest>().headers
          .authorization || null;
    }

    if (!authentication) {
      throw new UnauthorizedException(
        'No value was provided for Authentication',
      );
    }

    return authentication;
  }

  private addUser(user: TokenPayload, context: ExecutionContext): void {
    if (context.getType() === 'rpc') {
      context.switchToRpc().getData().user = user;
    } else if (context.getType() === 'http') {
      context.switchToHttp().getRequest<FastifyRequest>().user = user;
    }
  }
}
