import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiInterface } from '../interfaces/api-interface';
import { ApiRoutes,ApiRouteMethods } from './api/api-routes';
import { ApiService } from './api/api.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileDashboardService {

  constructor(
    private apiService:ApiService,
    private authService: AuthService
  ) { }

  token = this.authService.getLocalStorage('access_token')!;
  vendor_id = this.authService.getLocalStorage('vendor_id')!;
  user_id = this.authService.getLocalStorage('person_id')!;

  getVendorData(): Observable<any> {
    let api_dashboard_vendor: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_vendor_information_route,
      options : {
        headers: {
          Authorization: this.token
        }
      }
    }

    return this.apiService.sendRequest(api_dashboard_vendor);
  }

  getVendor(): Observable<any> {
    let api_get_vendor: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_get_vendor + "/" + this.vendor_id,
      options: {
        headers: {
          Authorization: this.token
        }
      }
    }

    return this.apiService.sendRequest(api_get_vendor);
  }
 
  getTenders(): Observable<any> {
    let api_get_vendor_tenders: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_get_vendor + "/" + this.vendor_id + "/tenders",
      options: {
        headers: {
          Authorization: this.token,
          Accept: "application/json"
        }
      }
    }
    return this.apiService.sendRequest(api_get_vendor_tenders);
  }

  getVerificationStatus(): Observable<any> {
    let api_get_vendor_verification_status: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_get_vendor + "/" + this.vendor_id + "/verification_status",
      options: {
        headers: {
          Authorization: this.token,
        }
      }
    }
    return this.apiService.sendRequest(api_get_vendor_verification_status);
  }

  getVerificationData(): Observable<any> {
    let api_get_vendor_verification_data: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_get_vendor + "/" + this.vendor_id + "/verification",
      options: {
        headers: {
          Authorization: this.token,
        }
      }
    }
    return this.apiService.sendRequest(api_get_vendor_verification_data);
  }

}
