import { Controller, Get, Param, Post, Body, Delete, Put, HttpCode,  HttpStatus,  ParseIntPipe, HttpException,} from '@nestjs/common';
import { PersonaDTO } from './persona.dto';
import { Persona } from 'src/entities/persona.entity';
import { PersonaService } from './persona.service';
@Controller('personas')
export class PersonaController {
  constructor(private readonly personaService: PersonaService) { }
  @Get()
  @HttpCode(200)
  async getPersonas(): Promise<Persona[]> {
    return await this.personaService.findAll();
  }


  @Get(':id')
  async getPersonaById(@Param('id', new ParseIntPipe()) id: number): Promise<Persona> {
    try {
      const persona = await this.personaService.findOnePersona(id);
      if (persona) return persona;
        throw new HttpException(
          { status: HttpStatus.NOT_FOUND, error: `No se encontró la persona con id ${id}.` },
          HttpStatus.NOT_FOUND,
        )
      
      
    } catch (error) {
      throw new HttpException(
        { status: HttpStatus.INTERNAL_SERVER_ERROR, error: `Error al buscar la persona con id ${id}.` },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }


  @Post()
  @HttpCode(201)
  async addPersona(@Body() PersonaDto: PersonaDTO): Promise<Persona> {
    return await this.personaService.create(PersonaDto);
  }

  @Delete(':id')
  @HttpCode(200)
  async deletePersonaByID( @Param( 'id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )  id: number, datos:PersonaDTO ):Promise<string> {
   return await this.personaService.remove(id,datos);
   
  }
  @Put(':id')
  async updatePersonById(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number,
    @Body() personaDto: PersonaDTO,
  ): Promise<Persona> {
    try {
      return await this.personaService.update(id, personaDto);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: `Error al intentar actualizar la persona de id: ${id}. ${error.message}`,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}


 














