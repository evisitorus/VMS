import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JumlahPegawaiInterface } from 'src/app/core/interfaces/profile/jumlah-pegawai-interface';
import { ApiInterface } from '../../../interfaces/api-interface';
import { ProfilePimpinanDanPengurusInterface } from '../../../interfaces/profile/profile-pimpinan-dan-pengurus.interface';
import { ApiRouteMethods, ApiRoutes } from '../../api/api-routes';
import { ApiService } from '../../api/api.service';
import { AuthService } from '../../auth.service';

@Injectable({
  providedIn: 'root'
})
export class PimpinanDanPengurusService {

  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) { }

  token = this.authService.getLocalStorage('access_token')!;

  public addProfilPimpinanDanPengurus(params: ProfilePimpinanDanPengurusInterface): Observable<any> {
    let api_add_profil_pimpinan_dan_pengurus: ApiInterface = {
      method: ApiRouteMethods.post,
      url: ApiRoutes.api_pimpinan_dan_pengurus_route,
      body: {
        nik: params.nik,
        firstName: params.firstName,
        lastName: params.lastName,
        jabatan: params.jabatan,
        kartuIdentitas: params.kartuIdentitas,
        file_id: params.file,
        npwp: params.npwp,
        kartuNpwp: params.kartuNpwp,
        file_id_npwp: params.fileNpwp
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

    return this.apiService.sendRequest(api_add_profil_pimpinan_dan_pengurus);
  }

  public getPimpinanDanPengurus(): Observable<any> {
    let api_get_profil_pimpinan_dan_pengurus: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_pimpinan_dan_pengurus_route.concat('/') + localStorage.getItem('vendor_id'),
      options: {
        headers: {
          Authorization: this.token
        }
      }
    };
    return this.apiService.sendRequest(api_get_profil_pimpinan_dan_pengurus);
  }

  public update(params: ProfilePimpinanDanPengurusInterface, id: string, pegawai_id: string): Observable<any> {
    let api_update_pengurus: ApiInterface = {
      method: ApiRouteMethods.put,
      url: ApiRoutes.api_pimpinan_dan_pengurus_route,
      body: {
        id: id,
        nik: params.nik,
        firstName: params.firstName,
        lastName: params.lastName,
        jabatan: params.jabatan,
        kartuIdentitas: params.kartuIdentitas,
        file_id: params.file,
        pegawai_id: pegawai_id,
        npwp: params.npwp,
        kartuNpwp: params.kartuNpwp,
        file_id_npwp: params.fileNpwp
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
    return this.apiService.sendRequest(api_update_pengurus);
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
    let api_delete_pimpinan_dan_pengurus_info: ApiInterface = {
      method: ApiRouteMethods.delete,
      url: ApiRoutes.api_pegawai_route.concat('/').concat(id),
      options: {
        headers: {
          Authorization: this.token
        }
      }
    };
    return this.apiService.sendRequest(api_delete_pimpinan_dan_pengurus_info);
  }
}
