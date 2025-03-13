import { registerEnumType } from '@nestjs/graphql';
import { EntityStatus, VisibilityLevels } from '@app/common';

registerEnumType(EntityStatus, {
  name: 'EntityStatus',
  description: 'The status of the entity',
});

registerEnumType(VisibilityLevels, {
  name: 'VisibilityLevels',
});
