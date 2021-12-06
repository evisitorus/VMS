import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { CompanyAddressService } from 'src/app/core/services/profile.companyAddress.service';
import { AddCompanyAddressInterface } from 'src/app/core/interfaces/add-companyAddress-interface';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { ProfileAddressService } from 'src/app/core/services/profile/profile-address.service';
import { ProfileInformationService } from 'src/app/core/services/profile-information.service';
import { ProfileAddressInterface } from 'src/app/core/interfaces/profile-address-interface';

const messages = {
  default: 'Data tidak boleh kosong.',
  success: 'Sukses'
};

@Component({
  selector: 'app-profile-alamat',
  templateUrl: './profile-alamat.component.html',
  styleUrls: ['./profile-alamat.component.css']
})

export class ProfileAlamatComponent implements OnInit {

  public form!: FormGroup;
  public gridData: any[] = [];

  public popUpTitle: string = "Profile Alamat";
  public popUpMessage: string = "";

  public isDisabledKota: boolean = true;
  public isDisabledKecamatan: boolean = true;
  public isDisabledKelurahan: boolean = true;
  public isDisabledKodepos: boolean = true;

  public listProvinsi: Array<{ description: string, id: number }> = [];
  public listKota: Array<{ description: string, id: number }> = [];
  public listKecamatan: Array<{ description: string, id: number }> = [];
  public listKelurahan: Array<{ description: string, id: number }> = [];
  public listKodepos: Array<{ description: string, id: number }> = [];

  public defaultItemProvinsi: { description: string, id: number } = { description: 'Pilih provinsi', id: 0 };
  public defaultItemKota:{ description: string, id: number, provinceId: number } = { description: 'Pilih kota', id: 0 , provinceId: 0};
  public defaultItemKecamatan: { description: string, id: number, kotaId: number} = { description: 'Pilih Kecamatan', id: 0, kotaId: 0 };
  public defaultItemKelurahan: { description: string, id: number } = { description: 'Pilih Kelurahan', id: 0 };
  public defaultItemKodepos: { description: string, id: number } = { description: 'Pilih Kodepos', id: 0 };

  public isNewData: boolean = true;

  constructor(
    private eventEmitterService: EventEmitterService,
    private service: ProfileAddressService,
    private addressService: ProfileInformationService
  ) { }

  ngOnInit(): void {
    this.fetchData();
    this.setForm();
  }

  public opened = false;

  public close(): void {
    this.opened = false;
  }

  public open(): void  {
    this.opened = true;
  }

  public triggerPopUp(): void  {
    this.eventEmitterService.trigger();
  }

  public onChangeProvinsi(value: any): void {
    if (value !== 0) {
      this.isDisabledKota = false;
      this.fetchDataKota(value);
    } else {
      this.isDisabledKota = true;
    }
  }

  public onChangeKota(value: any): void {
    if (value !== 0) {
      this.isDisabledKecamatan = false;
      this.fetchDataKecamatan(value);
    } else {
      this.isDisabledKecamatan = true;
    }
  }

  public onChangeKecamatan(value: any): void {
    if (value !== 0) {
      this.isDisabledKelurahan = false;
      this.fetchDataKelurahan(value);
    } else {
      this.isDisabledKelurahan = true;
    }
  }

  public onChangeKelurahan(value: any): void {
    if (value !== 0) {
      this.isDisabledKodepos = false;
      this.fetchDataKodepos(value);
    } else {
      this.isDisabledKodepos = true;
    }
  }

  public mapData(data: any[]): any[] {
    let mappedData:any[] = [];
    let no = 1;
    for (const key in data) {
      mappedData[key] = {
        no: no++,
        namaAlamat: data[key]['address2'],
        alamat: data[key]['address1'],
        provinsi:data[key]['province']['description'],
        kota: data[key]['city']['description'],
        id: data[key]['id'],
      };
    }
    return mappedData;
  }

