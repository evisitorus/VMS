import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiInterface } from '../interfaces/api-interface';
import { ApiRouteMethods, ApiRoutes } from './api/api-routes';
import { ApiService } from './api/api.service';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class TenderService {

  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) { }
  
  token = this.authService.getLocalStorage('access_token')!;

  getListTender(query: string, page: number, per_page: number = 10): Observable<any> {    
    let api_list_tender: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_tenders_route + "?page=" + page + "&per_page=" + per_page + "&" + query,
      options: {
        headers: {
          Authorization: this.token
        }
      },
    };
    return this.apiService.sendRequest(api_list_tender);
  }

  getDetailTender(id: string): Observable<any>{
    let request: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_tenders_route.concat('/').concat(id),
      options: {
        headers: {
          Authorization: this.token
        }
      },
    };
    return this.apiService.sendRequest(request);
  }

}
