import { IsEmail, IsString, Validate } from 'class-validator';
import { IsEmailUnique } from '../pipes';

export default class CreateUserDto {
  @IsEmail()
  @Validate(IsEmailUnique)
  email: string;

  @IsString()
  password: string;
}
