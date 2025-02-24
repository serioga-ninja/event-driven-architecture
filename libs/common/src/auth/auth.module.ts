import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import RmqModule from '../rmq/rmq.module';
import { AUTH_QUEUE, AUTH_SERVICE } from '../rmq';

@Module({
  imports: [RmqModule.register({ name: AUTH_SERVICE, queue: AUTH_QUEUE })],
  exports: [RmqModule],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cookieParser()).forRoutes('*');
  }
}
