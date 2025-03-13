export type FindOneOptions<Entity> = {
  select?: (keyof Entity)[];
};
export type FindManyOptions<Entity> = FindOneOptions<Entity> & {
  limit?: number;
};
export type FindOptions<Entity> = {
  [Key in keyof Entity]?: Entity[Key];
} & Record<string, any>;
export type UpdateOptions<Entity> = Partial<Entity>;
export type CreateOptions<Entity> = Partial<Entity>;
export type GetListPagedQuery<Entity> = {
  limit: number;
  page: number;
  orderBy?: OrderBy;
  filter?: FindOptions<Entity>;
  select?: string[];
};
export type GetListPagedResult<Entity> = {
  items: Entity[];
  totalCount: number;
};
export type SortOrder = 1 | -1;
export type OrderBy = {
  asc: SortOrder;
  type: string;
};
