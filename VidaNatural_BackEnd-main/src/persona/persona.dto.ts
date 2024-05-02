import { IsString, IsEmail } from 'class-validator';

export class PersonaDTO {
  //readonly nombre:string }Necesitamos que el frontEnd envíe la info al Back
  //este contrato se representa con una DTO.
  @IsString()
  NombreApellido: string;

  @IsEmail()
  Email: string;
   
 
}