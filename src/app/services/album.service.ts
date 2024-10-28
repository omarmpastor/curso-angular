import { EventEmitter, Injectable } from '@angular/core';
import { forkJoin, map, Observable, OperatorFunction } from 'rxjs';
import { IDisco } from '../interfaces/idisco';
import { AppGlobalConstants } from '../app.constants';
import { HttpClient } from '@angular/common/http';
import { IDb } from '../interfaces/idb';
import { IGenero } from '../interfaces/igenero';
import { IPista } from '../interfaces/ipista';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  BASE_URL: string = AppGlobalConstants.SERVER_API_URL;
  DISCOS_URL:string = this.BASE_URL + '/discos';
  ALL_DISCOS_URL:string = this.DISCOS_URL + '?_start=:start&_limit=:limit';
  DISCO_FROM_ID_URL: string = this.DISCOS_URL + '/:id';
  
  onFilterGeneroEvent$ = new EventEmitter<string>();
  gendre: string = '';

  constructor(private http: HttpClient) { }

  emitFilterGenero(gendre: string) {
    this.gendre = gendre;
    this.onFilterGeneroEvent$.emit(gendre);
  }

  get(start:number, limit:number): Observable<IDisco[]> {
    const mapAlbums: OperatorFunction<any,IDisco[]> = map((db: IDb) => {
      const allDiscos = db.discos;

      return allDiscos.filter(d => {
        if (this.gendre === '') {
          return true;
        }

        let discoGenero:IGenero;

        if((Array.isArray(d.genero) && d.genero.length > 0)) {
          discoGenero = d.genero[0];
        } else {
          discoGenero = d.genero as IGenero;
        }
        
        if(discoGenero.nombre?.toLocaleUpperCase() === this.gendre.toLocaleUpperCase()) {
          return true;
        } else {
          return false;
        }
      });
    });

    return this.http.get<IDisco[]>('http://localhost:4200/db.json').pipe(mapAlbums);
  }

  getOnly(id: number): Observable<IDisco> {
    const mapAlbumById: OperatorFunction<any,IDisco> = map((db: IDb) => {
      const album = db.discos.find(d => d.id == String(id));
      if(!album) throw new Error('No existe');

      return album;
    });

    const mapPistasByAlbumId: OperatorFunction<any,IPista[]> = map((db: IDb) => db.pistas.filter(p => p.discoId == String(id)));

    const album$ = this.http.get<IDisco>('http://localhost:4200/db.json').pipe(mapAlbumById);
    const pistas$ = this.http.get<IPista[]>('http://localhost:4200/db.json').pipe(mapPistasByAlbumId);

    const albumWithPistas$ = forkJoin([album$, pistas$]).pipe(map(result => {
      result[0].pistas = result[1];
      return result[0];
    }));

    return albumWithPistas$;
  }

  /*
  get(start:number, limit:number): Observable<IDisco[]> {
    let url = this.ALL_DISCOS_URL.replace(':start',String(start)).replace(':limit',String(limit));
    if(this.gendre.length > 0) url += ('&genero.nombre=' + this.gendre);

    return this.http.get<IDisco[]>(url);
  }

  getOnly(id: number): Observable<IDisco> {
    return this.http.get<IDisco>(this.DISCO_FROM_ID_URL.replace(':id',String(id)) + '?_embed=pistas');
  }
  */

  add(disco: IDisco): Observable<IDisco> {
    return this.http.post<IDisco>(this.DISCOS_URL, disco);
  }

  update(id: number, disco: IDisco): Observable<IDisco> {
    return this.http.put<IDisco>(this.DISCO_FROM_ID_URL.replace(':id',String(id)), disco);
  }

  remove(id: number) {
    return this.http.delete(this.DISCO_FROM_ID_URL.replace(':id',String(id)));
  }
}


