import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CommentsScalarWhereInput {

    @Field(() => [CommentsScalarWhereInput], {nullable:true})
    AND?: Array<CommentsScalarWhereInput>;

    @Field(() => [CommentsScalarWhereInput], {nullable:true})
    OR?: Array<CommentsScalarWhereInput>;

    @Field(() => [CommentsScalarWhereInput], {nullable:true})
    NOT?: Array<CommentsScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    entityStatus?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    usersId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    postsId?: StringFilter;
}
