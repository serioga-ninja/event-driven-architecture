import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class CommentsScalarWhereWithAggregatesInput {

    @Field(() => [CommentsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CommentsScalarWhereWithAggregatesInput>;

    @Field(() => [CommentsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CommentsScalarWhereWithAggregatesInput>;

    @Field(() => [CommentsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CommentsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    content?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    entityStatus?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    usersId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    postsId?: StringWithAggregatesFilter;
}
