import { Injectable } from '@angular/core';
import dbjson from '../../mocks/db.json'
import { delay, Observable, of } from 'rxjs';
import { IDisco } from '../interfaces/idisco';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor() { }

  get(): Observable<IDisco[]> {
    const albums$ = of(dbjson.discos);

    return albums$;
  }

  getOnly() { }
  add() {}
  update() {}
  remove() {}
}


