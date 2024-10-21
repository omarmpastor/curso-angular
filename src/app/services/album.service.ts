import { EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import dbjson from '../../mocks/db.json'
import { delay, Observable, of } from 'rxjs';
import { IDisco } from '../interfaces/idisco';
import { AppGlobalConstants } from '../app.constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  @Output() onFilterGeneroEvent = new EventEmitter<string>();
  
  BASE_URL: string = AppGlobalConstants.SERVER_API_URL;
  ALL_DISCOS_URL:string = this.BASE_URL + '/discos?_start=:start&_limit=:limit';
  gendre: string = '';

  // http://localhost:3000/discos?genero.nombre=ROCK
  // http://localhost:3000/discos?_start=10&_limit=10
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

  /*
  get(start:number, limit:number): Observable<IDisco[]> {
    const albums$ = of(dbjson.discos);

    return albums$.pipe(delay(300));
  }
  */

  getOnly() { }
  add() {}
  update() {}
  remove() {}
}


