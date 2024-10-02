import { Injectable } from '@angular/core';
import products from './files-test/products.json'
import { map, of, Observable, from, OperatorFunction, delay } from 'rxjs';
import { IProduct } from './interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getAll(): Observable<IProduct[]> {
    const mapProds: OperatorFunction<any,IProduct[]> = map((prodsArr: any[]) => {
      return prodsArr.map((p:any) => { return {
        'id': Number(p.id),
        'name': String(p.title),
        'price': Number(p.price),
        'thumbnail': String(p.thumbnail)
      }; })
    });

    const products$ = of(products);
    
    return products$.pipe(mapProds,delay(1000));
  }
}
