import { IsEmail, IsString } from 'class-validator';

export default class RegisterUserDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
