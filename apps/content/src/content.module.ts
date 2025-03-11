import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {
  CacheModule,
  CommonModule,
  DatabaseModule,
  GrpcModule,
} from '@app/common';
import { contentConfigSchema } from './schemas';
import { PostsModule } from './posts/posts.module';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: contentConfigSchema,
      envFilePath: './apps/content/.env',
    }),
    DatabaseModule,
    CommonModule,
    CacheModule,
    GrpcModule,
    PostsModule,

    RouterModule.register([
      {
        path: 'posts',
        module: PostsModule,
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class ContentModule {}
