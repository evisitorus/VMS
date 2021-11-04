import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiInterface } from '../interfaces/api-interface';
import { PekerjaanInterface } from '../interfaces/pekerjaan-interface';
import { ApiRouteMethods, ApiRoutes } from './api/api-routes';
import { ApiService } from './api/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private apiService: ApiService) { }

  pekerjaan(params: PekerjaanInterface): Observable<any> {    
    let api_pekerjaan: ApiInterface = {
      method: ApiRouteMethods.post,
      url: ApiRoutes.api_add_pengalaman_kerja,
      body: {
        email: params.email,
        namaPekerjaan: params.namaPekerjaan,
        pemberiPekerjaan: params.pemberiPekerjaan,
        nilaiPekerjaan: params.nilaiPekerjaan,
        tahunPekerjaan: params.tahunPekerjaan,
        buktiPekerjaanFilePath: params.buktiPekerjaanFilePath
      }
    };

    return this.apiService.sendRequest(api_pekerjaan);
  }
}
