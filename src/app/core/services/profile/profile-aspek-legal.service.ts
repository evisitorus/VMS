import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { AuthService } from '../auth.service';
import { ApiRouteMethods, ApiRoutes } from '../api/api-routes';
import { ApiInterface } from '../../interfaces/api-interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileAspekLegalService {

  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) { }

  public getDocType(){
    let token = this.authService.getLocalStorage('access_token')!;

    let api_get_doc_type: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_doc_type,
      options: {
        headers: {
          Authorization: token
        }
      }
    };
    return this.apiService.sendRequest(api_get_doc_type);
  }

  public getAspekLegal(){
    let token = this.authService.getLocalStorage('access_token')!;
    let party_id = this.authService.getLocalStorage('party_id')!;
    let route = [party_id,"aspek_legal"]
    
    let api_get_aspek_legal: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_vendor_route + route.join('/'),
      options: {
        headers: {
          Authorization: token
        }
      }
    };
    return this.apiService.sendRequest(api_get_aspek_legal);
  }
}
