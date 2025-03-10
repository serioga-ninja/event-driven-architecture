import { Injectable } from '@nestjs/common';
import { type GrpcOptions, Transport } from '@nestjs/microservices';
import { ReflectionService } from '@grpc/reflection';
import { ConfigService } from '@nestjs/config';

type Options = {
  package: string;
  protoPath: string;
};

@Injectable()
export default class GrpcService {
  constructor(private readonly configService: ConfigService) {}

  getOptions(options: Options): GrpcOptions {
    return {
      transport: Transport.GRPC,
      options: {
        ...options,
        url: this.configService.getOrThrow('GRPC_URI'),
        onLoadPackageDefinition: (pkg, server) => {
          new ReflectionService(pkg).addToServer(server);
        },
      },
    };
  }
}
