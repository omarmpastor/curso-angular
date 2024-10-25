import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { IUser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(username: string, password: string): Observable<boolean> {
    const loginOk = username === 'omar' && password === '1234';
    
    if(loginOk) {
      localStorage.setItem('userLogin', JSON.stringify({ username: 'omar', age: 43 }));
    }
    
    return of(loginOk).pipe(delay(300));
  }

  get user(): IUser | undefined {
    const userLogin = localStorage.getItem('userLogin')
    return userLogin?JSON.parse(userLogin):undefined;
  }

  logout(): void {
    localStorage.removeItem('userLogin');
  }
}
