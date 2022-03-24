import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { AuthService } from '../auth.service';
import { ApiRouteMethods, ApiRoutes } from '../api/api-routes';
import { ApiInterface } from '../../interfaces/api-interface';
import { AspekLegalInterface } from '../../interfaces/profile/aspek-legal-interface';
import { Observable } from 'rxjs';

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
    let party_id = this.authService.getLocalStorage('vendor_id')!;
    let route = [party_id,"aspek_legal"];
    
    let api_get_aspek_legal: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_vendor_route  + '/' + route.join('/'),
      options: {
        headers: {
          Authorization: token
        }
      }
    };
    return this.apiService.sendRequest(api_get_aspek_legal);
  }

  public addAspekLegal(params: AspekLegalInterface): Observable<any>{
    let token = this.authService.getLocalStorage('access_token')!;
    let party_id = this.authService.getLocalStorage('vendor_id')!;
    let route = [party_id,"aspek_legal"];
    let body: any = {
      noAktaPendirian:params.noAktaPendirian,
      tanggalTerbitAktaPendirian: params.tanggalTerbitAktaPendirian,
      notarisAktaPendirian: params.notarisAktaPendirian,
      notarisPenggantiAktaPendirian: params.notarisPenggantiAktaPendirian,
      noAktaPerubahan: params.noAktaPerubahan,
      tanggalTerbitAktaPerubahan: params.tanggalTerbitAktaPerubahan,
      notarisAktaPerubahan: params.notarisAktaPerubahan,
      notarisPenggantiAktaPerubahan:params.notarisPenggantiAktaPerubahan,
      noSkPengesahanMenteri: params.noSkPengesahanMenteri,
      tanggalTerbitNoSkPengesahanMenteri: params.tanggalTerbitNoSkPengesahanMenteri,
      npwp: params.npwp,
      tanggalTerbitNpwp: params.tanggalTerbitNpwp,
      noSiup: params.noSiup,
      tanggalTerbitSiup: params.tanggalTerbitSiup,
      noNibTdp: params.noNibTdp,
      isNiBTdpSeumurHidup: params.isNiBTdpSeumurHidup,
      tanggalTerbitNibTdp: params.tanggalTerbitNibTdp,
      tanggalExpireNibTdp: params.tanggalExpireNibTdp,
      noIdpSitu: params.noIdpSitu,
      isIdpSituSeumurHidup: params.isIdpSituSeumurHidup,
      tanggalTerbitIdpSitu: params.tanggalTerbitIdpSitu,
      tanggalExpireIdpSitu: params.tanggalExpireIdpSitu
    }

    let api_add_aspek_legal: ApiInterface = {
      method: ApiRouteMethods.post,
      url: ApiRoutes.api_vendor_route + '/' + route.join('/'),
      body: body,
      options: {
        headers: {
          Authorization: token,
        }
      }
    };

    return this.apiService.sendRequest(api_add_aspek_legal);
  }
}
