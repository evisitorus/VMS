import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiInterface } from '../../interfaces/api-interface';
import { ProfileKeuanganInterface, ProfileKeuanganBankInterface, ProfileKeuanganModalDasarInterface, ProfileKeuanganNeracaInterface, ProfileKeuanganSPTInterface } from '../../interfaces/profile-keuangan.interface';
import { ApiRouteMethods, ApiRoutes } from '../api/api-routes';
import { ApiService } from '../api/api.service';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileKeuanganService {

  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) { }

  public fetchDataNeraca(): Observable<any> {
    let token = this.authService.getLocalStorage('access_token')!;
    let vendor_id = this.authService.getLocalStorage('vendor_id')!;
    let api_get_neraca: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_neraca_route + "?vendor=" + vendor_id,
      options: {
        headers: {
          Authorization: token
        }
      }
    };
    return this.apiService.sendRequest(api_get_neraca);
  }

  public fetchDataSPT(): Observable<any> {
    let token = this.authService.getLocalStorage('access_token')!;
    let vendor_id = this.authService.getLocalStorage('vendor_id')!;
    let api_get_spt: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_spt_route + "?vendor=" + vendor_id,
      options: {
        headers: {
          Authorization: token
        }
      }
    };
    return this.apiService.sendRequest(api_get_spt);
  }

  public fetchDataKeuangan(): Observable<any> {
    let token = this.authService.getLocalStorage('access_token')!;
    let vendor_id = this.authService.getLocalStorage('vendor_id')!;
    let api_get_data_keuangan: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_vendor_route + "/" + vendor_id + "/keuangan",
      options: {
        headers: {
          Authorization: token
        }
      }
    };
    return this.apiService.sendRequest(api_get_data_keuangan);
  }

  public fetchDataKeuanganBank(): Observable<any> {
    let token = this.authService.getLocalStorage('access_token')!;
    let vendor_id = this.authService.getLocalStorage('vendor_id')!;
    let api_get_data_keuangan: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_vendor_route + "/" + vendor_id + "/bank",
      options: {
        headers: {
          Authorization: token
        }
      }
    };
    return this.apiService.sendRequest(api_get_data_keuangan);
  }

  public fetchDataKeuanganModalDasar(): Observable<any> {
    let token = this.authService.getLocalStorage('access_token')!;
    let vendor_id = this.authService.getLocalStorage('vendor_id')!;
    let api_get_data_keuangan: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_vendor_route + "/" + vendor_id + "/modal_dasar",
      options: {
        headers: {
          Authorization: token
        }
      }
    };
    return this.apiService.sendRequest(api_get_data_keuangan);
  }

  public fetchListBank(): Observable<any> {
    let token = this.authService.getLocalStorage('access_token')!;
    let vendor_id = this.authService.getLocalStorage('vendor_id')!;
    let api_get_list_bank: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_list_bank_route,
      options: {
        headers: {
          Authorization: token
        }
      }
    };
    return this.apiService.sendRequest(api_get_list_bank);
  }

  public saveDataNeraca(params: ProfileKeuanganNeracaInterface): Observable<any> {
    let token = this.authService.getLocalStorage('access_token')!;
    let api_save_neraca: ApiInterface = {
      method: ApiRouteMethods.post,
      url: ApiRoutes.api_neraca_route,
      body: {
        year: params.tahun,
        aktiva: params.aktiva,
        pasiva: params.pasiva,
        equitas: params.equitas,
        omzetBersih: params.omzet,
        vendor: "/api/vendors/".concat(this.authService.getLocalStorage('vendor_id')!)
      },
      options: {
        headers: {
          Authorization: token
        }
      }
    };
    return this.apiService.sendRequest(api_save_neraca);
  }

  public saveDataSPT(params: ProfileKeuanganSPTInterface): Observable<any> {
    let token = this.authService.getLocalStorage('access_token')!;
    let api_save_spt: ApiInterface = {
      method: ApiRouteMethods.post,
      url: ApiRoutes.api_spt_route,
      body: {
        number: params.nomorDokumen,
        year: params.tahunSPT,
        attachmentFilePath: params.filename,
        submitDate: params.submitDate,
        file: params.lampiran,
        vendor: "/api/vendors/".concat(this.authService.getLocalStorage('vendor_id')!)
      },
      options: {
        headers: {
          Authorization: token
        }
      }
    };
    return this.apiService.sendRequest(api_save_spt);
  }

  public updateDataNeraca(params: ProfileKeuanganNeracaInterface, id: string): Observable<any> {
    let token = this.authService.getLocalStorage('access_token')!;
    let api_update_neraca: ApiInterface = {
      method: ApiRouteMethods.put,
      url: ApiRoutes.api_neraca_route.concat("/").concat(id),
      body: {
        year: params.tahun,
        aktiva: params.aktiva,
        pasiva: params.pasiva,
        equitas: params.equitas,
        omzetBersih: params.omzet,
        vendor: "/api/vendors/".concat(this.authService.getLocalStorage('vendor_id')!)
      },
      options: {
        headers: {
          Authorization: token
        }
      }
    };
    return this.apiService.sendRequest(api_update_neraca);
  }

  public updateDataSPT(params: ProfileKeuanganSPTInterface, id: string): Observable<any> {
    let token = this.authService.getLocalStorage('access_token')!;
    let api_save_spt: ApiInterface = {
      method: ApiRouteMethods.put,
      url: ApiRoutes.api_spt_route.concat("/").concat(id),
      body: {
        number: params.nomorDokumen,
        year: params.tahunSPT,
        attachmentFilePath: params.filename,
        submitDate: params.submitDate,
        file: params.lampiran,
        vendor: "/api/vendors/".concat(this.authService.getLocalStorage('vendor_id')!)
      },
      options: {
        headers: {
          Authorization: token
        }
      }
    };
    return this.apiService.sendRequest(api_save_spt);
  }

  public deleteDataNeraca(id: string): Observable<any> {
    let token = this.authService.getLocalStorage('access_token')!;
    let api_delete_neraca: ApiInterface = {
      method: ApiRouteMethods.delete,
      url: ApiRoutes.api_neraca_route.concat('/').concat(id),
      options: {
        headers: {
          Authorization: token
        }
      }
    };
    return this.apiService.sendRequest(api_delete_neraca);
  }

  public deleteDataSPT(id: string): Observable<any> {
    let token = this.authService.getLocalStorage('access_token')!;
    let api_delete_spt: ApiInterface = {
      method: ApiRouteMethods.delete,
      url: ApiRoutes.api_spt_route.concat('/').concat(id),
      options: {
        headers: {
          Authorization: token
        }
      }
    };
    return this.apiService.sendRequest(api_delete_spt);
  }

  public postDataKeuanganBank(params: ProfileKeuanganBankInterface): Observable<any> {
    let token = this.authService.getLocalStorage('access_token')!;
    let vendorId = this.authService.getLocalStorage('vendor_id')!;
    let api_save_keuangan: ApiInterface = {
      method: ApiRouteMethods.post,
      url: ApiRoutes.api_vendor_route + '/' + vendorId + '/bank',
      body: {
        namaBank: params.namaBank,
        cabang: params.cabang,
        nomorRekening: params.nomorRekening,
        namaPemilikRekening: params.namaPemilikRekening
      },
      options: {
        headers: {
          Authorization: token
        }
      }
    };
    return this.apiService.sendRequest(api_save_keuangan);
  }

  public postDataKeuanganModalDasar(params: ProfileKeuanganModalDasarInterface): Observable<any> {
    let token = this.authService.getLocalStorage('access_token')!;
    let vendorId = this.authService.getLocalStorage('vendor_id')!;
    let api_save_keuangan: ApiInterface = {
      method: ApiRouteMethods.post,
      url: ApiRoutes.api_vendor_route + '/' + vendorId + '/modal_dasar',
      body: {
        modalDasar: params.modalDasar,
        modalDitempatkan: params.modalDitempatkan
      },
      options: {
        headers: {
          Authorization: token
        }
      }
    };
    return this.apiService.sendRequest(api_save_keuangan);
  }

  public postDataKeuangan(params: ProfileKeuanganInterface): Observable<any> {
    let token = this.authService.getLocalStorage('access_token')!;
    let vendorId = this.authService.getLocalStorage('vendor_id')!;
    let api_save_keuangan: ApiInterface = {
      method: ApiRouteMethods.post,
      url: ApiRoutes.api_vendor_route + '/' + vendorId + '/keuangan',
      body: {
        namaBank: params.namaBank,
        cabang: params.cabang,
        nomorRekening: params.nomorRekening,
        namaPemilikRekening: params.namaPemilikRekening,
        modalDasar: params.modalDasar,
        modalDitempatkan: params.modalDitempatkan
      },
      options: {
        headers: {
          Authorization: token
        }
      }
    };
    return this.apiService.sendRequest(api_save_keuangan);
  }

}
