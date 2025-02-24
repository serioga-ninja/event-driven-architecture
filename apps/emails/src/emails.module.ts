import { Module } from '@nestjs/common';
import { EmailsController } from './emails.controller';
import { EmailsService } from './emails.service';
import { RmqModule } from '@app/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        RABBIT_MQ_URI: Joi.string().required(),
      }),
      envFilePath: './apps/emails/.env',
    }),
    RmqModule,
  ],
  controllers: [EmailsController],
  providers: [EmailsService],
})
export class EmailsModule {}
