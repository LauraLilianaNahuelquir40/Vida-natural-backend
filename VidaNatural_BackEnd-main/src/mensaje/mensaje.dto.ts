import { IsInt, IsOptional } from 'class-validator';

export class MensajeDto {
  @IsInt()
  idPersona: number;

  @IsOptional()
  @IsInt()
  id?: number;
}
