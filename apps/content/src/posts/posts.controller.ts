import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import CreatePostDto from './dto/create-post.dto';
import { JwtAuthGuard, TokenPayload } from '@app/common';
import UpdatePostDto from './dto/update-post.dto';
import { CanEditPostGuard } from './guards';
import { CurrentUser } from '../../../auth/src/decorators';
import { CacheInterceptor, CacheKey, CacheTTL } from '@nestjs/cache-manager';
import { PostsCacheKeys } from '../constant';

@Controller()
@UseGuards(JwtAuthGuard)
@UseInterceptors(CacheInterceptor)
export class PostsController {
  constructor(private readonly _postsService: PostsService) {}

  @Post()
  handleCreatePost(
    @Body() body: CreatePostDto,
    @CurrentUser() user: TokenPayload,
  ) {
    return this._postsService.createPost(body, user);
  }

  @Put()
  @UseGuards(CanEditPostGuard)
  handlePublishPost(
    @Body() body: UpdatePostDto,
    @CurrentUser() user: TokenPayload,
  ) {
    return this._postsService.updatePost(body, user);
  }

  @Get()
  @CacheKey(PostsCacheKeys.LatestPosts)
  @CacheTTL(600000)
  handleGetPosts() {
    return this._postsService.getPosts();
  }
}
