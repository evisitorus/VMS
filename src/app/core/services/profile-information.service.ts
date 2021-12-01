import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiInterface } from '../interfaces/api-interface';
import { ProfileInterface } from '../interfaces/profile-interface';
import { ApiRouteMethods, ApiRoutes } from './api/api-routes';
import { ApiService } from './api/api.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileInformationService {

  constructor(
    private apiService:ApiService,
    private authService: AuthService
  ) { }

  token = this.authService.getLocalStorage('access_token')!;

  // uploadImg(img: String): Observable<any> {
    
  //   let api_profile_information: ApiInterface = {
  //     method: ApiRouteMethods.post,
  //     // url: ApiRoutes.api_profile_information,
  //     url:"",
  //     body : {
  //       img: img
  //     },
  //     options : {
  //       headers: {
  //         Authorization: this.token
  //       }
  //     }
  //   }
  //   return this.apiService.sendRequest(api_profile_information);
  // }

  getJenisPenyediaUsaha(): Observable<any>{
    let api_jenis_penyedia_usaha: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_penyedia_usaha_route,
      // options : {
      //   headers: {
      //     Authorization: this.token
      //   }
      // }
    }
    return this.apiService.sendRequest(api_jenis_penyedia_usaha);

  }

  getJenisKegiatanUsaha(): Observable<any>{
    let api_jenis_kegiatan_usaha: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_jenis_kegiatan_usaha_route,
      // options : {
      //   headers: {
      //     Authorization: this.token
      //   }
      // }
    }
    return this.apiService.sendRequest(api_jenis_kegiatan_usaha);

  }


  getTipeVendor(): Observable<any>{
    let api_tipe_vendor: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_tipe_vendor_route,
      // options : {
      //   headers: {
      //     Authorization: this.token
      //   }
      // }
    }
    return this.apiService.sendRequest(api_tipe_vendor);

  }

  getVendorInformation(): Observable<any>{
    let api_vendor_information: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_vendor_information_route + localStorage.getItem('vendor_id') + '/information',
      // options : {
      //   headers: {
      //     Authorization: this.token
      //   }
      // }
    }
    return this.apiService.sendRequest(api_vendor_information);

  }

  getVendorData(): Observable<any>{
    let api_vendor_data: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_vendor_information_route + localStorage.getItem('vendor_id'),
      // options : {
      //   headers: {
      //     Authorization: this.token
      //   }
      // }
    }
    return this.apiService.sendRequest(api_vendor_data);

  }

  getOrganizations(): Observable<any>{
    let api_organizations: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_get_organizations_route,
      // options : {
      //   headers: {
      //     Authorization: this.token
      //   }
      // }
    }
    return this.apiService.sendRequest(api_organizations);

  }

  getProvinces(): Observable<any>{
    let api_provinces: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_get_provinces_route,
      // options : {
      //   headers: {
      //     Authorization: this.token
      //   }
      // }
    }
    return this.apiService.sendRequest(api_provinces);

  }

  getKotaKabupaten(provinsi:any): Observable<any>{
    let api_get_kotakab: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_get_kotakab,
      options : {
        params: {
          provinsi : provinsi
        }
      }
    }
    return this.apiService.sendRequest(api_get_kotakab);

  }

  getKecamatan(kotakab:any): Observable<any>{
    let api_get_kecamatan: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_get_kecamatan,
      options : {
        params: {
          kotakab : kotakab
        }
      }
    }
    return this.apiService.sendRequest(api_get_kecamatan);

  }

  getKelurahan(kecamatan:any): Observable<any>{
    let api_get_kelurahan: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_get_kelurahan,
      options : {
        params: {
          kecamatan : kecamatan
        }
      }
    }
    return this.apiService.sendRequest(api_get_kelurahan);
  }

  getKodepos(kelurahan:any): Observable<any>{
    let api_get_kodepos: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_get_kodepos,
      options : {
        params: {
          kelurahan : kelurahan
        }
      }
    }
    return this.apiService.sendRequest(api_get_kodepos);
  }

  updateProfile(params: ProfileInterface): Observable<any> {    
    let api_update_profile: ApiInterface = {
      method: 'POST',
      url: ApiRoutes.api_update_profile,
      body: {
        namaPerusahaan: params.namaPerusahaan,
        npwp: params.npwp,
        email: params.email,
        namaPic: params.namaPic,
        noTelepon: params.noTelepon
      }
    };

    return this.apiService.sendRequest(api_update_profile);
  }
  
}
