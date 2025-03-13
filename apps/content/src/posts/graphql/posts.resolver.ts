import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  PostsModel,
  PostsPaginatedResultModel,
  PostsPaginatedQueryInput,
  PostsCreateInput,
  PostsUpdateInput,
} from './models';
import PostsRepository from '../posts.repository';
import { GraphQLResolveInfo } from 'graphql/type';
import {
  JwtAuthGuard,
  TokenPayload,
  updateFindOptions,
  CurrentUser,
} from '@app/common';
import { UseGuards } from '@nestjs/common';

@Resolver(() => PostsModel)
export default class PostsResolver {
  constructor(private readonly _postsRepository: PostsRepository) {}

  @Query(() => PostsModel)
  handleGetPost(@Args('id') id: string, @Info() info: GraphQLResolveInfo) {
    const options = updateFindOptions(info);

    return this._postsRepository.findOneById(id, options);
  }

  @Query(() => PostsPaginatedResultModel)
  handleGetPostsPaginated(@Args('query') query: PostsPaginatedQueryInput) {
    return this._postsRepository.findManyPaged(query);
  }

  @Mutation(() => PostsModel)
  @UseGuards(JwtAuthGuard)
  handleCreatePost(
    @Args('createPost') body: PostsCreateInput,
    @CurrentUser() user: TokenPayload,
  ) {
    return this._postsRepository.create({
      ...body,
      authorId: user._id,
    });
  }

  @Mutation(() => PostsModel)
  @UseGuards(JwtAuthGuard)
  handleUpdatePost(
    @Args('updatePost') body: PostsUpdateInput,
    @CurrentUser() user: TokenPayload,
  ) {
    return this._postsRepository.updateOneBy(
      {
        authorId: user._id,
        _id: body.id,
      },
      body,
    );
  }
}
