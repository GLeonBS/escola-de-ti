import { IsNotEmpty, IsOptional, IsNumber, IsEmail } from 'class-validator';

export class CreateUserDto {

  @IsNotEmpty()
  name: string

  @IsNumber()
  @IsNotEmpty()
  age: number

  @IsNotEmpty()
  password: string

  @IsNotEmpty()
  @IsEmail()
  email: string
}
