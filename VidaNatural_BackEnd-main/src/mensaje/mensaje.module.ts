import { Module } from '@nestjs/common';
import { MensajeController } from './mensaje.controller';
import { MensajeService } from './mensaje.service';
import { Mensaje } from 'src/entities/mensajes.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
           TypeOrmModule.forFeature([ 
        Mensaje
    ])
  ],
  controllers: [MensajeController],
  providers: [MensajeService]
})
export class MensajeModule {}
