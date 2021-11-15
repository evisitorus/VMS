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

  uploadImg(img: String): Observable<any> {
    let token = this.authService.getLocalStorage('access_token')!;
    let api_profile_information: ApiInterface = {
      method: ApiRouteMethods.post,
      // url: ApiRoutes.api_profile_information,
      url:"",
      body : {
        img: img
      },
      options : {
        headers: {
          Authorization: token
        }
      }
    }
    return this.apiService.sendRequest(api_profile_information);
  }
}
