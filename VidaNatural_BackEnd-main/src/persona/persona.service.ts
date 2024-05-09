import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { Persona } from 'src/entities/persona.entity';
import { PersonaDTO } from './persona.dto';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class PersonaService {
  constructor(@InjectRepository(Persona) private personaRepository: Repository<Persona>) { }

  async create(datos: PersonaDTO): Promise<Persona> {
    const existePersona = await this.personaRepository.findOne({ where: { Email: datos.Email } });
    if (existePersona) {
      throw new HttpException(`La persona ${datos.NombreApellido} ya existe en la base de datos`, HttpStatus.CONFLICT);
    }
    try {
      let persona: Persona;
      if (datos.NombreApellido && datos.Email) {
        persona = new Persona(datos.NombreApellido, datos.Email)
        persona = await this.personaRepository.save(persona);
        return persona;
      } else {
        throw new NotFoundException(`Algunos de los campos no está completo o falta algún caracter. Compruebe los datos ingresados e intente nuevamente`);
      }

    } catch (error) {
      throw new HttpException(`No se puedo crear la persona ${datos.NombreApellido}, intente nuevamente en unos segundos`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll(): Promise<Persona[]> {
    try {
      let criterio: FindManyOptions = { relations: [ 'mensaje','donacion' ] };
      const persona: Persona[]= await this.personaRepository.find(criterio);
      if (persona) return persona;
      throw new Error(`El fichero Persona aún está vacío. Por favor, primero ingrese una nueva carga de datos`);
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: `Se produjo un error al intentar obtener las personas. Compruebe los datos ingresados e intente nuevamente`
      }, HttpStatus.NOT_FOUND);
    }
  }


  async findOnePersona(id: number): Promise<Persona> {
    try {
      const criterio: FindOneOptions = { relations: ['mensaje','donacion'], where: { idpersona: id } };
      const persona = await this.personaRepository.findOne(criterio);
      return persona;
    } catch (error) {
      throw new Error(`Error al buscar la persona con id ${id}.`);
    }
  }

  async update(id: number, datos: PersonaDTO): Promise<Persona> {
    try {
      let persona: Persona = await this.findOnePersona(id);
      if (persona) {
        persona.NombreApellido = datos.NombreApellido;
        persona.Email = datos.Email;
      /*   persona.Donacion = datos.Donacion;
        persona.Mensaje = datos.Mensaje; */
        persona = await this.personaRepository.save(persona);
        return persona;
      }
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: `Error al intentar actualizar la persona de id: ${id} con el nombre ${datos.NombreApellido} en la base de datos; ${error}`
      },
        HttpStatus.NOT_FOUND);

    }
  }

  async remove(id: number, datos: PersonaDTO): Promise<string> {
    try {
      const removePersona: Persona = await this.findOnePersona(id);
      if (!removePersona) {
        return `La persona que desea eliminar no existe en la base de datos`
      } else {
        await this.personaRepository.remove(removePersona);
        return `La persona ${removePersona.NombreApellido} ha sido eliminado correctamente de la base de edatos`
      }
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: `Error al intentar eliminar la persona  ${datos.NombreApellido} en la base de datos; ${error}`
      },
        HttpStatus.NOT_FOUND);
    }
  }
}


  
  








