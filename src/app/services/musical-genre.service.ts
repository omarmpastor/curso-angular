import { Injectable } from '@angular/core';
import dbjson from '../../mocks/db.json'
import { delay, Observable, of } from 'rxjs';
import { IGenero } from '../interfaces/igenero';

@Injectable({
  providedIn: 'root'
})
export class MusicalGenreService {

  constructor() { }

  get(): Observable<IGenero[]> {
    const albums$ = of(dbjson.generos);

    return albums$.pipe(delay(300));
  }
}
