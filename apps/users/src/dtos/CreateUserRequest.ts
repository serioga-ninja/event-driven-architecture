import { IsEmail, IsString } from 'class-validator';

export default class CreateUserRequest {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
