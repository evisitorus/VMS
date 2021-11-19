import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiInterface } from '../../interfaces/api-interface';
import { ProfileAssetInterface } from '../../interfaces/profile-asset.interface';
import { ApiRouteMethods, ApiRoutes } from '../api/api-routes';
import { ApiService } from '../api/api.service';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileAssetService {

  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) { }

  public getDataAsset() {
    let token = this.authService.getLocalStorage('access_token')!;
    let api_get_profile_asset: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_assets_route,
      options: {
        headers: {
          Authorization: token
        }
      }
    };
    return this.apiService.sendRequest(api_get_profile_asset);
  }

  public saveProfileAsset(params: ProfileAssetInterface): Observable<any> {
    let token = this.authService.getLocalStorage('access_token')!;
    let api_save_profile_asset: ApiInterface = {
      method: ApiRouteMethods.post,
      url: ApiRoutes.api_assets_route,
      body: {
        name: params.namaAsset,
        jumlah: params.jumlah,
        tahun_pembuatan: params.tahunPembuatan,
        owner_id: "/api/vendor/".concat(this.authService.getLocalStorage("vendor_id")!)
      },
      options: {
        headers: {
          Authorization: token
        }
      }
    };
    return this.apiService.sendRequest(api_save_profile_asset);
  }

}
