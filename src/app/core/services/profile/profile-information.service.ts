import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiInterface } from '../../interfaces/api-interface';
import { ProfileKaryawanInterface } from '../../interfaces/profile-karyawan.interface';
import { JumlahPegawaiInterface } from '../../interfaces/profile/jumlah-pegawai-interface';
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

  token = this.authService.getLocalStorage('access_token')!;

  public addProfilKaryawan(params: ProfileKaryawanInterface): Observable<any> {
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
          Authorization: this.token
        }
      }
    }

    return this.apiService.sendRequest(api_add_profil_karyawan);
  }

  public getKaryawan(): Observable<any> {
    let api_get_profil_karyawan: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_get_pegawai_route + localStorage.getItem('vendor_id'),
      options: {
        headers: {
          Authorization: this.token
        }
      }
    };
    return this.apiService.sendRequest(api_get_profil_karyawan);
  }

  public getTipeKaryawan(): Observable<any> {
    let api_get_tipe_karyawan: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_get_tipe_karyawan,
      options: {
        headers: {
          Authorization: this.token
        }
      }
    };

    return this.apiService.sendRequest(api_get_tipe_karyawan);
  }

  public getBidangKaryawan(): Observable<any> {
    let api_get_bidang_karyawan: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_bidang_karyawan,
      options: {
        headers: {
          Authorization: this.token
        }
      }
    }

    return this.apiService.sendRequest(api_get_bidang_karyawan);
  }

  public postBidangKaryawan(bidang: string): Observable<any> {
    let api_post_bidang_karyawan: ApiInterface = {
      method: ApiRouteMethods.post,
      url: ApiRoutes.api_bidang_karyawan,
      body: {
        name: bidang
      },
      options: {
        headers: {
          Authorization: this.token
        }
      }
    }

    return this.apiService.sendRequest(api_post_bidang_karyawan);
  }

  public update(params: ProfileKaryawanInterface, id: string, pegawai_id: string): Observable<any> {
    let api_update_pegawai: ApiInterface = {
      method: ApiRouteMethods.put,
      url: ApiRoutes.api_update_pegawai_route,
      body: {
        id: id,
        nik: params.nik,
        firstName: params.firstName,
        lastName: params.lastName,
        tipeKaryawan: params.tipeKaryawan,
        jabatan: params.jabatan,
        bidangPekerjaan: params.bidangPekerjaan,
        cvFilePath: params.attachmentFilePath,
        file_id: params.file,
        pegawai_id: pegawai_id
      },
      options: {
        headers: {
          Authorization: this.token
        }
      }
    };
    return this.apiService.sendRequest(api_update_pegawai);
  }

  
  public updateJumlahKaryawan(params: JumlahPegawaiInterface): Observable<any> {
    let api_update_jumlah_karyawan: ApiInterface = {
      method: ApiRouteMethods.put,
      url: ApiRoutes.api_vendor_route,
      body: {
        jumlahKaryawanDomestik: params.jumlahKaryawanDomestik,
        jumlahKaryawanAsing: params.jumlahKaryawanAsing
      },
      options: {
        params: {
          id: (this.authService.getLocalStorage("vendor_id")!)
        },
        headers: {
          Authorization: this.token
        }
      }
    };
    return this.apiService.sendRequest(api_update_jumlah_karyawan);
  }

  public delete(id: string): Observable<any> {
    let api_delete_pegawai_info: ApiInterface = {
      method: ApiRouteMethods.delete,
      url: ApiRoutes.api_pegawai_route.concat('/').concat(id),
      options: {
        headers: {
          Authorization: this.token
        }
      }
    };
    return this.apiService.sendRequest(api_delete_pegawai_info);
  }
}
