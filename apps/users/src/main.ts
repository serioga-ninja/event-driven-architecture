import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users.module';

async function bootstrap() {
  const app = await NestFactory.create(UsersModule);

  const config = app.get(ConfigService);
  console.log('USERS_PORT', config.get('USERS_PORT'));

  await app.listen(config.get('USERS_PORT') as number);
}
bootstrap();