  public mapDataProvinsi(data: any[]): any[] {
    let mappedData:any[] = [];
    for (const key in data) {
      mappedData[key] = {
        description: data[key]['description'],
        id: data[key]['id']
      };
    }
    return mappedData;
  }

  public mapDataKKK(data: any[]): any[] {
    let mappedData:any[] = [];
    for (const key in data) {
      mappedData[key] = {
        description: data[key]['toGeoLocation']['description'],
        id: data[key]['toGeoLocation']['id']
      };
    }
    return mappedData;
  }

  public mapDataKodepos(data: any[]): any[] {
    let mappedData:any[] = [];
    for (const key in data) {
      mappedData[key] = {
        description: data[key]['postalCode']['postalCodeNum'],
        id: data[key]['postalCode']['id']
      };
    }
    return mappedData;
  }

  public fetchData(): void {
    this.service.fetchData().subscribe(
      (response) => {
        this.gridData = response.data;
        this.gridData = this.mapData(this.gridData);
        this.fetchDataProvince();
      },
      (err) => {
        this.popUpMessage = err.error.message;
        this.triggerPopUp();
      }
    );
  }

  public fetchDataProvince(): void {
    this.addressService.getProvinces().subscribe(
      (resp) => {
        this.listProvinsi = resp["hydra:member"]; 
        this.listProvinsi = this.mapDataProvinsi(this.listProvinsi);       
      },
      (err) => {
        this.popUpMessage = err.error.message;
        this.triggerPopUp();
      }
    );
  }

  public fetchDataKota(value: any): void {
    this.addressService.getKotaKabupaten(value).subscribe(
      (resp) => {
        this.listKota = resp["hydra:member"];
        this.listKota = this.mapDataKKK(this.listKota);
      },
      (err) => {
        this.popUpMessage = err.error.message;
        this.triggerPopUp();
      }
    );
  }

  public fetchDataKecamatan(value: any): void {
    this.addressService.getKecamatan(value).subscribe(
      (resp) => {
        this.listKecamatan = resp["hydra:member"];
        this.listKecamatan = this.mapDataKKK(this.listKecamatan);
      },
      (err) => {
        this.popUpMessage = err.error.message;
        this.triggerPopUp();
      }
    );
  }

  public fetchDataKelurahan(value: any): void {
    this.addressService.getKelurahan(value).subscribe(
      (resp) => {
        this.listKelurahan = resp["hydra:member"];
        this.listKelurahan = this.mapDataKKK(this.listKelurahan);
      },
      (err) => {
        this.popUpMessage = err.error.message;
        this.triggerPopUp();
      }
    );
  }

  public fetchDataKodepos(value: any): void {
    this.addressService.getKodepos(value).subscribe(
      (resp) => {
        this.listKodepos = resp["hydra:member"];
        this.listKodepos = this.mapDataKodepos(this.listKodepos);
      },
      (err) => {
        this.popUpMessage = err.error.message;
        this.triggerPopUp();
      }
    );
  }

  public setForm(): void {
    this.form = new FormGroup({
      namaAlamat: new FormControl(null, Validators.required),
      alamat: new FormControl(null, Validators.required),
      provinsi: new FormControl(null, Validators.required),
      kota: new FormControl(null, Validators.required),
      kecamatan: new FormControl(null, Validators.required),
      kelurahan: new FormControl(null, Validators.required),
      kodepos: new FormControl(null, Validators.required),
    });
  }

  public updateForm(data: any): void {

  }

  public submit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      if (this.isNewData) {
        this.save();
      } else {
        this.update();
      }
    }
  }

  public save(): void {
    let param: ProfileAddressInterface = {...this.form.value};
    this.service.save(param).subscribe(
      () => {
        this.close();
        this.popUpMessage = "Berhasil Menyimpan Data";
        this.triggerPopUp();
        this.fetchData();
      },
      (err) => {
        this.popUpMessage = err.error.message;
        this.triggerPopUp();
      }
    );
  }

  public update(): void {

  }

  public delete(id: string): void {

  }
  
}
