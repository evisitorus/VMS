import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { CompanyAddressService } from 'src/app/core/services/profile.companyAddress.service';
import { AddCompanyAddressInterface } from 'src/app/core/interfaces/add-companyAddress-interface';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';
import { AuthService } from 'src/app/core/services/auth.service';

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

  constructor(

    private formBuilder: FormBuilder,
    private companyAddressService: CompanyAddressService,
    private eventEmitterService: EventEmitterService,
    private authService: AuthService,

  ) { }

  ngOnInit(): void {
  }

  public opened = false;
  public openedAddress = false;

  public close() {
    this.opened = false;
  }

  public open() {
    this.opened = true;
  }

  public closeSaham() {
    this.openedAddress = false;
  }

  public openSaham() {
    this.openedAddress = true;
  }

  //public listItems: Array<string> = ["Item 1", "Item 2", "Item 3"];
  public listItems: Array<number> = [1, 2, 3];

  public companyAddressFormGroup = new FormGroup({
    namaAlamat: new FormControl(null, Validators.required),
    alamat: new FormControl(null, Validators.required),
    provinsi: new FormControl(null, Validators.required),
    kecamatan: new FormControl(null, Validators.required),
    kelurahan: new FormControl(null, Validators.required),
    kodePos: new FormControl(null, Validators.required),
    geoLocation: new FormControl(null, Validators.required),
  });

  triggerPopUp() {
    this.eventEmitterService.trigger();
  }

  submitCompanyAddress(): void {
    this.companyAddressFormGroup.markAllAsTouched();
    //this.popUpMessage = messages.default;

    // stop here if form is invalid
    if (this.companyAddressFormGroup.invalid) {
      //this.popUpMessage = messages.default;
      this.triggerPopUp();
      //this.redirectOnClosePopUp = false;
      return;
    }

    const dataCompanyAddress = {
      namaAlamat: this.companyAddressFormGroup.controls['namaAlamat'].value,
      alamat: this.companyAddressFormGroup.controls['alamat'].value,
      provinsi: this.companyAddressFormGroup.controls['provinsi'].value,
      kecamatan: this.companyAddressFormGroup.controls['kecamatan'].value,
      kelurahan: this.companyAddressFormGroup.controls['kelurahan'].value,
      kodePos: this.companyAddressFormGroup.controls['kodePos'].value,
      geoLocation: this.companyAddressFormGroup.controls['geoLocation'].value,
    }

    alert('masuk sini')
    console.log(dataCompanyAddress)
    let params: AddCompanyAddressInterface= {...dataCompanyAddress}
    this.companyAddressService.addCompanyAddress(params).subscribe(
      (resp) =>  {
        //console.log(resp)
        //this.popUpMessage = "Berhasil menyimpan data";
        //this.redirectOnClosePopUp = false;
        this.triggerPopUp();
        //this.getCompanyAddress();
        this.closeSaham();
        //this.panelbar.stateChange.next([{title: 'Alamat', expanded: true, selected: true}])
      },
      (error) => {
        //this.popUpMessage = "Gagal menyimpan data";
        this.triggerPopUp();
        this.closeSaham();
      }
    );
  }

  /*public mapData(data:any[]) {
    let mappedData:any[] = [];
    let no = 1;
    for (const key in data) {
      mappedData[key] = {
        no: no++,
        namaAlamat: data[key]['namaAlamat'],
        alamat: data[key]['alamat'],
        propinsi: data[key]['propinsi'],
        kecamatan: data[key]['kecamatan'],
        kelurahan: data[key]['kelurahan'],
        kodePos: data[key]['kodePos'],
        geoLocation: data[key]['geoLocation']
      };
    }
    return mappedData;
  }

  getCompanyAddress(){
    this.CompanyAddressService.getCompanyAddress().subscribe(
      (resp) =>  {
        this.gridData = resp['hydra:member'];
        this.gridData = this.mapData(this.gridData);
        return this.gridData;
      },
      (error) => {
        this.popUpMessage = "Gagal mendapatkan data";
        this.triggerPopUp();
      }
    );
  }*/

}
