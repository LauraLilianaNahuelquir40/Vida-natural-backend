import { IsString, IsEmail, IsOptional } from 'class-validator';

export class CreatePersonaDTO {
  @IsString()
  nombreApellido: string;

  @IsEmail()
  email: string;

  @IsOptional()
    id?: number;

  @IsOptional()
  donacion: number;
}

