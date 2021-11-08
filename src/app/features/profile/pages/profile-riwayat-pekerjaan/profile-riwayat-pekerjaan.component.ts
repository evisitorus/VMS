import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

import { PekerjaanInterface } from 'src/app/core/interfaces/pekerjaan-interface';

import { ProfileService } from 'src/app/core/services/profile.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';
import { samplePekerjaans } from './pekerjaan';

const messages = {
  default: 'Data tidak boleh kosong. Silahkan klik syarat dan ketentuan serta kebijakan privasi penggunaan aplikasi',
  success: 'Selamat anda telah terdaftar sebagai Vendor PaDi, silahkan cek email anda untuk melakukan aktivasi akun',
  disclaimer: 'Silahkan klik syarat dan ketentuan serta kebijakan privasi penggunaan aplikasi'
};

@Component({
  selector: 'app-profile-riwayat-pekerjaan',
  templateUrl: './profile-riwayat-pekerjaan.component.html',
  styleUrls: ['./profile-riwayat-pekerjaan.component.css']
})
export class ProfileRiwayatPekerjaanComponent implements OnInit {
  pekerjaanForm = new FormGroup({});
  submitted = false;

  popUpTitle: string = "Informasi Pengalaman Kerja";
  popUpMessage: string = messages.success;
  redirectOnClosePopUp: boolean = true;
  isLoggedIn: boolean = true;
  
  public columns: any[] = [{field: "Nama Pekerjaan"}, {field: "pemberiPekerjaan"}, {field: "nilaiPekerjaan"}, {field:"tahunPekerjaan"}, {field:"buktiPekerjaanFilePath"}];
  public gridData: any = samplePekerjaans;
  record = 0;

  constructor(
    private formBuilder: FormBuilder, 
    private profileService: ProfileService,
    private eventEmitterService: EventEmitterService,
    private authService: AuthService,
    ) { }

    get f() { return this.pekerjaanForm.controls; }

  ngOnInit(): void {
    // this.isLoggedIn = true;
    // this.authService.setLoggedIn(true);
    if (!this.isLoggedIn) window.location.href = "/";

    this.pekerjaanForm = this.formBuilder.group({
      email:['tutuu@tujuh.com'],
      namaPekerjaan: ['asd', Validators.required],
      pemberiPekerjaan: ['asd', Validators.required],
      nilaiPekerjaan: ['1231233', Validators.required],
      tahunPekerjaan: ['2121', Validators.required],
      buktiPekerjaanFilePath: ['asdas.jpg', Validators.required],
    });
    
    this.columns = [
      {field: "namaPekerjaan", title:"Nama Pekerjaan"}, 
      {field: "pemberiPekerjaan", title:"Pemberi Pekerjaan"}, 
      {field: "nilaiPekerjaan", title:"Nilai Pekerjaan"}, 
      {field: "tahunPekerjaan", title:"Tahun"}, 
      {field: "buktiPekerjaanFilePath", title:"Lampiran "}
    ];
    this.gridData = samplePekerjaans;
  }

  public opened = false;
  public openedSaham = false;

  public close() {
    console.log(`Dialog result: ${status}`);
    this.opened = false;
  }

  public open() {
    this.opened = true;
  }

  public closeSaham() {
    console.log(`Dialog result: ${status}`);
    this.openedSaham = false;
  }

  public openSaham() {
    this.openedSaham = true;
  }

  triggerPopUp() {
    this.eventEmitterService.trigger();
  }

  validasiForm(){
    if (this.pekerjaanForm.invalid) {
      this.popUpMessage = messages.default;
      this.triggerPopUp();
      this.redirectOnClosePopUp = true;
      return;
    }
  }

  submit(): void {
    this.pekerjaanForm.markAllAsTouched();
    this.popUpMessage = messages.default;

    // stop here if form is invalid
    if (this.pekerjaanForm.invalid) {
      this.popUpMessage = messages.default;
      this.triggerPopUp();
      this.redirectOnClosePopUp = false;
      return;
    }

    this.validasiForm();

    let params: PekerjaanInterface= {...this.pekerjaanForm.value};
    this.profileService.pekerjaan(params).subscribe(
      (resp) =>  { 
        this.submitted = true;
        this.popUpMessage = messages.default;
        this.triggerPopUp();
        this.redirectOnClosePopUp = true;
      },
      (error) => { 
        console.log(params);
        console.log(console.error());
        // if(error.error.message){
          this.popUpMessage = error;
        // }
        this.triggerPopUp();
        this.redirectOnClosePopUp = true;
      }
    );
  }
  
}
