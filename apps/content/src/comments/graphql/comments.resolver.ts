import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CommentsService } from '../comments.service';
import {
  CommentsUpdateInput,
  CreateOneCommentsArgs,
  CurrentUser,
  FindManyCommentsArgs,
  TokenPayload,
} from '@app/common';
import { PrismaSelect } from '@paljs/plugins';
import { GraphQLResolveInfo } from 'graphql/type';
import { CommentsModel } from './entities';

@Resolver(() => CommentsModel)
export class CommentsResolver {
  constructor(private readonly commentsService: CommentsService) {}

  @Query(() => [CommentsModel], { name: 'comments' })
  findAll(@Args() query: FindManyCommentsArgs) {
    return this.commentsService.findManyBy(query.where);
  }

  @Query(() => CommentsModel, { name: 'comment' })
  findOne(@Args('id') id: string, @Info() info: GraphQLResolveInfo) {
    const prismaSelect = new PrismaSelect(info).value;

    return this.commentsService.findOneById(id, prismaSelect);
  }

  @Mutation(() => CommentsModel)
  createComment(
    @Args() createCommentInput: CreateOneCommentsArgs,
    @CurrentUser() user: TokenPayload,
  ) {
    return this.commentsService.create({
      ...createCommentInput.data,
      usersId: user._id,
    } as any);
  }

  @Mutation(() => CommentsModel)
  updateComment(
    @Args('updateCommentInput') updateCommentInput: CommentsUpdateInput,
  ) {
    return this.commentsService.updateOneBy(
      {
        id: updateCommentInput.id,
      },
      updateCommentInput as any,
    );
  }

  @Mutation(() => CommentsModel)
  removeComment(@Args('id') id: string) {
    return this.commentsService.deleteById(id);
  }
}
