import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiInterface } from '../interfaces/api-interface';
import { LoginInterface } from '../interfaces/login-interface';
import { RegisterInterface } from '../interfaces/register-interface';
import { ApiRoutes } from './api/api-routes';
import { ApiService } from './api/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiService) { }

  login(params: LoginInterface): Observable<any> {    
    let api_login: ApiInterface = {
      method: 'POST',
      url: ApiRoutes.api_login_route,
      body: {
        email: params.email,
        password: params.password
      }
    };

    return this.apiService.sendRequest(api_login);
  }

  isLoggedId(): string | null {
    return this.getLocalStorage('isLoggedIn') ? this.getLocalStorage('isLoggedIn') : 'false';
  }

  setLoggedIn(status: boolean) {
    this.setLocalStorage('isLoggedIn', status.toString());
  }

  setToken(token: string) {
    this.setLocalStorage('access_token', token);
  }

  private getLocalStorage(key: string): string | null {
    return localStorage.getItem(key);
  }

  private setLocalStorage(key: string, value: string): void {
    localStorage.setItem(key, value);
  }
  

  //registration
  register(params: RegisterInterface): Observable<any> {    
    let api_register: ApiInterface = {
      method: 'POST',
      url: ApiRoutes.api_register_route,
      body: {
        namaPerusahaan: params.namaPerusahaan,
        npwp: params.npwp,
        email: params.email,
        namaPic: params.namaPic,
        noTelepon: params.noTelepon
      }
    };

    return this.apiService.sendRequest(api_register);
  }

}
