import { IsString } from 'class-validator';

export default class CreatePostDto {
  @IsString()
  text: string;
}
