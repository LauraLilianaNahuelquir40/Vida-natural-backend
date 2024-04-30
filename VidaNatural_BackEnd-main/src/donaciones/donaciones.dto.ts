import { IsInt, IsDate, IsOptional } from 'class-validator';

export class DonacionesDto {
  @IsInt()
  idPersona: number;

  @IsInt()
  montoDonado: number;

  @IsDate()
  fechaDonacion: Date;

  @IsOptional()
  @IsInt()
  id?: number;
}
