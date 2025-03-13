import { Field, InputType, Int } from '@nestjs/graphql';
import ListPagedQueryDto from '../../database/dto/list-paged-query.dto';
import { Type } from '@nestjs/common';

export default function PaginationArgs<T extends object>(
  classRef: Type<T>,
): Type<ListPagedQueryDto<T>> {
  @InputType(`Pagination${classRef.name}Order`)
  abstract class OrderByArgs {
    @Field(() => Int, { defaultValue: 1 })
    asc: 1 | -1 = 1;

    @Field(() => String)
    type: string = '';
  }

  @InputType()
  abstract class PaginationArgsType implements ListPagedQueryDto {
    @Field(() => Int, { defaultValue: 10 })
    limit: number = 10;

    @Field(() => Int, { defaultValue: 1 })
    page: number = 1;

    @Field(() => OrderByArgs, { nullable: true })
    orderBy?: OrderByArgs;

    @Field(() => classRef, { nullable: true })
    filter?: Type<T>;

    @Field(() => [String], { nullable: true })
    select?: string[];
  }

  return PaginationArgsType as Type<ListPagedQueryDto<T>>;
}
