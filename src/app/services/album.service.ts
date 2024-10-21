import { EventEmitter, Injectable, OnInit, Output } from '@angular/core';
//import dbjson from '../../mocks/db.json'
import { delay, Observable, of } from 'rxjs';
import { IDisco } from '../interfaces/idisco';
import { AppGlobalConstants } from '../app.constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  BASE_URL: string = AppGlobalConstants.SERVER_API_URL;
  DISCOS_URL:string = this.BASE_URL + '/discos';
  ALL_DISCOS_URL:string = this.DISCOS_URL + '?_start=:start&_limit=:limit';
  DISCO_FROM_ID_URL: string = this.DISCOS_URL + '/:id';
  
  @Output() onFilterGeneroEvent = new EventEmitter<string>();  
  gendre: string = '';

  constructor(private http: HttpClient) { }

  emitFilterGenero(gendre: string) {
    this.gendre = gendre;
    this.onFilterGeneroEvent.emit(gendre);
  }

  get(start:number, limit:number): Observable<IDisco[]> {
    let url = this.ALL_DISCOS_URL.replace(':start',String(start)).replace(':limit',String(limit));
    if(this.gendre.length > 0) url += ('&genero.nombre=' + this.gendre);

    return this.http.get<IDisco[]>(url);
  }

  getOnly(id: number): Observable<IDisco> {
    return this.http.get<IDisco>(this.DISCO_FROM_ID_URL.replace(':id',String(id)));
  }

  add(disco: IDisco): Observable<IDisco> {
    return this.http.post<IDisco>(this.DISCOS_URL, disco);
  }

  update(id: number, disco: IDisco): Observable<IDisco> {
    return this.http.put<IDisco>(this.DISCO_FROM_ID_URL.replace(':id',String(id)), disco);
  }

  remove(id: number) {
    return this.http.delete(this.DISCO_FROM_ID_URL.replace(':id',String(id)));
  }

  /*
  get(start:number, limit:number): Observable<IDisco[]> {
    const albums$ = of(dbjson.discos);

    return albums$.pipe(delay(300));
  }
  */
}


