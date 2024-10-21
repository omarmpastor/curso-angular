import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { IUser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user: IUser | undefined;

  constructor() {
    const strUser = localStorage.getItem('userLogin');//userLogin

    if(strUser) this._user = JSON.parse(strUser);
  }

  login(username: string, password: string): Observable<boolean> {
    const loginOk = username === 'omar' && password === '1234';
    
    if(loginOk) {
      this._user = { username: 'omar', age: 43 };
      localStorage.setItem('userLogin', JSON.stringify(this._user));
    }
    
    return of(loginOk).pipe(delay(300));
  }

  get user(): IUser | undefined {
    return this._user;
  }

  logout(): void {
    this._user = undefined;
    localStorage.removeItem('userLogin');
  }
}
