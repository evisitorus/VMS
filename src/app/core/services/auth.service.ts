import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiInterface } from '../interfaces/api-interface';
import { LoginInterface } from '../interfaces/login-interface';
import { RegisterInterface } from '../interfaces/register-interface';
import { SetPasswordInterface } from '../interfaces/setPassword-interface';
import { ResetPasswordInterface } from '../interfaces/reset-password-interface';
import { ApiRouteMethods, ApiRoutes } from './api/api-routes';
import { ApiService } from './api/api.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public redirectUrl: string | null = null;

  constructor(
    private apiService: ApiService,
    private jwtHelper: JwtHelperService
  ) { }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token')!;
    return !this.jwtHelper.isTokenExpired(token);
  }

  login(params: LoginInterface): Observable<any> {    
    let api_login: ApiInterface = {
      method: ApiRouteMethods.post,
      url: ApiRoutes.api_login_route,
      body: {
        email: params.email,
        password: params.password,
        loginAs: environment.login_as
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


  //activation set password
  setPassword(params: SetPasswordInterface): Observable<any> {    
    let api_register: ApiInterface = {
      method: 'POST',
      url: ApiRoutes.api_activate_route,
      body: {
        password: params.password,
        confirmPassword: params.confirmPassword,
        token: params.token,
      }
    };

    return this.apiService.sendRequest(api_register);
  }

  //activation set password
  isTokenExpired(params: string): Observable<any> {    
    let api_register: ApiInterface = {
      method: 'POST',
      url: ApiRoutes.api_token_route,
      body: {
        token: params
      }
    };

    return this.apiService.sendRequest(api_register);
  }

}
