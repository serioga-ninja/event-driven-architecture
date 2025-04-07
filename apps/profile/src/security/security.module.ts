import { Module } from '@nestjs/common';
import SecurityController from './security.controller';
import SecurityService from './security.service';
import { UsersModule } from '../users/users.module';
import { AuthModule, DatabaseModule } from '@app/common';

@Module({
  imports: [UsersModule, AuthModule, DatabaseModule],
  controllers: [SecurityController],
  exports: [],
  providers: [SecurityService],
})
export class SecurityModule {}
