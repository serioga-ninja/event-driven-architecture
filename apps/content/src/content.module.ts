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
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: contentConfigSchema,
      envFilePath: ['.env', './apps/content/.env'],
    }),
    DatabaseModule,
    CommonModule,
    CacheModule,
    GrpcModule,
    PostsModule,
    CommentsModule,

    RouterModule.register([
      {
        path: 'posts',
        module: PostsModule,
      },
      {
        path: 'comments',
        module: CommentsModule,
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class ContentModule {}
