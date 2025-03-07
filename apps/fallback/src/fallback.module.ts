import {
  DatabaseModule,
  EMAILS_QUEUE,
  EMAILS_SERVICE,
  RmqModule,
} from '@app/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { FallbackController } from './fallback.controller';
import FallbackRepository from './fallback.repository';
import { FallbackService } from './fallback.service';
import { FallbackEvents, FallbackSchema } from './mongo-schemas';
import { fallbackConfigSchema } from './schemas';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: fallbackConfigSchema,
      envFilePath: './apps/fallback/.env',
    }),
    RmqModule.register({
      name: EMAILS_SERVICE,
      queue: EMAILS_QUEUE,
    }),
    DatabaseModule,
    MongooseModule.forFeature([
      { name: FallbackEvents.name, schema: FallbackSchema },
    ]),
    ScheduleModule.forRoot(),
  ],
  controllers: [FallbackController],
  providers: [FallbackService, FallbackRepository],
})
export class FallbackModule {}
