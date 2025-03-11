import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { ConfigService } from '@nestjs/config';
import type { ContentConfig } from './schemas';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { AllExceptionsFilter } from '@app/common';
import { useContainer } from 'class-validator';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ContentModule } from './content.module';

async function bootstrap() {
  const app = await NestFactory.create(
    ContentModule,
    new FastifyAdapter({ logger: true }),
  );

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new AllExceptionsFilter());
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });
  useContainer(app.select(ContentModule), { fallbackOnErrors: true });

  const config = new DocumentBuilder()
    .setTitle('Posts')
    .setDescription('The posts API description')
    .setVersion('1.0')
    .addTag('posts')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.startAllMicroservices();

  const configService = app.get(ConfigService<ContentConfig, true>);

  await app.listen(configService.get('PORT'));
}

bootstrap();
