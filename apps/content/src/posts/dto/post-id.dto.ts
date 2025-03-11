import { IsString } from 'class-validator';

export default class PostIdDTO {
  @IsString()
  postId: string;
}
