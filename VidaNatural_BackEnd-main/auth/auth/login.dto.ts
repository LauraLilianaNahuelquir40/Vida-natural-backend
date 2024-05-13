import { IsEmail,IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
export class LoginDto {
  @IsString()
  NombreApellido: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(15)
  @IsString()
  password: string;
}
