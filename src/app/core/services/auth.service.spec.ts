import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { CoreModule } from '../core.module';
import { LoginInterface } from '../interfaces/login-interface';
import { ApiService } from './api/api.service';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let apiService: ApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CoreModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
    apiService = TestBed.inject(ApiService);
  });

  it('test setToken function', () => {
    spyOn(service, 'setLocalStorage');
    service.setToken('sample token');
    expect(service.setLocalStorage).toHaveBeenCalled();
  });

  it('test isLoggedIn function', () => {
    spyOn(service, 'getLocalStorage').and.returnValue(null);
    expect(service.isLoggedIn()).toBe('false');
  });

  it('test forgotPassword function', () => {
    let obs = new Observable((subscriber) => {
      subscriber.next(true);
      subscriber.complete();
    });

    spyOn(apiService, 'sendRequest').and.returnValue(obs);
    service.forgotPassword("test@mail.com").subscribe(
      (resp) => {
        expect(resp).toBe(true);
      }
    );
  });

  it('test login function', () => {
    let res = new Observable((subscriber) => {
      subscriber.next(true);
      subscriber.complete();
    });

    let param: LoginInterface = {
      email: 'mail@test.com',
      password: 'testing'
    };

    spyOn(apiService, 'sendRequest').and.returnValue(res);
    service.login(param).subscribe(
      (resp) => {
        expect(resp).toBe(true);
      }
    );
  });

});
