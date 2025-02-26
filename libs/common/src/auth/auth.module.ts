import { Module } from '@nestjs/common';
import { AUTH_QUEUE, AUTH_SERVICE } from '../rmq';
import RmqModule from '../rmq/rmq.module';

@Module({
  imports: [RmqModule.register({ name: AUTH_SERVICE, queue: AUTH_QUEUE })],
  exports: [RmqModule],
})
export class AuthModule {}
