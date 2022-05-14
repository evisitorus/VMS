import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';
import { ProfileAddressService } from 'src/app/core/services/profile/profile-address.service';
import { ProfileInformationService } from 'src/app/core/services/profile-information.service';
import { ProfileAddressInterface } from 'src/app/core/interfaces/profile-address-interface';
import { DialogService } from '@progress/kendo-angular-dialog';
import { dictionary } from 'src/app/dictionary/dictionary';
import { ProfileInformasiPerusahaanComponent } from '../profile-informasi-perusahaan/profile-informasi-perusahaan.component';

@Component({
  selector: 'app-profile-alamat',
  templateUrl: './profile-alamat.component.html',
  styleUrls: ['./profile-alamat.component.css']
})

export class ProfileAlamatComponent implements OnInit {

  public form!: FormGroup;
  public gridData: any[] = [];

  public isDisabledKota: boolean = true;
  public isDisabledKecamatan: boolean = true;
  public isDisabledKelurahan: boolean = true;
  public isDisabledKodepos: boolean = true;

  public listProvinsi: Array<{ description: string, id: any }> = [];
  public listKota: Array<{ description: string, id: any }> = [];
  public listKecamatan: Array<{ description: string, id: any }> = [];
  public listKelurahan: Array<{ description: string, id: any }> = [];
  public listKodepos: Array<{ description: string, id: any }> = [];

  public defaultItemProvinsi: { description: string, id: any } = { description: dictionary.select_provinsi, id: null };
  public defaultItemKota:{ description: string, id: any, provinceId: number } = { description: dictionary.select_kota, id: null , provinceId: 0};
  public defaultItemKecamatan: { description: string, id: any, kotaId: number} = { description: dictionary.select_kecamatan, id: null, kotaId: 0 };
  public defaultItemKelurahan: { description: string, id: any } = { description: dictionary.select_kelurahan, id: null };
  public defaultItemKodepos: { description: string, id: any } = { description: dictionary.select_kodepos, id: null };

  public selectedProvinsi!: any;
  public selectedKota!: any;
  public selectedKecamatan!: any;
  public selectedKelurahan!: any;
  public selectedKodepos!: any;

  public isNewData: boolean = true;
  public id!: string;
  public telcoId!: string;

  public opened = false;
  public deleteOpened = false;
  public deleteData = {
    id: '',
    telcoId: '',
    name: ''
  }
  public data: any = {
    namaAlamat: "",
    alamat: "",
    provinsi: "",
    kota: "",
    kecamatan: "",
    kelurahan: "",
    kodepos: "",
    noTelepon: "",
  };
  public dict = dictionary;
  public formField: any = {
    namaAlamat: "Nama Alamat",
    alamat: "Alamat",
    provinsi: "Provinsi",
    kota: "Kota / Kabupaten",
    kecamatan: "Kecamatan",
    kelurahan: "Kelurahan",
    kodepos: "Kode Pos",
    noTelepon: "No. Telepon"
  };

  constructor(
    private eventEmitterService: EventEmitterService,
    private service: ProfileAddressService,
    private addressService: ProfileInformationService,
    private dialogService: DialogService,
    private parent: ProfileInformasiPerusahaanComponent
  ) { }

  ngOnInit(): void {
    this.fetchData();
    this.setForm();
  }

  public close(): void {
    this.opened = false;
    this.isNewData = true;
    this.resetForm();
  }

  public open(): void  {
    this.opened = true;
  }

  public triggerPopUp(): void  {
    this.eventEmitterService.trigger();
  }

  public onChangeProvinsi(value: any): void {
    if (value !== "") {
      this.isDisabledKota = false;
      this.fetchDataKota(value);
    } else {
      this.isDisabledKota = true;
    }
  }

  public onChangeKota(value: any): void {
    if (value !== "") {
      this.isDisabledKecamatan = false;
      this.fetchDataKecamatan(value);
    } else {
      this.isDisabledKecamatan = true;
    }
  }

  public onChangeKecamatan(value: any): void {
    if (value !== "") {
      this.isDisabledKelurahan = false;
      this.fetchDataKelurahan(value);
    } else {
      this.isDisabledKelurahan = true;
    }
  }

  public onChangeKelurahan(value: any): void {
    if (value !== "") {
      this.isDisabledKodepos = false;
      this.fetchDataKodepos(value);
    } else {
      this.isDisabledKodepos = true;
    }
  }

  public mapData(data: any[]): any[] {
    let mappedData:any[] = [];
    let no = 1;
    for (let key = 0; key < data.length; key++) {
      mappedData[key] = {
        no: no++,
        namaAlamat: data[key]['korespondensi_name'],
        alamat: data[key]['address1'],
        provinsiId: data[key]['province_id'] ? data[key]['province_id'] : "",
        provinsi: data[key]['province_description'] ? data[key]['province_description'] : "",
        kotaId: data[key]['city_id'] ? data[key]['city_id'] : "",
        kota: data[key]['city_description'] ? data[key]['city_description'] : "",
        kecamatanId: data[key]['district_id'] ? data[key]['district_id'] : "",
        kecamatan: data[key]['district_description'] ? data[key]['district_description'] : "",
        kelurahanId: data[key]['village_id'] ? data[key]['village_id'] : "",
        kelurahan: data[key]['village_description'] ? data[key]['village_description'] : "",
        kodeposId: data[key]['postalCode_id'] ? data[key]['postalCode_id'] : "",
        kodepos: data[key]['postalCode_number'] ? data[key]['postalCode_number'] : "",
        noTelepon: data[key]['telco_number'] ? data[key]['telco_number']['telco_number'] : "",
        noTelponKodeArea: data[key]['telco_number'] ? data[key]['telco_number']['telco_areaCode'] : "",
        telcoId: data[key]['telco_number'] ? data[key]['telco_number']['telco_id'] : "",
        id: data[key]['address_id'],
        deletedAt: data[key]['deletedAt']
      };
    }
    return mappedData;
  }

