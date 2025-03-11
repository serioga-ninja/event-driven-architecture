import { Injectable } from '@nestjs/common';
import PostsRepository from './posts.repository';
import { CreatePostDto } from './dto';
import type { TokenPayload } from '@app/common';

@Injectable()
export class PostsService {
  constructor(private readonly _postsRepository: PostsRepository) {}

  createPost(data: CreatePostDto, author: TokenPayload) {
    return this._postsRepository.create({
      authorId: author._id,
      text: data.text,
    });
  }
}
