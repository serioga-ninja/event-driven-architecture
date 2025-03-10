import { Module } from '@nestjs/common';
import SecurityController from './security.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UsersSchema } from '../users/mongo-schemas';
import { AuthModule } from '@app/common';
import SecurityService from './security.service';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: Users.name, schema: UsersSchema }]),
  ],
  controllers: [SecurityController],
  exports: [],
  providers: [SecurityService],
})
export class SecurityModule {}
