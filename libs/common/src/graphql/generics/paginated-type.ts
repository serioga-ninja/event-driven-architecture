import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Type } from '@nestjs/common';
import type { GetListPagedResult } from '@app/common';

export default function Paginated<T>(
  classRef: Type<T>,
): Type<GetListPagedResult<T>> {
  @ObjectType({ isAbstract: true })
  abstract class PaginatedType implements GetListPagedResult<T> {
    @Field(() => [classRef], { nullable: true })
    items: T[];

    @Field(() => Int)
    totalCount: number;
  }

  return PaginatedType as Type<GetListPagedResult<T>>;
}
