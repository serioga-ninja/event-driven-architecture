import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { PostsService } from './posts.service';
import CreatePostDto from './dto/create-post.dto';
import { JwtAuthGuard } from '@app/common';
import { AuthRequest } from '../../../auth/src/types';

@Controller()
@UseGuards(JwtAuthGuard)
export class PostsController {
  constructor(private readonly _contentService: PostsService) {}

  @Post()
  handleCreatePost(@Req() req: AuthRequest, @Body() body: CreatePostDto) {
    return this._contentService.createPost(body, req.user);
  }
}
