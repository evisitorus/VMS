import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiInterface } from '../../interfaces/api-interface';
import { ProfileDocumentInterface } from '../../interfaces/profile-document.interface';
import { ApiRouteMethods, ApiRoutes } from '../api/api-routes';
import { ApiService } from '../api/api.service';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileDocumentService {
  constructor(
    private apiService: ApiService,
    private authService: AuthService
    ) {}

    public get(): Observable<any> {
      let token = this.authService.getLocalStorage('access_token')!;
      let vendor_id = this.authService.getLocalStorage('vendor_id')!;
      let api_get_profile_doc: ApiInterface = {
        method: ApiRouteMethods.get,
        url: ApiRoutes.api_documents_route + "?owner=" + vendor_id,
        options: {
          headers: {
            Authorization: token
          }
        }
      };
      return this.apiService.sendRequest(api_get_profile_doc);
    }


    public getListTipeDokumen(): Observable<any> {
      let token = this.authService.getLocalStorage('access_token')!;
      let vendor_id = this.authService.getLocalStorage('vendor_id')!;
      let api_get_list_tipe_doc: ApiInterface = {
        method: ApiRouteMethods.get,
        url: ApiRoutes.api_vendor_information_route.concat(vendor_id).concat("/document"),
        options: {
          headers: {
            Authorization: token
          }
        }
      };
      return this.apiService.sendRequest(api_get_list_tipe_doc);
    }

    public save(params: ProfileDocumentInterface): Observable<any> {
      let token = this.authService.getLocalStorage('access_token')!;
      let body: any = {
        tipeDokumen:`${params.tipeDokumen}`,
        nomorDokumen: params.nomorDokumen,
        namaDokumen: params.namaDokumen,
        submitDate: params.submitDate,
        file: params.file,
        attachmentFilePath: params.attachmentFilePath,
        owner: "api/vendors/".concat(this.authService.getLocalStorage("vendor_id")!)
      };

      if (params.berlakuSampai) {
        body.berlakuSampai = params.berlakuSampai;
      }

      let api_save_profile_doc: ApiInterface = {
        method: ApiRouteMethods.post,
        url: ApiRoutes.api_documents_route,
        body: body,
        options: {
          headers: {
            Authorization: token
          }
        }
      };
      return this.apiService.sendRequest(api_save_profile_doc);
    }

    public update(params: ProfileDocumentInterface, id: string): Observable<any> {
      let token = this.authService.getLocalStorage('access_token')!;
      let body: any = {
        tipeDokumen:`${params.tipeDokumen}`,
        nomorDokumen: params.nomorDokumen,
        namaDokumen: params.namaDokumen,
        submitDate: params.submitDate,
        file: params.file,
        attachmentFilePath: params.attachmentFilePath,
        owner: "api/vendors/".concat(this.authService.getLocalStorage("vendor_id")!)
      };

      if (params.berlakuSampai) {
        body.berlakuSampai = params.berlakuSampai;
      } else {
        body.berlakuSampai = null
      }

      let api_update_profile_doc: ApiInterface = {
        method: ApiRouteMethods.put,
        url: ApiRoutes.api_documents_route.concat('/').concat(id),
        body: body,
        options: {
          headers: {
            Authorization: token,
          }
        }
      };
      return this.apiService.sendRequest(api_update_profile_doc);
    }

    public delete(id: string): Observable<any> {
      let token = this.authService.getLocalStorage('access_token')!;
      let api_delete_profile_doc: ApiInterface = {
        method: ApiRouteMethods.delete,
        url: ApiRoutes.api_documents_route.concat('/').concat(id),
        options: {
          headers: {
            Authorization: token
          }
        }
      };
      return this.apiService.sendRequest(api_delete_profile_doc);
    }

  }
