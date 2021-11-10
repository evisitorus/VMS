import { Component, OnInit } from '@angular/core';
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

  popUpTitle: string = "Informasi Pemegang Saham";
  popUpMessage: string = messages.default;
  redirectOnClosePopUp: boolean = true;

  constructor(
    private formBuilder: FormBuilder, 
    private profileService: ProfileService,
    private eventEmitterService: EventEmitterService
    ) { }

  ngOnInit(): void {
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
      namaPemegangSaham: this.pemegangSahamFormGroup.controls['namaPemegangSaham'].value,
      jenisPemegangSaham: this.pemegangSahamFormGroup.controls['perseorangan'].value,
      pemegangSaham: this.pemegangSahamFormGroup.controls['lokal'].value,
      presentaseKepemilikan: this.pemegangSahamFormGroup.controls['presentaseKepemilikan'].value
    }

    let params: AddPemegangSahamInterface= {...dataPemegangSaham}
    this.profileService.addPemegangSaham(params).subscribe(
      (resp) =>  { 
        this.popUpMessage = messages.success;
        this.triggerPopUp();
        this.redirectOnClosePopUp = true;
        this.closeSaham();
      },
      (error) => { 
        this.popUpMessage = error;
        this.triggerPopUp();
        this.redirectOnClosePopUp = true;
      }
    );
  }
}
