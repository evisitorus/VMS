import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiInterface } from '../../interfaces/api-interface';
import { ProfileKaryawanInterface } from '../../interfaces/profile-karyawan.interface';
import { ApiRouteMethods, ApiRoutes } from '../api/api-routes';
import { ApiService } from '../api/api.service';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileInformationService {

  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) { }

    public addProfilKaryawan(params: ProfileKaryawanInterface): Observable<any> {
    let token = this.authService.getLocalStorage('access_token')!;
    let api_add_profil_karyawan: ApiInterface = {
      method: ApiRouteMethods.post,
      url: ApiRoutes.api_vendor_information_route,
      body: {
        nik: params.nik,
        namaPegawai: params.namaPegawai,
        tipeKaryawan: params.tipeKaryawan,
        jabatan: params.jabatan,
        bidang: params.bidang,
        file: params.file,
        attachmentFilePath: params.attachmentFilePath,
        owner: "api/vendors/".concat(this.authService.getLocalStorage("vendor_id")!)
      },
      options: {
        headers: {
          Authorization: token
        }
      }
    }

    return this.apiService.sendRequest(api_add_profil_karyawan);
  }

  public getProfilKaryawan(): Observable<any> {
    let token = this.authService.getLocalStorage('access_token')!;
    let api_get_profil_karyawan: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_vendor_information_route,
      options: {
        headers: {
          Authorization: token
        }
      }
    };
    return this.apiService.sendRequest(api_get_profil_karyawan);
  }

  
  getTipeKaryawan(): Observable<any> {    
    let api_get_tipe_karyawan: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_get_tipe_karyawan,
      options: {
      }
    };

    return this.apiService.sendRequest(api_get_tipe_karyawan);
  }

  getBidangKaryawan(): Observable<any> {
    let api_get_bidang_karyawan: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_get_bidang_karyawan,
      // options: {
      //   headers: {
      //     Authorization: token,
      //   }
      // }
    }

    return this.apiService.sendRequest(api_get_bidang_karyawan);
  }
  
  // addPegawai(params: ): Observable<any> {    
  //   let api_add_pegawai: ApiInterface = {
  //     method: ApiRouteMethods.post,
  //     url: ApiRoutes.api_add_pegawai,
  //     body: {
  //       nik: params.nik,
  //       sdmType: params.tipeKaryawan,
  //       jabatan: params.jabatan,
  //       bidang: params.bidangPekerjaan,
  //       fromParty: "1",
  //       relationshipType: "7",
  //       toParty: "2",
  //     }
  //   };

  //   return this.apiService.sendRequest(api_add_pegawai);
  // }

  // public delete(id: string): Observable<any> {
  //   let token = this.authService.getLocalStorage('access_token')!;
  //   let api_delete_profile_info: ApiInterface = {
  //     method: ApiRouteMethods.delete,
  //     url: ApiRoutes.api_vendor_information_route.concat('/').concat(id),
  //     options: {
  //       headers: {
  //         Authorization: token
  //       }
  //     }
  //   };
  //   return this.apiService.sendRequest(api_delete_profile_info);
  // }
}
