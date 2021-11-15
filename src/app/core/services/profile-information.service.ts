import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiInterface } from '../interfaces/api-interface';
import { ApiRouteMethods, ApiRoutes } from './api/api-routes';
import { ApiService } from './api/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileInformationService {

  constructor(
    private apiService:ApiService
  ) { }

  uploadImg(img: String): Observable<any> {
    let api_profile_information: ApiInterface = {
      method: ApiRouteMethods.post,
      url: ApiRoutes.api_profile_information,
      body : {
        img: img
      }
    }
    return this.apiService.sendRequest(api_profile_information);
  }
}
