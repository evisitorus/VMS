import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiInterface } from '../../interfaces/api-interface';
import { ApiRouteMethods, ApiRoutes } from '../api/api-routes';
import { ApiService } from '../api/api.service';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileUbahSandiService {

  constructor(
    private apiService: ApiService,
    private authService: AuthService
    ) { }

    public getUbahSandi(sandiLama :any,sandiBaru : any,retype_sandiBaru:any): Observable<any> {
      let token = this.authService.getLocalStorage('access_token')!;
      let vendor_id = this.authService.getLocalStorage('vendor_id')!;
      let api_get_ubah_sandi: ApiInterface = {
        method: ApiRouteMethods.get,
        url: ApiRoutes.api_vendor_route + "/" + vendor_id + "/"+sandiLama+"/"+sandiBaru+"/"+retype_sandiBaru+"/change_password",
        options: {
          headers: {
            Authorization: token
          }
        }
      };
      return this.apiService.sendRequest(api_get_ubah_sandi);
    }

  }
