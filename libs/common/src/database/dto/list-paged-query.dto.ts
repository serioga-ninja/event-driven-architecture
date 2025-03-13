import { FindOptions, GetListPagedQuery, OrderBy } from '../types';
import { IsOptional, Min } from 'class-validator';

export default class ListPagedQueryDto<Entity = any>
  implements GetListPagedQuery<Entity>
{
  @Min(1)
  limit: number = 10;

  @Min(1)
  page: number = 1;

  @IsOptional()
  orderBy?: OrderBy;

  @IsOptional()
  filter?: FindOptions<Entity>;

  @IsOptional()
  select?: string[];
}
