import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsResolver } from './graphql/comments.resolver';

@Module({
  providers: [CommentsResolver, CommentsService],
})
export class CommentsModule {}
