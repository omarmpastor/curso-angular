import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { IUser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user: IUser | undefined;

  constructor() { }

  login(username: string, password: string): Observable<boolean> {
    const loginOk = username === 'omar' && password === '1234';
    
    if(loginOk) {
      this._user = { username: 'omar', age: 43 };
    }
    
    return of(loginOk).pipe(delay(300));
  }

  get user(): IUser | undefined {
    return this._user;
  }

  logout(): void {
    this._user = undefined;
  }
}
