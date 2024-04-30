import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('Mensaje')
export class Mensaje {
    @PrimaryColumn()
    private idMensaje: number;
   
    
    

    constructor(idMensaje: number) {
        this.idMensaje = idMensaje;
        
        
        
    }

    public getIdMensaje(): number { return this.idMensaje; }
    public setIdMensaje(idpersona: number): void { this.idMensaje = this.idMensaje; }

   
    
}