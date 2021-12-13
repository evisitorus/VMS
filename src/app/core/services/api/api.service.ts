import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiInterface } from '../../interfaces/api-interface';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  sendRequest(params: ApiInterface): Observable<any> {
    switch (params.method) {
      case 'GET':
        return this.get(params);
      case 'POST':
        return this.post(params);
      case 'PUT':
        return this.put(params);
      case 'DELETE':
        return this.delete(params);
      default:
        return this.get(params)
    }
  }

  get(params: ApiInterface) {
    return this.http.get(params.url, params.options);
  }

  post(params: ApiInterface) {
    return this.http.post(params.url, params.body, params.options);
  }

  put(params: ApiInterface) {
    return this.http.put(params.url, params.body, params.options)
  }

  delete(params: ApiInterface) {
    return this.http.delete(params.url, params.options)
  }

}
