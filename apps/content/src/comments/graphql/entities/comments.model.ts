import { Comments } from '@app/common';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export default class CommentsModel extends Comments {}
