import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { ProfileService } from 'src/app/core/services/profile.service';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';
import { AddPegawaiInterface } from 'src/app/core/interfaces/add-pegawai-interface';

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

  public listItems: Array<{ text: string; value: number }> = [
    { text: "Small", value: 1 },
    { text: "Medium", value: 2 },
    { text: "Large", value: 3 },
  ];

  popUpTitle: string = "Informasi Pemegang Saham";
  popUpMessage: string = messages.default;
  redirectOnClosePopUp: boolean = true;

  constructor(
    private formBuilder: FormBuilder, 
    private profileService: ProfileService,
    private eventEmitterService: EventEmitterService
    ) { }

  ngOnInit(): void {
    this.tipeKaryawan = this.getTipeKaryawan();
  }

  public isRequired = true;
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
  
  public placeHolder: TipeKaryawan = {
    name: "Pilih Tipe Karyawan",
    id: 0,
  };

  getTipeKaryawan(){
    this.profileService.getTipeKaryawan().subscribe(
      (resp) =>  { 
        this.tipeKaryawan = resp['hydra:member'];
        return this.tipeKaryawan;
      },
      (error) => { 
        return error;
      }
    );
  }
}
