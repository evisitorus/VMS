import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiInterface } from '../interfaces/api-interface';
import { ApiRouteMethods, ApiRoutes } from './api/api-routes';
import { ApiService } from './api/api.service';
@Injectable({
  providedIn: 'root'
})
export class TenderService {

  constructor(private apiService: ApiService) { }

  getListTender(query: string, page: number, per_page: number = 10): Observable<any> {    
    let api_list_tender: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_tenders_route + "?page=" + page + "&per_page=" + per_page + "&" + query
    };
    return this.apiService.sendRequest(api_list_tender);
  }

  getDetailTender(id: string): Observable<any>{
    let request: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_tenders_route.concat('/').concat(id),
    };
    return this.apiService.sendRequest(request);
  }

  getListBUMN(): Observable<any> {
    let request: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_list_bumn_tender,
    };
    return this.apiService.sendRequest(request);
  }

}
