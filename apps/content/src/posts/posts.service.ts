import { Injectable } from '@nestjs/common';
import MongoPostsRepository from './repositories/mongo-posts.repository';
import { CreatePostDto } from './dto';
import { EntityStatus, VisibilityLevels, TokenPayload } from '@app/common';
import UpdatePostDto from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(private readonly _postsRepository: MongoPostsRepository) {}

  createPost(data: CreatePostDto, author: TokenPayload) {
    return this._postsRepository.create({
      authorId: author._id,
      text: data.text,
      entityStatus: EntityStatus.DRAFT,
      visibility: VisibilityLevels.PRIVATE,
    });
  }

  async updatePost(body: UpdatePostDto, author: TokenPayload) {
    await this._postsRepository.updateOneBy(
      { _id: body.id, authorId: author._id },
      {
        entityStatus: body.entityStatus,
        visibility: body.visibility as VisibilityLevels,
        text: body.text,
      },
    );

    return this._postsRepository.findOneById(body.id);
  }

  async getPosts() {
    return this._postsRepository.findManyBy({
      entityStatus: EntityStatus.ACTIVE,
      visibility: VisibilityLevels.PUBLIC,
    });
  }
}
