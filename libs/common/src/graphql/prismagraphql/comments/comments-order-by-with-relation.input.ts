import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UsersOrderByWithRelationInput } from '../users/users-order-by-with-relation.input';
import { PostsOrderByWithRelationInput } from '../posts/posts-order-by-with-relation.input';

@InputType()
export class CommentsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    content?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    entityStatus?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    usersId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    postsId?: `${SortOrder}`;

    @Field(() => UsersOrderByWithRelationInput, {nullable:true})
    user?: UsersOrderByWithRelationInput;

    @Field(() => PostsOrderByWithRelationInput, {nullable:true})
    post?: PostsOrderByWithRelationInput;
}
