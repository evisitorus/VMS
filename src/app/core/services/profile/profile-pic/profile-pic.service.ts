import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiInterface} from '../../../interfaces/api-interface';
import {ApiRoutes, ApiRouteMethods} from "../../api/api-routes";
import {ApiService} from "../../api/api.service";
import {ProfilePICInterface} from "../../../interfaces/profile/profile-pic-interface";

@Injectable({
  providedIn: 'root'
})
export class ProfilePICService {

  constructor(
    private apiService: ApiService
  ) {
  }

  getProfilePIC(): Observable<any> {
    let api_profile_pic: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_profile_pic
    }

    return this.apiService.sendRequest(api_profile_pic);
  }

  updateProfilePIC(params: ProfilePICInterface): Observable<any> {
    let api_profile_pic: ApiInterface = {
      method: ApiRouteMethods.put,
      url: ApiRoutes.api_profile_pic,
      body: {
        name: params.name,
        email: params.email,
        phone_number: params.phoneNumber,
        old_password: params.oldPassword,
        new_password: params.newPassword,
        confirm_new_password: params.confirmNewPassword,
      },
      options: {
        headers: {
          "Content-Type": "application/json"
        }
      },
    }

    return this.apiService.sendRequest(api_profile_pic);
  }
}
