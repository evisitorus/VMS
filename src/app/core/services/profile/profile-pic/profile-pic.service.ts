import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiInterface} from '../../../interfaces/api-interface';
import {ApiRoutes, ApiRouteMethods} from "../../api/api-routes";
import {ApiService} from "../../api/api.service";
import {ProfilePICInterface} from "../../../interfaces/profile/profile-pic-interface";
import {AuthService} from "../../auth.service";
import {UserFileInterface} from "../../../interfaces/profile/user-file-interface";

@Injectable({
  providedIn: 'root'
})
export class ProfilePICService {

  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) {
  }

  getProfilePIC(personID: string): Observable<any> {
    let person_id = this.authService.getLocalStorage('person_id')!;
    let api_profile_pic: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_profile_pic.concat("/").concat(person_id),
    }

    return this.apiService.sendRequest(api_profile_pic);
  }

  updateProfilePIC(params: ProfilePICInterface, personID: string): Observable<any> {
    let person_id = this.authService.getLocalStorage('person_id')!;
    let api_profile_pic: ApiInterface = {
      method: ApiRouteMethods.put,
      url: ApiRoutes.api_profile_pic.concat("/").concat(person_id),
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

  updateUserFile(userFileParam: UserFileInterface, personID: string): Observable<any> {
    let person_id = this.authService.getLocalStorage('person_id')!;
    let api_profile_pic: ApiInterface = {
      method: ApiRouteMethods.put,
      url: ApiRoutes.api_profile_pic.concat("/").concat(person_id).concat("/media"),
      body: {
        file_id_sting: userFileParam.fileID,
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
