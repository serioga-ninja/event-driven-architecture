import { Module } from '@nestjs/common';
import SecurityController from './security.controller';

@Module({
  controllers: [SecurityController],
  exports: [],
})
export class SecurityModule {}
