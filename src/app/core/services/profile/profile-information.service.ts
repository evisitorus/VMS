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
      url: ApiRoutes.api_add_pegawai_route,
      body: {
        nik: params.nik,
        firstName: params.firstName,
        lastName: params.lastName,
        tipeKaryawan: params.tipeKaryawan,
        jabatan: params.jabatan,
        bidangPekerjaan: params.bidangPekerjaan,
        cvFilePath: params.attachmentFilePath,
        file_id: params.file,
      },
      options: {
        params: {
          id: (this.authService.getLocalStorage("vendor_id")!)
        },
        headers: {
          Authorization: token
        }
      }
    }

    return this.apiService.sendRequest(api_add_profil_karyawan);
  }

  public getKaryawan(): Observable<any> {
    // let token = this.authService.getLocalStorage('access_token')!;
    let api_get_profil_karyawan: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_get_pegawai_route + localStorage.getItem('vendor_id'),
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
      url: ApiRoutes.api_bidang_karyawan,
    }

    return this.apiService.sendRequest(api_get_bidang_karyawan);
  }

  postBidangKaryawan(bidang: string): Observable<any> {
    let api_post_bidang_karyawan: ApiInterface = {
      method: ApiRouteMethods.post,
      url: ApiRoutes.api_bidang_karyawan,
      body: {
        name: bidang
      }
    }

    return this.apiService.sendRequest(api_post_bidang_karyawan);
  }


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
