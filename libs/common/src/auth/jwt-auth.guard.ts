import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Request } from 'express';
import { FastifyRequest } from 'fastify';
import { catchError, Observable, tap } from 'rxjs';
import { AUTH_SERVICE } from '../rmq';
import { ValidateUserEvent } from './events';
import type { TokenPayload } from '../../../../types';

@Injectable()
export default class JwtAuthGuard implements CanActivate {
  constructor(@Inject(AUTH_SERVICE) private authClient: ClientProxy) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const authentication = this.getAuthentication(context);

    return this.authClient
      .send(ValidateUserEvent.type, new ValidateUserEvent(authentication))
      .pipe(
        tap((res) => {
          console.log(res);

          this.addUser(res, context);
        }),
        catchError((err) => {
          console.error(err);
          throw new UnauthorizedException();
        }),
      );
  }

  private getAuthentication(context: ExecutionContext): string {
    let authentication: string | null = null;

    if (context.getType() === 'rpc') {
      authentication = context.switchToRpc().getData().Authentication;
    } else if (context.getType() === 'http') {
      authentication = this.extractTokenFromHeader(
        context.switchToHttp().getRequest(),
      );
    }

    if (!authentication) {
      throw new UnauthorizedException(
        'No value was provided for Authentication',
      );
    }

    return authentication;
  }

  private extractTokenFromHeader(request: Request): string | null {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];

    return type === 'Bearer' ? token : null;
  }

  private addUser(user: TokenPayload, context: ExecutionContext): void {
    if (context.getType() === 'rpc') {
      context.switchToRpc().getData().user = user;
    } else if (context.getType() === 'http') {
      context.switchToHttp().getRequest<FastifyRequest>().user = user;
    }
  }
}