  public mapDataProvinsi(data: any[]): any[] {
    let mappedData:any[] = [];
    for (let key = 0; key < data.length; key++) {
      mappedData[key] = {
        description: data[key]['description'],
        id: data[key]['id']
      };
    }
    return mappedData;
  }

  public mapDataKKK(data: any[]): any[] {
    let mappedData:any[] = [];
    for (let key = 0; key < data.length; key++) {
      mappedData[key] = {
        description: data[key]['toGeoLocation']['description'],
        id: data[key]['toGeoLocation']['id']
      };
    }
    return mappedData;
  }

  public mapDataKodepos(data: any[]): any[] {
    let mappedData: any[] = [];
    for (let key = 0; key < data.length; key++) {
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
        this.parent.popUpMessage = err.error.message;
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
        this.parent.popUpMessage = err.error.message;
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
        this.parent.popUpMessage = err.error.message;
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
        this.parent.popUpMessage = err.error.message;
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
        this.parent.popUpMessage = err.error.message;
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
        this.parent.popUpMessage = err.error.message;
        this.triggerPopUp();
      }
    );
  }

  public setForm(): void {
    this.form = new FormGroup({
      namaAlamat: new FormControl(this.data.namaAlamat, Validators.required),
      alamat: new FormControl(this.data.alamat, Validators.required),
      provinsi: new FormControl(this.selectedProvinsi, Validators.required),
      kota: new FormControl(null, Validators.required),
      kecamatan: new FormControl(null, Validators.required),
      kelurahan: new FormControl(null, Validators.required),
      kodepos: new FormControl(null, Validators.required),
      noTelepon: new FormControl(this.data.noTelepon, Validators.required),
      noTelponKodeArea: new FormControl(this.data.noTelponKodeArea, Validators.required),
    });
  }

  public resetForm(): void {
    this.data.namaAlamat = null;
    this.data.alamat = null;
    this.data.provinsi = null;
    this.data.kota = null;
    this.data.kecamatan = null;
    this.data.kelurahan = null;
    this.data.kodepos = null;
    this.data.noTelepon = null;
    this.data.noTelponKodeArea = null

    this.selectedProvinsi = null;
    this.selectedKota = null;
    this.selectedKecamatan = null;
    this.selectedKelurahan = null;
    this.selectedKodepos = null;

    this.isDisabledKota = true;
    this.isDisabledKecamatan = true;
    this.isDisabledKelurahan = true;
    this.isDisabledKodepos = true;

    this.setForm();
  }

  public updateForm(data: any): void {
    this.data.namaAlamat = data.namaAlamat;
    this.data.alamat = data.alamat;
    this.data.noTelepon = data.noTelepon;
    this.data.noTelponKodeArea = data.noTelponKodeArea;
    
    this.data.provinsi = data.provinsi;
    this.selectedProvinsi = data.provinsiId;
    this.onChangeProvinsi(this.selectedProvinsi);

    this.data.kota = data.kota;
    this.selectedKota = data.kotaId;
    this.onChangeKota(this.selectedKota);

    this.data.kecamatan = data.kecamatan;
    this.selectedKecamatan = data.kecamatanId;
    this.onChangeKecamatan(this.selectedKecamatan);

    this.data.kelurahan = data.kelurahan;
    this.selectedKelurahan = data.kelurahanId;
    this.onChangeKelurahan(this.selectedKelurahan);

    this.data.kodepos = data.kodepos;
    this.selectedKodepos = data.kodeposId;

    this.isNewData = false;
    this.id = data.id;
    this.telcoId = data.telcoId;
    this.setForm();
    this.open();
    
    this.parent.popUpMessage = dictionary.update_data_notification;
    this.triggerPopUp();
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
    const params: ProfileAddressInterface = {...this.form.value};
    this.service.save(params).subscribe(
      () => {
        this.close();
        this.parent.popUpMessage = dictionary.save_data_success;
        this.triggerPopUp();
        this.fetchData();
      },
      (err) => {
        this.parent.popUpMessage = err.error.message;
        this.triggerPopUp();
      }
    );
  }

  public update(): void {
    const params: ProfileAddressInterface = {...this.form.value};
    this.service.update(this.id, params, this.telcoId).subscribe(
      () => {
        this.close();
        this.parent.popUpMessage = dictionary.update_data_success;
        this.triggerPopUp();
        this.fetchData();
      },
      (err) => {
        this.parent.popUpMessage = err.error.message;
        this.triggerPopUp();
      }
    );
  }

  public delete(id: string, telcoId:string): void {
    this.service.delete(id, telcoId).subscribe(
      () => {
        this.parent.popUpMessage = dictionary.delete_data_success;
        this.triggerPopUp();
        this.fetchData();
        this.closeDeleteConfirmation();
      },
      (err) => {
        this.parent.popUpMessage = err.error.message;
        this.triggerPopUp();
      }
    );
  }

  closeDeleteConfirmation(){
    this.deleteOpened = false;
    this.deleteData = {
      id: '',
      telcoId: '',
      name: ''
  }
  }

  public deleteConfirmation(id: string, name: string, telcoId: string): void {
    this.deleteOpened = true;
    this.deleteData = {
        id: id,
        telcoId: telcoId,
        name: name
    }
  }
  
}
