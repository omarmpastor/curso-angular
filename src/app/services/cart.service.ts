import { Injectable } from '@angular/core';
import { IDisco } from '../interfaces/idisco';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  _albums: IDisco[] = [];

  constructor() { }

  add(album: IDisco) {
    this._albums.push(album);
  }

  remove(album: IDisco, amount: number = 1) {
    const total: number = this._albums.filter(a => a.id == album.id).length;

    if(total < amount) throw new Error(`Hay ${total} discos con id ${album.id} en el carrito y quieres borrar ${amount}`);

    for (let i = 0; i < amount; i++) {
      const index = this._albums.findIndex(a => a.id == album.id);
      this._albums.splice(index,1);
    }
  }

  get albums(): IDisco[] {
    return this._albums;
  }
}
