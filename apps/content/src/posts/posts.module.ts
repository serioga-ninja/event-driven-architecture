import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Posts, PostsSchema } from './mongo-schemas';
import MongoPostsRepository from './repositories/mongo-posts.repository';
import { AuthModule, GraphQLModule } from '@app/common';
import { PostsResolver } from './graphql';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Posts.name, schema: PostsSchema }]),
    AuthModule,
    GraphQLModule.register('posts'),
  ],
  controllers: [PostsController],
  providers: [PostsService, MongoPostsRepository, PostsResolver],
})
export class PostsModule {}
