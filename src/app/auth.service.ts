import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from './interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user: IUser | undefined;

  constructor() { }

  login(username: string, password: string): Observable<boolean> {
    const loginOk = username === 'omar' && password === '1234';

    return new Observable((subscriber) => {
      setTimeout(() => {
        if(loginOk) this._user = { username: 'omar', age: 43 };
        subscriber.next(loginOk);
        subscriber.complete();
      }, 300);
    });
    //return of(true);
  }

  get user(): IUser | undefined {
    return this._user;
  }
}
