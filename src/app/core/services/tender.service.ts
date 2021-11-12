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

  getListTender(): Observable<any> {    
    let api_list_tender: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_list_tender,
      options: {
        headers: {
          "X-App-Id" : "0MvsSnFzGmEXsl7VGcUkB3PhYScLwFwX",
          "X-App-Secret" : "yT7FOaNiNzHU2SCK2GOWjObBS86dNpBQWXii9bRX",
          "Access-Control-Allow-Origin" : "*"
        }
      }
    };

    console.log(api_list_tender);
    return this.apiService.sendRequest(api_list_tender);
  }
}
