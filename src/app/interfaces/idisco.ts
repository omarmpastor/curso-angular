import { IAutor } from "./iautor";
import { IGenero } from "./igenero";

export interface IDisco {
    id: string;
    nombre: string;
    precio: string;
    stock: string;
    fechaAlta: string;
    activo: string;
    foto: string | null;
    autor: IAutor;
    genero: IGenero | IGenero[];
}
