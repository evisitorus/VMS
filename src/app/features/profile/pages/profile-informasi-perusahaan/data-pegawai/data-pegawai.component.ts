import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { ProfileService } from 'src/app/core/services/profile.service';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';

import { TipeKaryawan } from "./tipeKaryawan.model";

interface Item {
  name: string;
  id: number;
}
const messages = {
  default: 'Gagal mengambil data',
  success: 'Sukses'
};
@Component({
  selector: 'app-data-pegawai',
  templateUrl: './data-pegawai.component.html',
  styleUrls: ['./data-pegawai.component.css']
})
export class DataPegawaiComponent implements OnInit {
  public tipeKaryawan: any = {};
  tipe: Item[] = this.tipeKaryawan;

  public listItems: Array<{ text: string; value: number }> = [
    { text: "Small", value: 1 },
    { text: "Medium", value: 2 },
    { text: "Large", value: 3 },
  ];

  popUpTitle: string = "Informasi Pegawai";
  popUpMessage: string = messages.default;
  redirectOnClosePopUp: boolean = true;

  constructor(
    private formBuilder: FormBuilder, 
    private profileService: ProfileService,
    private eventEmitterService: EventEmitterService
    ) { }

 ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  
  } 

  public isRequired = true;
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
  
  public placeHolder: TipeKaryawan = {
    name: "Pilih Tipe Karyawan",
    id: 0,
  };

  public pegawaiFormGroup = new FormGroup({
    nikPegawaiInput: new FormControl(null),
    namaKaryawanInput: new FormControl(null, Validators.required),
    tipeKaryawanDropdown: new FormControl(null, Validators.required),
    jabatanKaryawanInput: new FormControl(null, Validators.required),
    bidangPekerjaanKaryawanInput: new FormControl(null),
    resumeKaryawanUpload: new FormControl(null),
  });

  triggerPopUp() {
    this.eventEmitterService.trigger();
  }

  submitPegawai(): void {
    this.pegawaiFormGroup.markAllAsTouched();
    this.popUpMessage = messages.default;

  }
}
