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

  public get(): Observable<any> {
    let token = this.authService.getLocalStorage('access_token')!;
    let vendor_id = this.authService.getLocalStorage('vendor_id')!;
    let api_get_profile_asset: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_assets_route + "?owner=" + vendor_id,
      options: {
        headers: {
          Authorization: token
        }
      }
    };
    return this.apiService.sendRequest(api_get_profile_asset);
  }

  public save(params: ProfileAssetInterface): Observable<any> {
    let token = this.authService.getLocalStorage('access_token')!;
    let api_save_profile_asset: ApiInterface = {
      method: ApiRouteMethods.post,
      url: ApiRoutes.api_assets_route,
      body: {
        name: params.namaAsset,
        jumlah: params.jumlah,
        tahunPembuatan: params.tahunPembuatan,
        owner: "api/vendors/".concat(this.authService.getLocalStorage("vendor_id")!)
      },
      options: {
        headers: {
          Authorization: token
        }
      }
    };
    return this.apiService.sendRequest(api_save_profile_asset);
  }

  public update(params: ProfileAssetInterface, id: string): Observable<any> {
    let token = this.authService.getLocalStorage('access_token')!;
    let api_update_profile_asset: ApiInterface = {
      method: ApiRouteMethods.put,
      url: ApiRoutes.api_assets_route.concat("/").concat(id),
      body: {
        name: params.namaAsset,
        jumlah: params.jumlah,
        tahunPembuatan: params.tahunPembuatan,
        owner: "api/vendors/".concat(this.authService.getLocalStorage("vendor_id")!)
      },
      options: {
        headers: {
          Authorization: token
        }
      }
    };
    return this.apiService.sendRequest(api_update_profile_asset);
  }

  public delete(id: string): Observable<any> {
    let token = this.authService.getLocalStorage('access_token')!;
    let api_delete_profile_asset: ApiInterface = {
      method: ApiRouteMethods.delete,
      url: ApiRoutes.api_assets_route.concat("/").concat(id),
      options: {
        headers: {
          Authorization: token
        }
      }
    };
    return this.apiService.sendRequest(api_delete_profile_asset);
  }

}
