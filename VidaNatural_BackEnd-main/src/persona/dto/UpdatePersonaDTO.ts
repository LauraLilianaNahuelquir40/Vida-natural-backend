import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonaDTO } from './CreatePersonaDTO';

export class UpdatePersonaDTO extends PartialType(CreatePersonaDTO) {}
