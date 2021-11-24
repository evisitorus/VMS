import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiInterface } from '../interfaces/api-interface';
import { ApiRouteMethods, ApiRoutes } from './api/api-routes';
import { ApiService } from './api/api.service';
import { AuthService } from './auth.service';
import { environment as env} from "src/environments/environment";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private http: HttpClient
  ) { }

  public upload(file: any): Observable<any> {
    let token = this.authService.getLocalStorage('access_token')!;

    let form = new FormData();
    form.append("file", file);
    
    let api_upload_file: ApiInterface = {
      method: ApiRouteMethods.post,
      url: ApiRoutes.api_media_object_route,
      body: form,
      options: {
        headers: {
          Authorization: token,
          Accept: "*/*"
        }
      }
    };
    return this.apiService.sendRequest(api_upload_file);
  }

  public download(id: string): Observable<Object> {
    let token = this.authService.getLocalStorage('access_token')!;
    let api_upload_file: ApiInterface = {
      method: ApiRouteMethods.get,
      url: env.api_base_path.concat(id).concat('/file'),
      options: {
        headers: {
          Authorization: token,
        },
      }
    };
    return this.apiService.sendRequest(api_upload_file);
  }
  
}
