import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @MinLength(3)
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsOptional()
  data?: string;
}
