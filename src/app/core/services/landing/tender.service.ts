import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiInterface } from '../../interfaces/api-interface';
import { ApiRouteMethods, ApiRoutes } from '../api/api-routes';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class TenderService {

  constructor(private apiService: ApiService) { }

  getDetailTender(id: string): Observable<any>{
    let request: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_tenders_route.concat('/').concat(id),
    };

    return this.apiService.sendRequest(request);
  }

}
