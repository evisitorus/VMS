import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiInterface } from '../../interfaces/api-interface';
import { ProfileKeuanganNeracaInterface, ProfileKeuanganSPTInterface } from '../../interfaces/profile-keuangan.interface';
import { ApiRouteMethods, ApiRoutes } from '../api/api-routes';
import { ApiService } from '../api/api.service';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileKeuanganService {

  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) { }

  public fetchDataNeraca(): Observable<any> {
    let token = this.authService.getLocalStorage('access_token')!;
    let api_get_neraca: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_neraca_route,
      options: {
        headers: {
          Authorization: token
        }
      }
    };
    return this.apiService.sendRequest(api_get_neraca);
  }

  public fetchDataSPT(): Observable<any> {
    let token = this.authService.getLocalStorage('access_token')!;
    let api_get_spt: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_spt_route,
      options: {
        headers: {
          Authorization: token
        }
      }
    };
    return this.apiService.sendRequest(api_get_spt);
  }

  public saveDataNeraca(params: ProfileKeuanganNeracaInterface): Observable<any> {
    let token = this.authService.getLocalStorage('access_token')!;
    let api_save_neraca: ApiInterface = {
      method: ApiRouteMethods.post,
      url: ApiRoutes.api_neraca_route,
      body: {
        year: params.tahun,
        aktiva: params.aktiva,
        pasiva: params.pasiva,
        equitas: params.equitas,
        omzetBersih: params.omzet,
        vendor: "/api/vendors/".concat(this.authService.getLocalStorage('vendor_id')!)
      },
      options: {
        headers: {
          Authorization: token
        }
      }
    };
    return this.apiService.sendRequest(api_save_neraca);
  }

  public saveDataSPT(params: ProfileKeuanganSPTInterface): Observable<any> {
    let token = this.authService.getLocalStorage('access_token')!;
    let api_save_spt: ApiInterface = {
      method: ApiRouteMethods.post,
      url: ApiRoutes.api_spt_route,
      body: {
        number: params.nomorDokumen,
        year: params.tahunSPT,
        attachmentFilePath: params.filename,
        submitDate: params.submitDate,
        file: params.lampiran,
        vendor: "/api/vendors/".concat(this.authService.getLocalStorage('vendor_id')!)
      },
      options: {
        headers: {
          Authorization: token
        }
      }
    };
    return this.apiService.sendRequest(api_save_spt);
  }

  public deleteDataNeraca(id: string): Observable<any> {
    let token = this.authService.getLocalStorage('access_token')!;
    let api_delete_neraca: ApiInterface = {
      method: ApiRouteMethods.delete,
      url: ApiRoutes.api_neraca_route.concat('/').concat(id),
      options: {
        headers: {
          Authorization: token
        }
      }
    };
    return this.apiService.sendRequest(api_delete_neraca);
  }

  public deleteDataSPT(id: string): Observable<any> {
    let token = this.authService.getLocalStorage('access_token')!;
    let api_delete_spt: ApiInterface = {
      method: ApiRouteMethods.delete,
      url: ApiRoutes.api_spt_route.concat('/').concat(id),
      options: {
        headers: {
          Authorization: token
        }
      }
    };
    return this.apiService.sendRequest(api_delete_spt);
  }

}
