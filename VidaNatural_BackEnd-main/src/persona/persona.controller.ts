import { Controller,Get,Param,Post,Body,Delete,HttpCode, Patch,Query} from '@nestjs/common';
import { Persona } from 'src/entities/persona.entity';
import { PersonaService } from './persona.service';
import { CreatePersonaDTO } from './dto/CreatePersonaDTO';
import { UpdatePersonaDTO } from './dto/UpdatePersonaDTO';


@Controller('personas')
export class PersonaController {
  constructor(private readonly personaService: PersonaService) { }
  @Post()
  @HttpCode(201)
  create(@Body() createPersonaDTO: CreatePersonaDTO): Promise<any> {
    return this.personaService.create(createPersonaDTO);
  }

   @Get()
  @HttpCode(200)
   findAll(@Query() query: any): Promise<Persona[]> {
      return this.personaService.findAll();
    }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personaService.findOne(+id);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonaDTO: UpdatePersonaDTO) {
    return this.personaService.update(+id, updatePersonaDTO);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personaService.remove(+id);
  }
}
 














