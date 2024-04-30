import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PersonaController } from './persona/persona.controller';
import { DonacionesModule } from './donaciones/donaciones.module';
import { DonacionesController } from './donaciones/donaciones.controller';
import { DonacionesService } from './donaciones/donaciones.service';
import { MensajeController } from './mensaje/mensaje.controller';
import { MensajeModule } from './mensaje/mensaje.module';
import { MensajeService } from './mensaje/mensaje.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonaModule } from './persona/persona.module';

@Module ({
  imports: [
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "root",
      "password": "root",
      "database": "vida_natural",
      "entities": [__dirname + "/entity/*{.js,.ts}"],
      "synchronize": false
        }),
    PersonaModule,    DonacionesModule,
    MensajeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


























