import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsResolver } from './graphql';
import { DatabaseModule } from '@app/common';

@Module({
  imports: [DatabaseModule],
  providers: [CommentsResolver, CommentsService],
})
export class CommentsModule {}
