import {
  FALLBACK_QUEUE,
  FALLBACK_SERVICE,
  MessageBrokerModule,
} from '@app/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import MailgunEmailProvider from './email-providers/mailgun-email.provider';
import { EmailsController } from './emails.controller';
import EmailsService from './emails.service';
import { emailsConfigSchema } from './schemas';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: emailsConfigSchema,
      envFilePath: './apps/emails/.env',
    }),
    MessageBrokerModule.register({
      name: FALLBACK_SERVICE,
      queue: FALLBACK_QUEUE,
    }),
  ],
  controllers: [EmailsController],
  providers: [EmailsService, MailgunEmailProvider],
})
export class EmailsModule {}
