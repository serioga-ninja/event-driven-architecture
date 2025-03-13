import { Paginated } from '@app/common';
import PostsModel from './posts.model';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export default class PostsPaginatedResultModel extends Paginated(PostsModel) {}
