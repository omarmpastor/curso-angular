import { Injectable } from '@angular/core';
//import dbjson from '../../mocks/db.json'
import { Observable } from 'rxjs';
import { IGenero } from '../interfaces/igenero';
import { HttpClient } from '@angular/common/http';
import { AppGlobalConstants } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class MusicalGenreService {
  BASE_URL: string = AppGlobalConstants.SERVER_API_URL;
  ALL_GENEROS_URL:string = this.BASE_URL + '/generos';

  constructor(private http: HttpClient) { }

  get(): Observable<IGenero[]> {
    return this.http.get<IGenero[]>(this.ALL_GENEROS_URL);
  }

  /*
  get(): Observable<IGenero[]> {
    const albums$ = of(dbjson.generos);

    return albums$.pipe(delay(300));
  }
  */
}
