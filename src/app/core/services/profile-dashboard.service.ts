import { Injectable } from '@angular/core';
import { ApiInterface } from '../interfaces/api-interface';
import { ApiRoutes,ApiRouteMethods } from './api/api-routes';
import { ApiService } from './api/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileDashboardService {

  constructor(
    private apiService:ApiService
  ) { }

  getVendorData() {
    let api_dashboard_vendor: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_dashboard_vendor
    }

    return this.apiService.sendRequest(api_dashboard_vendor);
  }
  
}
