import { Injectable } from '@angular/core';
import { map, Observable, OperatorFunction } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppGlobalConstants } from '../app.constants';
import { IDb } from '../interfaces/idb';
import { IAutor } from '../interfaces/iautor';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  BASE_URL: string = AppGlobalConstants.SERVER_API_URL;
  //ALL_GENEROS_URL:string = this.BASE_URL + '/autores';

  constructor(private http: HttpClient) { }

  get(): Observable<IAutor[]> {
    const mapAuthors: OperatorFunction<any,IAutor[]> = map((db: IDb) => db.autores);
    
    return this.http.get<IAutor[]>(this.BASE_URL).pipe(mapAuthors);
  }
}
