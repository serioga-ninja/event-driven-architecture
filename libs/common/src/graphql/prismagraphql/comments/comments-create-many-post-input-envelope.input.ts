import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentsCreateManyPostInput } from './comments-create-many-post.input';
import { Type } from 'class-transformer';

@InputType()
export class CommentsCreateManyPostInputEnvelope {
  @Field(() => [CommentsCreateManyPostInput], { nullable: false })
  @Type(() => CommentsCreateManyPostInput)
  data!: Array<CommentsCreateManyPostInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
