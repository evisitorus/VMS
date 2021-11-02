import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiInterface } from '../interfaces/api-interface';
import { LoginInterface } from '../interfaces/login-interface';
import { ResetPasswordInterface } from '../interfaces/reset-password-interface';
import { ApiRouteMethods, ApiRoutes } from './api/api-routes';
import { ApiService } from './api/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiService) { }

  login(params: LoginInterface): Observable<any> {    
    let api_login: ApiInterface = {
      method: ApiRouteMethods.post,
      url: ApiRoutes.api_login_route,
      body: {
        email: params.email,
        password: params.password
      }
    };

    return this.apiService.sendRequest(api_login);
  }

  forgotPassword(email: string): Observable<any> {
    let api_forgot_password: ApiInterface = {
      method: ApiRouteMethods.post,
      url: ApiRoutes.api_forgot_password_route,
      body: {
        email: email
      }
    };

    return this.apiService.sendRequest(api_forgot_password);
  }

  resetPassword(params: ResetPasswordInterface) {
    let api_reset_password: ApiInterface = {
      method: ApiRouteMethods.post,
      url: ApiRoutes.api_reset_password_route,
      body: {
        ...params
      }
    };

    return this.apiService.sendRequest(api_reset_password);
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
