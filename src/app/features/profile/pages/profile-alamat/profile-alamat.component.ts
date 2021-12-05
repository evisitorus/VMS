import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { CompanyAddressService } from 'src/app/core/services/profile.companyAddress.service';
import { AddCompanyAddressInterface } from 'src/app/core/interfaces/add-companyAddress-interface';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { ProfileAddressService } from 'src/app/core/services/profile/profile-address.service';

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

  constructor(
    private eventEmitterService: EventEmitterService,
    private service: ProfileAddressService
  ) { }

  ngOnInit(): void {
    this.fetchData();
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

  public mapData(data: any[]): any[] {
    let mappedData:any[] = [];
    let no = 1;
    for (const key in data) {
      mappedData[key] = {
        no: no++,
        namaAlamat: data[key]['note'],
        alamat: data[key]['address1'],
        provinsi:data[key]['province']['description'],
        kota: data[key]['city']['description'],
        id: data[key]['id'],
      };
    }
    return mappedData;
  }

  public fetchData(): void {
    this.service.fetchData().subscribe(
      (response) => {
        this.gridData = response.data;
        this.gridData = this.mapData(this.gridData);
      },
      (err) => {
        this.popUpMessage = err.error.message;
        this.triggerPopUp();
      }
    );
  }

  public updateForm(data: any): void {

  }

  public submit(): void {

  }

  public save(): void {

  }

  public update(): void {

  }

  public delete(id: string): void {

  }
  
}
