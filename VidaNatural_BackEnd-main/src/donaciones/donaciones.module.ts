import { Module } from '@nestjs/common';
import { DonacionesController } from './donaciones.controller';
import { DonacionesService } from './donaciones.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Donaciones } from 'src/entities/donaciones.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([ 
        Donaciones
    ])
  ],
  controllers: [DonacionesController],
  providers: [DonacionesService]
})
export class DonacionesModule {}
