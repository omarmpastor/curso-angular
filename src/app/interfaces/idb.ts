import { IAutor } from "./iautor";
import { IDisco } from "./idisco";
import { IGenero } from "./igenero";
import { IPista } from "./ipista";

export interface IDb {
    generos: IGenero[];
    autores: IAutor[];
    discos: IDisco[];
    pistas: IPista[];
    clientes: any;
    pedidos: any;
    pedidoslin: any;
}