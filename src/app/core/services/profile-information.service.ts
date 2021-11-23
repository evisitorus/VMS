import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiInterface } from '../interfaces/api-interface';
import { ApiRouteMethods, ApiRoutes } from './api/api-routes';
import { ApiService } from './api/api.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileInformationService {

  constructor(
    private apiService:ApiService,
    private authService: AuthService
  ) { }

  token = this.authService.getLocalStorage('access_token')!;

  // uploadImg(img: String): Observable<any> {
    
  //   let api_profile_information: ApiInterface = {
  //     method: ApiRouteMethods.post,
  //     // url: ApiRoutes.api_profile_information,
  //     url:"",
  //     body : {
  //       img: img
  //     },
  //     options : {
  //       headers: {
  //         Authorization: this.token
  //       }
  //     }
  //   }
  //   return this.apiService.sendRequest(api_profile_information);
  // }

  getJenisPenyediaUsaha(): Observable<any>{
    let api_jenis_penyedia_usaha: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_penyedia_usaha_route,
      // options : {
      //   headers: {
      //     Authorization: this.token
      //   }
      // }
    }
    return this.apiService.sendRequest(api_jenis_penyedia_usaha);

  }

  getVendorInformation(): Observable<any>{
    let api_vendor_information: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_vendor_information_route,
      // options : {
      //   headers: {
      //     Authorization: this.token
      //   }
      // }
    }
    return this.apiService.sendRequest(api_vendor_information);

  }
}
