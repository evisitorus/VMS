import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiInterface } from '../interfaces/api-interface';
import { AddPekerjaanInterface, UpdateRiwayatPekerjaanInterface } from '../interfaces/add-pekerjaan-interface';
import { ApiRouteMethods, ApiRoutes } from './api/api-routes';
import { ApiService } from './api/api.service';
import { AddPemegangSahamInterface } from '../interfaces/add-pemegang-saham-interface';
import { UpdatePemegangSahamInterface } from '../interfaces/add-pemegang-saham-interface';
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
  
  addPekerjaan(params: AddPekerjaanInterface): Observable<any> {    
    let api_add_pekerjaan: ApiInterface = {
      method: ApiRouteMethods.post,
      url: ApiRoutes.api_post_pengalaman_kerja,
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
        params: {
          vendor : this.vendor_id
        }
      }
    };

    return this.apiService.sendRequest(api_get_pekerjaan);
  }

  updatePekerjaan(params: UpdateRiwayatPekerjaanInterface): Observable<any> {    
    let api_update_pemegang_saham: ApiInterface = {
      method: ApiRouteMethods.post,
      url: ApiRoutes.api_base_pemegang_saham + "/" + params.id + "/update" ,
      body: {
        vendor: this.vendor_id,
        namaPekerjaan: params.namaPekerjaan,
        pemberiPekerjaan: params.pemberiPekerjaan,
        nilaiPekerjaan: params.nilaiPekerjaan,
        tahunPekerjaan: params.tahunPekerjaan,
        buktiPekerjaanFilePath: params.buktiPekerjaanFilePath,
        file: params.lampiran
      }
    };

    return this.apiService.sendRequest(api_update_pemegang_saham);
  }

  deletePekerjaan(id: string): Observable<any> {    
    console.log(id);
    let api_delete_pekerjaan: ApiInterface = {
      method: ApiRouteMethods.put,
      url: ApiRoutes.api_delete_pekerjaan + "/" + id,
      body: {
        active: false
      }
    };

    return this.apiService.sendRequest(api_delete_pekerjaan);
  }

  addPemegangSaham(params: AddPemegangSahamInterface): Observable<any> {    
    let api_add_pemegang_saham: ApiInterface = {
      method: ApiRouteMethods.post,
      url: ApiRoutes.api_add_pemegang_saham + "/" + this.vendor_id + "/pemegang_saham",
      body: {
        // vendor: this.vendor_id,
        namaPemegangSaham: params.namaPemegangSaham,
        perseorangan: params.perseorangan,
        lokal: params.lokal,
        presentaseKepemilikan: params.persentaseKepemilikan,
        active: true
      }
    };

    return this.apiService.sendRequest(api_add_pemegang_saham);
  }


  getPemegangSaham(): Observable<any> {    
    let api_get_pemegang_saham: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_get_pemegang_saham_route,
      options: {
        params: {
          fromParty : this.vendor_id
        }
      }
    };

    return this.apiService.sendRequest(api_get_pemegang_saham);
  }

  updatePemegangSaham(params: UpdatePemegangSahamInterface): Observable<any> {    
    let api_update_pemegang_saham: ApiInterface = {
      method: ApiRouteMethods.post,
      url: ApiRoutes.api_base_pemegang_saham + "/" + params.id + "/update" ,
      body: {
        vendor: this.vendor_id,
        namaPemegangSaham: params.namaPemegangSaham,
        perseorangan: params.perseorangan,
        presentaseKepemilikan: params.persentaseKepemilikan.toString(),
        lokal: params.lokal,
      }
    };

    return this.apiService.sendRequest(api_update_pemegang_saham);
  }

  deletePemegangSaham(id: string): Observable<any> {    
    let api_delete_pemegang_saham: ApiInterface = {
      method: ApiRouteMethods.put,
      url: ApiRoutes.api_delete_pemegang_saham + "/" + id,
      body: {
        active: false
      }
    };

    return this.apiService.sendRequest(api_delete_pemegang_saham);
  }

}
