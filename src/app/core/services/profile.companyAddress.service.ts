import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiInterface } from '../interfaces/api-interface';
import { AddCompanyAddressInterface } from '../interfaces/add-companyAddress-interface';
import { ApiRouteMethods, ApiRoutes } from './api/api-routes';
import { ApiService } from './api/api.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyAddressService {

  constructor(
    private apiService: ApiService,
    private authService: AuthService
    ) { }

  addCompanyAddress(params: AddCompanyAddressInterface): Observable<any> {
    let api_add_companyAddress: ApiInterface = {
      method: ApiRouteMethods.post,
      url: ApiRoutes.api_add_companyAddress,
      body: {
        namaAlamat: params.namaAlamat,
        alamat: params.alamat,
        provinsi: params.provinsi,
        kecamatan: params.kecamatan,
        kelurahan:params.kelurahan,
        kodePos: params.kodePos,
        geoLocation: params.geoLocation
      }
    };
    
    return this.apiService.sendRequest(api_add_companyAddress);
  }

  /*vendor_id = this.authService.getLocalStorage('vendor_id')!;
  getCompanyAddress(): Observable<any> {
    let api_get_company_address: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_get_company_address_route,
      options: {
        params: {
          fromParty : this.vendor_id
        }
      }
    };

    return this.apiService.sendRequest(api_get_company_address);
  } */

}
