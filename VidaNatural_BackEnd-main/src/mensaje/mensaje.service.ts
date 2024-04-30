import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Mensaje } from 'src/entities/mensajes.entity';

@Injectable()
export class MensajeService {
  constructor(
    @InjectRepository(Mensaje)
    private readonly mensajesRepository: Repository<Mensaje>
  ) {}

  public async getAll(): Promise<Mensaje[]> {
    return await this.mensajesRepository.find();
  }

  public async getById(id: number): Promise<Mensaje> {
    try {
  const criterio : FindOneOptions = { where: { idCiudad: id } }
  let mensaje : Mensaje = await this.mensajesRepository.findOne( criterio );
      if (!mensaje) {
        throw new Error('El mensaje no se encuentra');
      }
      return mensaje;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Error en la búsqueda del mensaje ' + id + ' : ' + error.message,
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }
}