import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Persona } from 'src/entities/persona.entity';
import { CreatePersonaDTO } from "./dto/CreatePersonaDTO";
import { UpdatePersonaDTO } from "./dto/UpdatePersonaDTO";

@Injectable()
export class PersonaService {
  constructor(@InjectRepository(Persona) private readonly personaRepository: Repository<Persona>) {}

  async create(createPersonaDTO: CreatePersonaDTO): Promise<Persona> {
    const newPersona = this.personaRepository.create(createPersonaDTO);
    return this.personaRepository.save(newPersona);
  }
  
  async findAll(): Promise<Persona[]> {
    return this.personaRepository.find();
  }
  
  async findOne(id: number): Promise<Persona | undefined> {
    return this.personaRepository.findOne(id);
  }
  
  async update(id: number, updatePersonaDTO: UpdatePersonaDTO): Promise<Persona> {
    const persona = await this.personaRepository.findOne(id);
    if (!persona) {
      throw new NotFoundException(`No se encontró la persona con el id ${id}`);
    }
    
    // Aquí puedes actualizar las propiedades de la persona con updatePersonaDTO
    // Por ejemplo:
    // persona.nombreApellido = updatePersonaDTO.nombreApellido;
    // persona.email = updatePersonaDTO.email;
    // ...

    return this.personaRepository.save(persona);
  }
  
  async remove(id: number): Promise<void> {
    const persona = await this.personaRepository.findOne(id);
    
    if (!persona) {
      throw new NotFoundException(`No se encontró la persona con el id ${id}`);
    }
    
    await this.personaRepository.remove(persona);
  }
}

  
  








