import { IsEnum, IsString } from 'class-validator';
import { EntityStatus } from '@app/common';

export default class UpdatePostDto {
  @IsString()
  id: string;

  @IsString()
  text: string;

  @IsString()
  visibility: string;

  @IsEnum([EntityStatus.DRAFT, EntityStatus.ACTIVE, EntityStatus.ARCHIVED])
  entityStatus: EntityStatus;
}
