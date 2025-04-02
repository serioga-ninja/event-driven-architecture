import { EMAILS_QUEUE, BrokerConfigService } from '@app/common';
import { NestFactory } from '@nestjs/core';
import { EmailsModule } from './emails.module';

async function bootstrap() {
  const app = await NestFactory.create(EmailsModule);
  const brokerConfig = app.get(BrokerConfigService);

  app.connectMicroservice(brokerConfig.getServerConfig(EMAILS_QUEUE));

  await app.startAllMicroservices();
}
bootstrap();
