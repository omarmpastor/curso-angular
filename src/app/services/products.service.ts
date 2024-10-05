import { Injectable } from '@angular/core';
import products from '../files-test/products.json'
import { map, of, Observable, OperatorFunction, delay } from 'rxjs';
import { IProduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  private productToIProduct(p: any): IProduct {
    return {
      'id': Number(p.id),
        'name': String(p.title),
        'price': Number(p.price),
        'thumbnail': String(p.thumbnail)
    };
  }

  getAll(): Observable<IProduct[]> {
    const mapProds: OperatorFunction<any,IProduct[]> = map((prodsArr: any[]) => {
      return prodsArr.map((p:any) => this.productToIProduct(p));
    });

    const products$ = of(products);
    
    return products$.pipe(mapProds,delay(1000));
  }

  get(id: number) {
    const prod = products.find(p => p.id == id);
    const product$ = of(prod);

    const mapProd: OperatorFunction<any,IProduct> = map((p: any) => this.productToIProduct(p));

    return product$.pipe(mapProd,delay(1000));
  }

  modify(product: IProduct): Observable<IProduct> {
    // Creamos uno nuevo, sino modifica el recibido, cuando sea un web service no hara falta

    const newProduct: IProduct = { ...product };
    return of(newProduct);
  }

  add(product: IProduct): Observable<IProduct> {
    const ids: number[] = products.map(p => p.id);
    const maxId = Math.max(...ids);

    // Creamos uno nuevo, sino modifica el recibido, cuando sea un web service no hara falta
    const newProduct: IProduct = { ...product };
    newProduct.id = maxId + 1;

    //products.push(product);
    
    return of(newProduct);
  }
}
