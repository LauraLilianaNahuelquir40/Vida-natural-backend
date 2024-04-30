import { Module } from '@nestjs/common';
import { PersonaController } from './persona.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Persona } from 'src/entities/persona.entity';
import { PersonaService } from './persona.service';
@Module({
  imports:[
             TypeOrmModule.forFeature([
          Persona
    ])
  ],
  controllers: [PersonaController],
  providers: [PersonaService],
})
export class PersonaModule {}












