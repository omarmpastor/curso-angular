import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let username: string = 'omar';
  let password: string = '1234';

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
    localStorage.removeItem('userLogin');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true for valid credentials', (done) => {
    service.login(username, password).subscribe((result) => {
      expect(result).toBeTrue();
      expect(service.user).toEqual({ username: 'omar', age: 43 });
      done();
    });
  });

  it('should return false for invalid credentials', (done) => {
    service.login(username + '1', password + '1').subscribe((result) => {
      expect(result).toBeFalse();
      expect(service.user).toBeUndefined();
      done();
    });
  });

  it('should logout user', () => {
    localStorage.setItem('userLogin', JSON.stringify({ username: 'omar', age: 43 }));
    service.logout();
    expect(service.user).toBeUndefined();
  });
});
