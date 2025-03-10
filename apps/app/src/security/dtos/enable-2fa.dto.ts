import { IsString } from 'class-validator';

export default class Enable2faDto {
  @IsString()
  token: string;
}
