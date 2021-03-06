import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiInterface } from '../../interfaces/api-interface';
import { ApiRouteMethods, ApiRoutes } from '../api/api-routes';
import { ApiService } from '../api/api.service';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileKelengkapanService {
  
  constructor(
    private apiService: ApiService,
    private authService: AuthService
    ) { }
    
    public getDataKelengkapan(): Observable<any> {
      let token = this.authService.getLocalStorage('access_token')!;
      let vendor_id = this.authService.getLocalStorage('vendor_id')!;
      let api_get_kelengkapan: ApiInterface = {
        method: ApiRouteMethods.get,
        url: ApiRoutes.api_vendor_route + "/" + vendor_id + "/verification",
        options: {
          headers: {
            Authorization: token
          }
        }
      };
      return this.apiService.sendRequest(api_get_kelengkapan);
    }

    public verifikasiKelengkapan(): Observable<any> {
      let token = this.authService.getLocalStorage('access_token')!;
      let vendor_id = this.authService.getLocalStorage('vendor_id')!;
      let api_verifikasi_kelengkapan: ApiInterface = {
        method: ApiRouteMethods.post,
        url: ApiRoutes.api_vendor_route + "/" + vendor_id + "/verification",
        body: {},
        options: {
          headers: {
            Authorization: token,
          }
        }
      };
      return this.apiService.sendRequest(api_verifikasi_kelengkapan);
    }

    public batalVerifikasiKelengkapan(): Observable<any> {
      let token = this.authService.getLocalStorage('access_token')!;
      let vendor_id = this.authService.getLocalStorage('vendor_id')!;
      let api_cancel_verifikasi_kelengkapan: ApiInterface = {
        method: ApiRouteMethods.post,
        url: ApiRoutes.api_vendor_route + "/" + vendor_id + "/cancel_verification",
        body: {},
        options: {
          headers: {
            Authorization: token,
          }
        }
      };
      return this.apiService.sendRequest(api_cancel_verifikasi_kelengkapan);
    }
    
  }
  