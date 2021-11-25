import { Injectable } from '@angular/core';
import { ApiInterface } from '../../interfaces/api-interface';
import { ApiRouteMethods, ApiRoutes } from '../api/api-routes';
import { ApiService } from '../api/api.service';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileKeuanganService {

  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) { }

  public fetchDataNeraca() {
    let token = this.authService.getLocalStorage('access_token')!;
    let api_get_neraca: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_neraca_route,
      options: {
        headers: {
          Authorization: token
        }
      }
    };
    return this.apiService.sendRequest(api_get_neraca);
  }

  public fetchDataSPT() {
    let token = this.authService.getLocalStorage('access_token')!;
    let api_get_spt: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_spt_route,
      options: {
        headers: {
          Authorization: token
        }
      }
    };
    return this.apiService.sendRequest(api_get_spt);
  }

}
