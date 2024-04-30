import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('Donaciones')
export class Donaciones {
    @PrimaryColumn()
    private idDonaciones: number;
    @Column()
    private MontosDonados: number;
    @Column({type:'datetime', default:() => 'CURRENT_TIMESTAMP'})
    createdAt:Date
    private FechaDonacion: number;
    
    

    constructor(id: number, MontosDonados: number, FechaDonacion: number) {
        this.idDonaciones = id;
        this.MontosDonados = MontosDonados;
        this.FechaDonacion = FechaDonacion;
        
        
    }

    public getIdDonaciones(): number { return this.idDonaciones; }
    public setIdDonaciones(idpersona: number): void { this.idDonaciones = this.idDonaciones; }

    public getMontosDonados(): number { return this.MontosDonados; }
    public setMontosDonados(MontosDonados:number):void { this.MontosDonados = MontosDonados}

    public getFechaDonacion(): number { return this.FechaDonacion; }
    public setFechaDonacion(Donacion: number): void { this.FechaDonacion = Donacion; }
   
    
}