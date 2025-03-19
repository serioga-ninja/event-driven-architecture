import { ObjectType } from '@nestjs/graphql';
import { Posts } from '@app/common';

@ObjectType()
export default class PostsModel extends Posts {}
