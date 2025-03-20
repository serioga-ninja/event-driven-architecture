import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  OnModuleInit,
  UnauthorizedException,
} from '@nestjs/common';
import { ClientGrpc, ClientProxy } from '@nestjs/microservices';
import { catchError, map, Observable, tap } from 'rxjs';
import { AUTH_SERVICE, GRPC_AUTH_SERVICE } from '../rmq';
import { ValidateUserEvent } from './events';
import {
  AuthModuleConfig,
  getAuthString,
  getRequest,
  TokenPayload,
} from '@app/common';
import { ConfigService } from '@nestjs/config';

type AuthService = {
  Validate(data: { authentication: string }): Observable<TokenPayload>;
};

@Injectable()
export default class JwtAuthGuard implements CanActivate, OnModuleInit {
  private _authService: AuthService;

  constructor(
    @Inject(AUTH_SERVICE) private readonly _rmqAuthClient: ClientProxy,
    @Inject(GRPC_AUTH_SERVICE) private readonly _grpcAuthClient: ClientGrpc,
    private readonly _configService: ConfigService<AuthModuleConfig>,
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const authentication = this.getAuthentication(context);

    const transport = this._configService.get('AUTH_TRANSPORT') || 'grpc';

    switch (transport) {
      case 'rmq':
        return this._sendViaRMQ(authentication, context);
      case 'grpc':
      default:
        return this._sendViaGRPC(authentication, context);
    }
  }

  onModuleInit(): any {
    this._authService =
      this._grpcAuthClient.getService<AuthService>('AuthService');
  }

  private _sendViaGRPC(
    authentication: string,
    context: ExecutionContext,
  ): Observable<boolean> {
    return this._authService.Validate({ authentication }).pipe(
      tap<TokenPayload>((res) => {
        this.addUser(res, context);
      }),
      map((res) => !!res),
      catchError(() => {
        throw new UnauthorizedException();
      }),
    );
  }

  private _sendViaRMQ(
    authentication: string,
    context: ExecutionContext,
  ): Observable<boolean> {
    return this._rmqAuthClient
      .send(ValidateUserEvent.type, new ValidateUserEvent(authentication))
      .pipe(
        tap<TokenPayload>((res) => {
          this.addUser(res, context);
        }),
        map((res) => !!res),
        catchError(() => {
          throw new UnauthorizedException();
        }),
      );
  }

  private getAuthentication(context: ExecutionContext): string {
    const authentication = getAuthString(context);

    if (!authentication) {
      throw new UnauthorizedException(
        'No value was provided for Authentication',
      );
    }

    return authentication;
  }

  private addUser(user: TokenPayload, context: ExecutionContext): void {
    getRequest(context).user = user;
  }
}
