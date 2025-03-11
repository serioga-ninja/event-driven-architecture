import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import PostsRepository from '../posts.repository';
import { AuthRequest } from '../../../../auth/src/types';
import { EntityStatus } from '@app/common';

@Injectable()
export default class CanEditPostGuard implements CanActivate {
  constructor(private readonly _postsRepository: PostsRepository) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<AuthRequest>();
    const postId = (request.body as { id: string }).id;
    const userId = request.user._id;

    const post = await this._postsRepository.findOneBy({
      _id: postId,
      authorId: userId,
    });

    if (!post) {
      throw new ForbiddenException('You are not allowed to edit this post');
    }

    if (post.entityStatus === EntityStatus.ARCHIVED) {
      throw new ForbiddenException(
        'You are not allowed to edit archived this post',
      );
    }

    return true;
  }
}
