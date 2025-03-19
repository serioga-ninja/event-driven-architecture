import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { FastifyRequest } from 'fastify';
import { PostsService } from '../posts.service';

@Injectable()
export default class CanEditPostGuard implements CanActivate {
  constructor(private readonly _postsRepository: PostsService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<FastifyRequest>();
    const postId = (request.body as { id: string }).id;
    const userId = request.user?.id;

    if (!userId) {
      throw new ForbiddenException('You are not allowed to edit this post');
    }

    const post = await this._postsRepository.findOneBy(
      {
        id: postId,
        authorId: userId,
      },
      { select: { id: true } },
    );

    if (!post) {
      throw new ForbiddenException('You are not allowed to edit this post');
    }

    return true;
  }
}
