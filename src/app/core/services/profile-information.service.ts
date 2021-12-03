import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiInterface} from '../interfaces/api-interface';
import {ApiRouteMethods, ApiRoutes} from './api/api-routes';
import {ApiService} from './api/api.service';
import {AuthService} from './auth.service';
import {ProfileInformationInterface} from "../interfaces/profile/profile-information-interface";

@Injectable({
  providedIn: 'root'
})
export class ProfileInformationService {

  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) {
  }

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

  getJenisPenyediaUsaha(): Observable<any> {
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

  getJenisKegiatanUsaha(): Observable<any> {
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

  getVendorInformation(): Observable<any> {
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

  getOrganizations(): Observable<any> {
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

  getProvinces(): Observable<any> {
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

  updateProfileInformation(params: ProfileInformationInterface, vendorID: string): Observable<any> {
    let api_profile_information: ApiInterface = {
      method: ApiRouteMethods.put,
      url: ApiRoutes.api_vendor_information_route + localStorage.getItem('vendor_id') + '/information',
      body: {
        name: params.name,
        initial: params.initial,
        jenis_badan_usaha: params.jenisBadanUsaha,
        status_badan_usaha: params.statusBadanUsaha,
        tipe_badan_usaha: params.tipeBadanUsaha,
        kategori_badan_usaha: params.kategoriBadanUsaha,
        jenis_kegiatan_usaha: params.jenisKegiatanUsaha,
        jenis_penyedia_usaha: params.jenisPenyediaUsaha,
        npwp: params.npwp,
        nib: params.nib,
        bidang_usaha: params.bidangUsaha,
        oragnisasi_himpunan: params.oragnisasiHimpunan,
        bumn_pengampu: params.bumnPengampu,
        website: params.website,
        jumlah_karyawan_total: params.jumlahKaryawanTotal,
        jumlah_karyawan_lokal: params.jumlahKaryawanLokal,
        jumlah_karyawan_asing: params.jumlahKaryawanAsing,
        phone_number: params.phoneNumber
      },
      options: {
        headers: {
          "Content-Type": "application/json"
        }
      },
    }

    return this.apiService.sendRequest(api_profile_information);
  }

}
