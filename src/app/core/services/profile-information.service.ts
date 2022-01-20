import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiInterface} from '../interfaces/api-interface';
import {ApiRouteMethods, ApiRoutes} from './api/api-routes';
import {ApiService} from './api/api.service';
import {AuthService} from './auth.service';
import {ProfileInformationInterface} from "../interfaces/profile/profile-information-interface";
import { ProfileInterface } from '../interfaces/profile-interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileInformationService {

  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) {
  }

  token = this.authService.getLocalStorage('access_token')!;
  vendor_id = this.authService.getLocalStorage('vendor_id')!;

  getJenisPenyediaUsaha(): Observable<any>{
    let api_jenis_penyedia_usaha: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_penyedia_usaha_route,
      options : {
        headers: {
          Authorization: this.token
        }
      }
    }
    return this.apiService.sendRequest(api_jenis_penyedia_usaha);
  }

  getJenisKegiatanUsaha(): Observable<any> {
    let api_jenis_kegiatan_usaha: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_jenis_kegiatan_usaha_route,
      options : {
        headers: {
          Authorization: this.token
        }
      }
    }
    return this.apiService.sendRequest(api_jenis_kegiatan_usaha);
  }


  getTipeVendor(): Observable<any>{
    let api_tipe_vendor: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_tipe_vendor_route,
      options : {
        headers: {
          Authorization: this.token
        }
      }
    }
    return this.apiService.sendRequest(api_tipe_vendor);

  }

  getJenisVendor(): Observable<any> {
    let api_jenis_vendor: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_jenis_vendor_route,
      options: {
        headers: {
          Authorization: this.token
        }
      }
    };
    return this.apiService.sendRequest(api_jenis_vendor);
  }

  getVendorInformation(): Observable<any>{
    let api_vendor_information: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_vendor_information_route + localStorage.getItem('vendor_id') + '/information',
      options : {
        headers: {
          Authorization: this.token
        }
      }
    }
    return this.apiService.sendRequest(api_vendor_information);
  }

  getVendorData(): Observable<any>{
    let api_vendor_data: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_vendor_information_route + localStorage.getItem('vendor_id'),
      options : {
        headers: {
          Authorization: this.token
        }
      }
    }
    return this.apiService.sendRequest(api_vendor_data);

  }

  getOrganizations(): Observable<any>{
    let api_organizations: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_get_organizations_route,
      options : {
        headers: {
          Authorization: this.token
        }
      }
    }
    return this.apiService.sendRequest(api_organizations);
  }

  getProvinces(): Observable<any> {
    let api_provinces: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_get_provinces_route,
      options : {
        headers: {
          Authorization: this.token
        }
      }
    }
    return this.apiService.sendRequest(api_provinces);
  }

  getKotaKabupaten(provinsi:any): Observable<any>{
    let api_get_kotakab: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_get_kotakab.concat(provinsi),
      options : {
        headers: {
          Authorization: this.token
        }
      }
    }
    return this.apiService.sendRequest(api_get_kotakab);

  }

  getKecamatan(kotakab:any): Observable<any>{
    let api_get_kecamatan: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_get_kecamatan.concat(kotakab),
      options : {
        headers: {
          Authorization: this.token
        }
      }
    }
    return this.apiService.sendRequest(api_get_kecamatan);

  }

  getKelurahan(kecamatan:any): Observable<any>{
    let api_get_kelurahan: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_get_kelurahan.concat(kecamatan),
      options : {
        headers: {
          Authorization: this.token
        }
      }
    }
    return this.apiService.sendRequest(api_get_kelurahan);
  }

  getKodepos(kelurahan:any): Observable<any>{
    let api_get_kodepos: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_get_kodepos.concat(kelurahan),
      options : {
        headers: {
          Authorization: this.token
        }
      }
    }
    return this.apiService.sendRequest(api_get_kodepos);
  }

  getBidangUsaha(): Observable<any>{
    let api_get_bidang_usaha: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_get_kbli,
      options : {
        headers: {
          Authorization: this.token
        }
      }
    }
    return this.apiService.sendRequest(api_get_bidang_usaha);
  }

  updateProfile(params: ProfileInterface): Observable<any> {
    let api_update_profile: ApiInterface = {
      method: 'POST',
      url: ApiRoutes.api_update_profile,
      body: {
        namaPerusahaan: params.namaPerusahaan,
        npwp: params.npwp,
        email: params.email,
        namaPic: params.namaPic,
        noTelepon: params.noTelepon
      },
      options: {
        headers: {
          Authorization: this.token
        }
      }
    };

    return this.apiService.sendRequest(api_update_profile);
  }

  updateProfileInformation(params: ProfileInformationInterface, vendorID: string): Observable<any> {
    let api_profile_information: ApiInterface = {
      method: ApiRouteMethods.put,
      url: ApiRoutes.api_vendor_information_route + localStorage.getItem('vendor_id') + '/information',
      body: {
        name: params.name,
        initial: params.initial,
        jenis_badan_usaha: params.jenisBadanUsaha,
        status_badan_usaha: params.statusBadanUsaha,
        tipe_badan_usaha: params.tipeBadanUsaha,
        kategori_badan_usaha: params.kategoriBadanUsaha,
        jenis_kegiatan_usaha: params.jenisKegiatanUsaha,
        jenis_penyedia_usaha: params.jenisPenyediaUsaha,
        npwp: params.npwp,
        nib: params.nib,
        bidang_usaha: params.bidangUsaha,
        oragnisasi_himpunan: params.oragnisasiHimpunan,
        bumn_pengampu: params.bumnPengampu,
        website: params.website,
        jumlah_karyawan_total: 0,
        jumlah_karyawan_lokal: 0,
        jumlah_karyawan_asing: 0,
        phone_number: params.phoneNumber,
        alamat_perusahaan: params.alamatPerusahaan,
        provinsi: params.provinsi,
        kota: params.kota,
        kecamatan: params.kecamatan,
        kelurahan: params.keluarahan,
        kodePos: params.kodePos,
        file: params.file
      },
      options: {
        headers: {
          Authorization: this.token,
          "Content-Type": "application/json"
        }
      },
    }

    return this.apiService.sendRequest(api_profile_information);
  }

  getContactMechanism(): Observable<any>{
    let api_get_contact_mechanism: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_get_contact_mechanism,
      options : {
        headers: {
          Authorization: this.token
        },
        params: {
          party : this.vendor_id
        }
      }
    }
    return this.apiService.sendRequest(api_get_contact_mechanism);
  }

  getPartyRole(role: string): Observable<any>{
    let api_get_party_role: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_get_party_role_route,
      options : {
        headers: {
          Authorization: this.token
        },
        params: {
          "roleType.name" : role
        }
      }
    }
    return this.apiService.sendRequest(api_get_party_role);
  }

  getVendorsOrganization(type: string): Observable<any>{
    let api_vendor_organization: ApiInterface = {
      method: ApiRouteMethods.get,
      url: ApiRoutes.api_vendor_information_route + localStorage.getItem('vendor_id') + '/organizations',
      options : {
        headers: {
          Authorization: this.token
        },
        params: {
          "type": type
        }

      }
    }
    return this.apiService.sendRequest(api_vendor_organization);
  }

}
