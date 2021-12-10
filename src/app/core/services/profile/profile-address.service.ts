import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiInterface } from '../../interfaces/api-interface';
import { ProfileAddressInterface } from '../../interfaces/profile-address-interface';
import { ApiRouteMethods, ApiRoutes } from '../api/api-routes';
import { ApiService } from '../api/api.service';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileAddressService {

  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) { }

    public fetchData(): Observable<any> {
      let token = this.authService.getLocalStorage('access_token')!;
      let vendor_id = this.authService.getLocalStorage('vendor_id')!;
      let api_get_address: ApiInterface = {
        method: ApiRouteMethods.get,
        url: ApiRoutes.api_vendor_route + "/" + vendor_id + "/address",
        options: {
          headers: {
            Authorization: token
          }
        }
      };
      return this.apiService.sendRequest(api_get_address);
    }

    public save(params: ProfileAddressInterface): Observable<any> {
      let token = this.authService.getLocalStorage('access_token')!;
      let vendor_id = this.authService.getLocalStorage('vendor_id')!;
      let api_save_address: ApiInterface = {
        method: ApiRouteMethods.post,
        url: ApiRoutes.api_vendor_route + "/" + vendor_id + "/address",
        body: {
          address1: params.alamat,
          address2: params.namaAlamat,
          province: params.provinsi,
          city: params.kota,
          district: params.kecamatan,
          village: params.kelurahan,
          postalCode: params.kodepos
        },
        options: {
          headers: {
            Authorization: token
          }
        }
      };
      return this.apiService.sendRequest(api_save_address);
    }

    public update(id: string, params: ProfileAddressInterface): Observable<any> {
      let token = this.authService.getLocalStorage('access_token')!;
      let api_update_address: ApiInterface = {
        method: ApiRouteMethods.put,
        url: ApiRoutes.api_address_route + "/" + id,
        body: {
          address1: params.alamat,
          address2: params.namaAlamat,
          province: "api/geo_locations/" + params.provinsi,
          city: "api/geo_locations/" + params.kota,
          district: "api/geo_locations/" + params.kecamatan,
          village: "api/villages/" + params.kelurahan,
        },
        options: {
          headers: {
            Authorization: token
          }
        }
      };
      return this.apiService.sendRequest(api_update_address);
    }

    public delete(id: string): Observable<any> {
      let token = this.authService.getLocalStorage('access_token')!;
      let api_delete_address: ApiInterface = {
        method: ApiRouteMethods.delete,
        url: ApiRoutes.api_address_route + "/" + id,
        options: {
          headers: {
            Authorization: token
          }
        }
      };
      return this.apiService.sendRequest(api_delete_address);
    }

}
