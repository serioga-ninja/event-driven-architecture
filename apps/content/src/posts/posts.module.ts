import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { AuthModule, DatabaseModule, GraphQLModule } from '@app/common';
import { PostsResolver } from './graphql';

@Module({
  imports: [DatabaseModule, AuthModule, GraphQLModule.register('posts')],
  controllers: [PostsController],
  providers: [PostsService, PostsResolver],
})
export class PostsModule {}
