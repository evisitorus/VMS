import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { AuthService } from '../auth.service';
import { ApiRouteMethods, ApiRoutes } from '../api/api-routes';
import { ApiInterface } from '../../interfaces/api-interface';
import { AspekLegalInterface } from '../../interfaces/profile/aspek-legal-interface';
import { Observable } from 'rxjs';
import { ProfileDocumentInterface } from '../../interfaces/profile-document.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileAspekLegalService {

  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) { }

  public getDocType() {
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

  public getAspekLegal() {
    let token = this.authService.getLocalStorage('access_token')!;
    let party_id = this.authService.getLocalStorage('vendor_id')!;
    let route = [party_id, "aspek_legal"];

    let api_get_aspek_legal: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_vendor_route + '/' + route.join('/'),
      options: {
        headers: {
          Authorization: token
        }
      }
    };
    return this.apiService.sendRequest(api_get_aspek_legal);
  }

  public addAspekLegal(params: AspekLegalInterface): Observable<any> {
    let token = this.authService.getLocalStorage('access_token')!;
    let party_id = this.authService.getLocalStorage('vendor_id')!;
    let route = [party_id, "aspek_legal"];
    let body: any = {
      noAktaPendirian: params.noAktaPendirian,
      tanggalTerbitAktaPendirian: params.tanggalTerbitAktaPendirian,
      notarisAktaPendirian: params.notarisAktaPendirian,
      notarisPenggantiAktaPendirian: params.notarisPenggantiAktaPendirian,
      noAktaPerubahan: params.noAktaPerubahan,
      tanggalTerbitAktaPerubahan: params.tanggalTerbitAktaPerubahan,
      notarisAktaPerubahan: params.notarisAktaPerubahan,
      notarisPenggantiAktaPerubahan: params.notarisPenggantiAktaPerubahan,
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

  public addDokLegal(params: any): Observable<any> {
    let token = this.authService.getLocalStorage('access_token')!;
    let vendor_id = this.authService.getLocalStorage('vendor_id')!;

    let body: any = {
      namaDokumen: params.namaDokumen,
      file: params.file,
      attachmentFilePath: params.attachmentFilePath,
      owner: "/api/vendors/" + vendor_id,
      documentType: params.documentType,
      berlakuSampai: params.berlakuSampai ? params.berlakuSampai : null,
      submitDate: params.submitDate ? params.submitDate : null
    };

    let api_add_dok_legal: ApiInterface = {
      method: ApiRouteMethods.post,
      url: ApiRoutes.api_doc_legal,
      body: body,
      options: {
        headers: {
          Authorization: token,
        }
      }
    };

    return this.apiService.sendRequest(api_add_dok_legal);
  }

  public updateDokLegal(params: any): Observable<any> {
    let token = this.authService.getLocalStorage('access_token')!;
    let vendor_id = this.authService.getLocalStorage('vendor_id')!;

    let body: any = {
      namaDokumen: params.namaDokumen,
      file: params.file,
      attachmentFilePath: params.attachmentFilePath,
      owner: "/api/vendors/" + vendor_id,
      documentType: params.documentType,
      tanggalTerbit: params.tanggalTerbit ? params.tanggalTerbit : null,
      berlakuSampai: params.berlakuSampai ? params.berlakuSampai : null,
      submitDate: params.submitDate ? params.submitDate : null
    };

    let api_add_dok_legal: ApiInterface = {
      method: ApiRouteMethods.put,
      url: ApiRoutes.api_doc_legal.concat('/',params.id),
      body: body,
      options: {
        headers: {
          Authorization: token,
        }
      }
    };

    return this.apiService.sendRequest(api_add_dok_legal);
  }

  public delete(id: string): Observable<any> {
    let token = this.authService.getLocalStorage('access_token')!;
    let api_delete_doc: ApiInterface = {
      method: ApiRouteMethods.delete,
      url: ApiRoutes.api_doc_legal.concat('/').concat(id),
      options: {
        headers: {
          Authorization: token
        }
      }
    };
    return this.apiService.sendRequest(api_delete_doc);
  }
}
