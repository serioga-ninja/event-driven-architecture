import { Body, Controller, Get, Post, Put, UseGuards } from '@nestjs/common';
import { PostsService } from './posts.service';
import CreatePostDto from './dto/create-post.dto';
import { JwtAuthGuard, TokenPayload } from '@app/common';
import UpdatePostDto from './dto/update-post.dto';
import { CanEditPostGuard } from './guards';
import { CurrentUser } from '../../../auth/src/decorators';

@Controller()
@UseGuards(JwtAuthGuard)
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
  handleGetPosts() {
    return this._postsService.getPosts();
  }
}
