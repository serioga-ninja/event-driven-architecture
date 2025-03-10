import { Module } from '@nestjs/common';
import GrpcService from '@app/common/grpc/grpc.service';

@Module({
  providers: [GrpcService],
  exports: [GrpcService],
})
export default class GrpcModule {}
