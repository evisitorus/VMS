import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiInterface } from '../interfaces/api-interface';
import { AddPekerjaanInterface } from '../interfaces/add-pekerjaan-interface';
import { ApiRouteMethods, ApiRoutes } from './api/api-routes';
import { ApiService } from './api/api.service';
import { AddPemegangSahamInterface } from '../interfaces/add-pemegang-saham-interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private apiService: ApiService) { }

  addPekerjaan(params: AddPekerjaanInterface): Observable<any> {    
    let api_add_pekerjaan: ApiInterface = {
      method: ApiRouteMethods.post,
      url: ApiRoutes.api_add_pengalaman_kerja,
      body: {
        email: params.email,
        namaPekerjaan: params.namaPekerjaan,
        pemberiPekerjaan: params.pemberiPekerjaan,
        nilaiPekerjaan: params.nilaiPekerjaan,
        tahunPekerjaan: params.tahunPekerjaan,
        buktiPekerjaanFilePath: params.buktiPekerjaanFilePath
      }
    };

    return this.apiService.sendRequest(api_add_pekerjaan);
  }

  getPekerjaan(vendor: string): Observable<any> {    
    let api_get_pekerjaan: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_get_pengalaman_kerja,
      options: {
        params: {
          vendor : vendor
        }
      }
    };

    return this.apiService.sendRequest(api_get_pekerjaan);
  }

  addPemegangSaham(params: AddPemegangSahamInterface): Observable<any> {    
    let api_add_pemegang_saham: ApiInterface = {
      method: ApiRouteMethods.post,
      url: ApiRoutes.api_add_pemegang_saham,
      body: {
        email: params.email,
        namaPemegangSaham: params.namaPemegangSaham,
        perseorangan: params.perseorangan,
        lokal: params.lokal,
        presentaseKepemilikan: params.presentaseKepemilikan
      }
    };

    return this.apiService.sendRequest(api_add_pemegang_saham);
  }

  getPemegangSaham(vendor: string): Observable<any> {    
    let api_get_pemegang_saham: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_get_pemegang_saham_route,
      options: {
        params: {
          fromParty : vendor
        }
      }
    };

    return this.apiService.sendRequest(api_get_pemegang_saham);
  }

  // addProfilKaryawan(): Observable<any> {
  //   let api_add_profil_karyawan: ApiInterface = {
  //     method: ApiRouteMethods.post,
  //     url: ApiRoutes.api_add_karyawan_route,
  //     // body: {

  //     // }
  //   }

  //   return this.apiService.sendRequest(api_add_profil_karyawan);
  // }

  // getProfilKaryawan(): Observable<any> {
  //   let api_get_profil_karyawan: ApiInterface = {
  //     method: ApiRouteMethods.get,
  //     url: ApiRoutes.api_get_karyawan_route,
  //   // body: {

  //   // }
  //   }
  // }

  
}
