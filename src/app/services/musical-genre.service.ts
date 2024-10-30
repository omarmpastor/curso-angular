import { Injectable } from '@angular/core';
import { map, Observable, OperatorFunction } from 'rxjs';
import { IGenero } from '../interfaces/igenero';
import { HttpClient } from '@angular/common/http';
import { AppGlobalConstants } from '../app.constants';
import { IDb } from '../interfaces/idb';

@Injectable({
  providedIn: 'root'
})
export class MusicalGenreService {
  BASE_URL: string = AppGlobalConstants.SERVER_API_URL;
  //ALL_GENEROS_URL:string = this.BASE_URL + '/generos';

  constructor(private http: HttpClient) { }

  get(): Observable<IGenero[]> {
    const mapGeneros: OperatorFunction<any,IGenero[]> = map((db: IDb) => db.generos);
    
    return this.http.get<IGenero[]>(this.BASE_URL).pipe(mapGeneros);
  }

  /*
  get(): Observable<IGenero[]> {
    return this.http.get<IGenero[]>(this.ALL_GENEROS_URL);
  }
  */
}
