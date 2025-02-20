import { NestFactory } from '@nestjs/core';
import { CommunicationModule } from './communication.module';
import { Transport, type MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    CommunicationModule,
    {
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: 3001,
      },
    },
  );

  await app.listen();
}
bootstrap();
