import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  PostsModel,
  PostsPaginatedQueryInput,
  PostsPaginatedResultModel,
} from './models';
import { GraphQLResolveInfo } from 'graphql/type';
import {
  CreateOnePostsArgs,
  type CreateOptions,
  CurrentUser,
  JwtAuthGuard,
  TokenPayload,
  UpdateOnePostsArgs,
  UpdateOptions,
} from '@app/common';
import { UseGuards } from '@nestjs/common';
import { PrismaSelect } from '@paljs/plugins';
import { PostsService } from '../posts.service';
import { Posts } from '@app/prisma';

@Resolver(() => PostsModel)
export default class PostsResolver {
  constructor(private readonly _postsRepository: PostsService) {}

  @Query(() => PostsModel)
  handleGetPost(@Args('id') id: string, @Info() info: GraphQLResolveInfo) {
    const prismaSelect = new PrismaSelect(info).value;

    return this._postsRepository.findOneById(id, prismaSelect);
  }

  @Query(() => PostsPaginatedResultModel)
  handleGetPostsPaginated(@Args('query') query: PostsPaginatedQueryInput) {
    return this._postsRepository.findManyPaged(query);
  }

  @Mutation(() => PostsModel)
  @UseGuards(JwtAuthGuard)
  handleCreatePost(
    @Args() { data }: CreateOnePostsArgs,
    @CurrentUser() user: TokenPayload,
  ) {
    return this._postsRepository.create({
      ...data,
      usersId: user.id,
    } as CreateOptions<Posts>);
  }

  @Mutation(() => PostsModel)
  @UseGuards(JwtAuthGuard)
  handleUpdatePost(
    @Args() { data }: UpdateOnePostsArgs,
    @CurrentUser() user: TokenPayload,
  ) {
    return this._postsRepository.updateOneBy(
      {
        id: data.id,
        userId: user.id,
      },
      data as UpdateOptions<Posts>,
    );
  }
}
