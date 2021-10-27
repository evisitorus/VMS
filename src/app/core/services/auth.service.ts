import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiInterface } from '../interfaces/api-interface';
import { LoginInterface } from '../interfaces/login-interface';
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

  isLoggedIn(): string | null {
    return this.getLocalStorage('isLoggedIn') ? this.getLocalStorage('isLoggedIn') : 'false';
  }

  setLoggedIn(status: boolean) {
    this.setLocalStorage('isLoggedIn', status.toString());
  }

  setToken(token: string) {
    this.setLocalStorage('access_token', token);
  }

  getLocalStorage(key: string): string | null {
    return localStorage.getItem(key);
  }

  setLocalStorage(key: string, value: string): void {
    localStorage.setItem(key, value);
  }
  
}
