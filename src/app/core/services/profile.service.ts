import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiInterface } from '../interfaces/api-interface';
import { AddPekerjaanInterface } from '../interfaces/add-pekerjaan-interface';
import { ApiRouteMethods, ApiRoutes } from './api/api-routes';
import { ApiService } from './api/api.service';
import { AddPemegangSahamInterface } from '../interfaces/add-pemegang-saham-interface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private apiService: ApiService,
    private authService: AuthService
    ) { }

  email = this.authService.getLocalStorage('email')!;
  vendor_id = this.authService.getLocalStorage('vendor_id')!;
  token = this.authService.getLocalStorage('access_token')!;
  user_id = this.authService.getLocalStorage('person_id')!;
  
  addPekerjaan(params: AddPekerjaanInterface): Observable<any> {    
    let api_add_pekerjaan: ApiInterface = {
      method: ApiRouteMethods.post,
      url: ApiRoutes.api_post_pengalaman_kerja,
      options: {
        headers: {
          Authorization: this.token
        }
      },
      body: {
        vendor: "api/vendors/".concat(this.authService.getLocalStorage("vendor_id")!),
        namaPekerjaan: params.namaPekerjaan,
        pemberiPekerjaan: params.pemberiPekerjaan,
        nilaiPekerjaan: params.nilaiPekerjaan,
        tahunPekerjaan: params.tahunPekerjaan,
        buktiPekerjaanFilePath: params.buktiPekerjaanFilePath,
        file: params.lampiran
      }
    };

    return this.apiService.sendRequest(api_add_pekerjaan);
  }

  getPekerjaan(): Observable<any> {    
    let api_get_pekerjaan: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_get_pengalaman_kerja,
      options: {
        headers: {
          Authorization: this.token
        },
        params: {
          vendor : this.vendor_id
        }
      }
    };

    return this.apiService.sendRequest(api_get_pekerjaan);
  }


  addPemegangSaham(params: AddPemegangSahamInterface): Observable<any> {    
    let api_add_pemegang_saham: ApiInterface = {
      method: ApiRouteMethods.post,
      url: ApiRoutes.api_add_pemegang_saham,
      options: {
        headers: {
          Authorization: this.token
        }
      },
      body: {
        email: this.email,
        namaPemegangSaham: params.namaPemegangSaham,
        perseorangan: params.perseorangan,
        lokal: params.lokal,
        presentaseKepemilikan: params.presentaseKepemilikan
      }
    };

    return this.apiService.sendRequest(api_add_pemegang_saham);
  }


  getPemegangSaham(): Observable<any> {    
    let api_get_pemegang_saham: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_get_pemegang_saham_route,
      options: {
        headers: {
          Authorization: this.token
        },
        params: {
          fromParty : this.vendor_id
        }
      }
    };

    return this.apiService.sendRequest(api_get_pemegang_saham);
  }

}
