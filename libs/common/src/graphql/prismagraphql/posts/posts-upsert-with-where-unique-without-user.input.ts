import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@app/prisma';
import { PostsWhereUniqueInput } from './posts-where-unique.input';
import { Type } from 'class-transformer';
import { PostsUpdateWithoutUserInput } from './posts-update-without-user.input';
import { PostsCreateWithoutUserInput } from './posts-create-without-user.input';

@InputType()
export class PostsUpsertWithWhereUniqueWithoutUserInput {
  @Field(() => PostsWhereUniqueInput, { nullable: false })
  @Type(() => PostsWhereUniqueInput)
  where!: Prisma.AtLeast<PostsWhereUniqueInput, 'id'>;

  @Field(() => PostsUpdateWithoutUserInput, { nullable: false })
  @Type(() => PostsUpdateWithoutUserInput)
  update!: PostsUpdateWithoutUserInput;

  @Field(() => PostsCreateWithoutUserInput, { nullable: false })
  @Type(() => PostsCreateWithoutUserInput)
  create!: PostsCreateWithoutUserInput;
}
