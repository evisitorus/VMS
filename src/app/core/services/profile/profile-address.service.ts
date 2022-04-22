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
          postalCode: params.kodepos,
          phone_number: params.noTelepon,
          phone_number_area_code: params.noTelponKodeArea,
        },
        options: {
          headers: {
            Authorization: token
          }
        }
      };
      return this.apiService.sendRequest(api_save_address);
    }

    public update(id: string, params: ProfileAddressInterface, telcoId: string): Observable<any> {
      let token = this.authService.getLocalStorage('access_token')!;
      let vendor_id = this.authService.getLocalStorage('vendor_id')!;
      let api_update_address: ApiInterface = {
        method: ApiRouteMethods.put,
        url: ApiRoutes.api_vendor_route + "/" + vendor_id + "/address" + "/" + id + '/phone/' + telcoId,
        body: {
          address1: params.alamat,
          address2: params.namaAlamat,
          province: params.provinsi,
          city: params.kota,
          district: params.kecamatan,
          village: params.kelurahan,
          postalCode: params.kodepos,
          phone_number: params.noTelepon,
          phone_number_area_code: params.noTelponKodeArea,
        },
        options: {
          headers: {
            Authorization: token
          }
        }
      };
      return this.apiService.sendRequest(api_update_address);
    }

    public delete(id: string, telcoId: string): Observable<any> {
      let token = this.authService.getLocalStorage('access_token')!;
      let vendor_id = this.authService.getLocalStorage('vendor_id')!;
      let api_delete_address: ApiInterface = {
        method: ApiRouteMethods.delete,
        url: ApiRoutes.api_vendor_route + "/" + vendor_id + "/address/" + id + '/phone/' + telcoId,
        options: {
          headers: {
            Authorization: token
          }
        }
      };
      return this.apiService.sendRequest(api_delete_address);
    }

}
