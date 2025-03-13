import type { GraphQLResolveInfo } from 'graphql/type';
import { Kind } from 'graphql/language/kinds';
import type { FieldNode } from 'graphql/language/ast';
import type { FindOneOptions } from '@app/common';

export const extractSelect = (info: GraphQLResolveInfo): string[] => {
  const selections = info.fieldNodes[0].selectionSet?.selections;
  if (!selections) {
    return [];
  }
  return selections
    .filter((selection) => selection.kind === Kind.FIELD)
    .map((selection: FieldNode) => selection.name.value);
};

export const updateFindOptions = (
  info: GraphQLResolveInfo,
  options: FindOneOptions<any> = {},
): FindOneOptions<any> => {
  const select = extractSelect(info);

  if (select.length) {
    options.select = select;
  }

  return options;
};
