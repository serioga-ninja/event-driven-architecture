import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Posts, PostsSchema } from './mongo-schemas';
import PostsRepository from './posts.repository';
import { AuthModule, GraphQLModule } from '@app/common';
import { PostsResolver } from './graphql';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Posts.name, schema: PostsSchema }]),
    AuthModule,
    GraphQLModule.register('posts'),
  ],
  controllers: [PostsController],
  providers: [PostsService, PostsRepository, PostsResolver],
})
export class PostsModule {}
