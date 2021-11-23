import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { ProfileService } from 'src/app/core/services/profile.service';

import { EventEmitterService } from 'src/app/core/services/event-emitter.service';
import { AddPemegangSahamInterface } from 'src/app/core/interfaces/add-pemegang-saham-interface';


const messages = {
  default: 'Data tidak boleh kosong.',
  success: 'Sukses'
};

@Component({
  selector: 'app-pemegang-saham',
  templateUrl: './pemegang-saham.component.html',
  styleUrls: ['./pemegang-saham.component.css']
})
export class PemegangSahamComponent implements OnInit {
  @ViewChild('panelbar') private panelbar: any;

  popUpTitle: string = "Informasi Pemegang Saham";
  popUpMessage: string = messages.default;
  redirectOnClosePopUp: boolean = true;

  public columns: any[] = [{field: "Nama Pemegang Saham"}, {field: "Jenis Pemegang Saham"}, {field: "Pemeganng Saham Lokal/Asing"}, {field:"% Kepemilikan"}];
  public gridData: any = {};
  access_token = "admin@abadijaya.co.id";
  vendor_id = "";

  constructor(
    private formBuilder: FormBuilder, 
    private profileService: ProfileService,
    private eventEmitterService: EventEmitterService
    ) { }

  ngOnInit(): void {
    this.gridData = this.getPemegangSaham();
    this.columns = [
      {field: "toParty.firstName", title:"Nama Pemegang Saham", width:"250px"}, 
      {field: "pemegangSahamPerseorangan", title:"Jenis Pemegang Saham"}, 
      {field: "pemegangSahamLokal", title:"Pemegang Saham Lokal/Asing", width:"300px"}, 
      {field: "persentaseKepemilikan", title:"% Kepemilikan"}
    ];
  }

  public opened = false;
  public openedSaham = false;

  public close() {
    this.opened = false;
  }

  public open() {
    this.opened = true;
  }
  public closeSaham() {
    this.openedSaham = false;
  }

  public openSaham() {
    this.openedSaham = true;
  }

  public isRequired = true;

  public pemegangSahamFormGroup = new FormGroup({
    namaPemegangSaham: new FormControl(null, Validators.required),
    perseorangan: new FormControl(null, Validators.required),
    lokal: new FormControl(null, Validators.required),
    presentaseKepemilikan: new FormControl(null, Validators.required),
  });


  triggerPopUp() {
    this.eventEmitterService.trigger();
  }
  
  submitPemegangSaham(): void {
    this.pemegangSahamFormGroup.markAllAsTouched();
    this.popUpMessage = messages.default;

    const dataPemegangSaham = {
      email: "admin@abadijaya.co.id",
      namaPemegangSaham: this.pemegangSahamFormGroup.controls['namaPemegangSaham'].value,
      perseorangan: this.pemegangSahamFormGroup.controls['perseorangan'].value,
      lokal: this.pemegangSahamFormGroup.controls['lokal'].value,
      presentaseKepemilikan: this.pemegangSahamFormGroup.controls['presentaseKepemilikan'].value
    }

    let params: AddPemegangSahamInterface= {...dataPemegangSaham}
    this.profileService.addPemegangSaham(params).subscribe(
      (resp) =>  { 
        this.popUpMessage = messages.success;
        this.triggerPopUp();
        this.redirectOnClosePopUp = true;
        this.closeSaham();
        this.panelbar.stateChange.next([{title: 'Saham', expanded: true, selected: true}])
      },
      (error) => { 
        this.popUpMessage = error;
        this.triggerPopUp();
        this.redirectOnClosePopUp = true;
      }
    );
  }


  getPemegangSaham(){
    this.vendor_id="133";
    this.profileService.getPemegangSaham(this.vendor_id).subscribe(
      (resp) =>  { 
        this.gridData = resp['hydra:member'];
        return this.gridData;
      },
      (error) => { 
        this.popUpMessage = error;
        this.triggerPopUp();
        this.redirectOnClosePopUp = true;
      }
    );
  }
}
