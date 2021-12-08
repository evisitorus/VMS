import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

import { AddPekerjaanInterface } from 'src/app/core/interfaces/add-pekerjaan-interface';

import { ProfileService } from 'src/app/core/services/profile.service';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';
import { samplePekerjaans } from './pekerjaan';
import { FileRestrictions, SelectEvent } from '@progress/kendo-angular-upload';
import { FileService } from 'src/app/core/services/file.service';

const messages = {
  default: 'Data tidak boleh kosong. Silahkan klik syarat dan ketentuan serta kebijakan privasi penggunaan aplikasi',
  success: 'Berhasil menyimpan data',
  disclaimer: 'Silahkan klik syarat dan ketentuan serta kebijakan privasi penggunaan aplikasi'
};

@Component({
  selector: 'app-profile-riwayat-pekerjaan',
  templateUrl: './profile-riwayat-pekerjaan.component.html',
  styleUrls: ['./profile-riwayat-pekerjaan.component.css']
})
export class ProfileRiwayatPekerjaanComponent implements OnInit {
  submitted = false;

  popUpTitle: string = "Informasi Pengalaman Kerja";
  popUpMessage: string = messages.success;
  redirectOnClosePopUp: boolean = false;
  isLoggedIn: boolean = true;
  
  public columns: any[] = [{field: "Nama Pekerjaan"}, {field: "pemberiPekerjaan"}, {field: "nilaiPekerjaan"}, {field:"tahunPekerjaan"}, {field:"buktiPekerjaanFilePath"}];
  public gridData: any = samplePekerjaans;
  record = 0;

  public invalidFileExtension!: boolean;
  public invalidMaxFileSize!: boolean;

  public lampiranFiles!: Array<any>;
  public uploadedFileContentUrl!: string;
  public uploadedFileId: string = "";

  public isNewData: boolean = true;

  public opened = false;
  public openedSaham = false;

  public fileRestrictions: FileRestrictions = {
    allowedExtensions: ["jpg", "jpeg", "png", "pdf"],
    maxFileSize: 2097152
  };

  public pekerjaanForm = new FormGroup({
    namaPekerjaan: new FormControl(null, Validators.required),
    pemberiPekerjaan: new FormControl(null, Validators.required),
    nilaiPekerjaan: new FormControl(null, Validators.required),
    tahunPekerjaan: new FormControl(null, Validators.required)  
  });

  public data: any = {
    namaPekerjaan: "",
    pemberiPekerjaan: "",
    nilaiPekerjaan: "",
    tahunPekerjaan: "",
    buktiPekerjaanFilePath: "",
    lampiran: ""
  };

  constructor(
    private profileService: ProfileService,
    private eventEmitterService: EventEmitterService,
    private fileService: FileService
    ) { }


  ngOnInit(): void {
    this.getPekerjaan();
  }
  
  getPekerjaan(){
    this.profileService.getPekerjaan().subscribe(
      (resp) =>  { 
        this.gridData = resp['hydra:member'];
        this.gridData = this.mapData(this.gridData);
      },
      (error) => { 
        this.popUpMessage = error;
        this.triggerPopUp();
        this.redirectOnClosePopUp = true;
      }
    );
  }

  public mapData(data: any[]): any[] {
    let mappedData:any[] = [];
    for (const key in data) {
      mappedData[key] = {
        namaPekerjaan: data[key]['namaPekerjaan'],
        pemberiPekerjaan: data[key]['pemberiPekerjaan'],
        nilaiPekerjaan: data[key]['nilaiPekerjaan'],
        tahunPekerjaan: data[key]['tahunPekerjaan'],
        lampiran: data[key]['buktiPekerjaanFilePath'],
        file: data[key]['file'],
        id: data[key]['id']
      };
    }
    return mappedData;
  }

  public download(fileId: string, filename: string) {
    this.fileService.download(fileId).subscribe(
      (res) => {
        let mime = this.fileService.getMimeType(filename);
        let blob = new Blob([res], { type: mime });
        let url= window.URL.createObjectURL(blob);
        window.open(url);
      },
      (err) => {
        this.popUpMessage = err.error.message;
        this.triggerPopUp();
      }
    );
  }

  triggerPopUp() {
    this.eventEmitterService.trigger();
  }

  public close() {
    this.opened = false;
    this.resetForm();
    this.isNewData = true;
    this.lampiranFiles = [];
  }

  public open() {
    this.opened = true;
  }

  public resetForm(): void {
    this.data.namaPekerjaan = "";
    this.data.pemberiPekerjaan = "";
    this.data.nilaiPekerjaan = "";
    this.data.tahunPekerjaan = "";
    this.data.buktiPekerjaanFilePath = "";
    this.data.lampiran = "";
    this.setForm();
  }

  public setForm(): void {
    this.pekerjaanForm = new FormGroup({
      namaPekerjaan: new FormControl(this.data.namaPekerjaan, Validators.required),
      pemberiPekerjaan: new FormControl(this.data.pemberiPekerjaan, Validators.required),
      nilaiPekerjaan: new FormControl(this.data.nilaiPekerjaan, Validators.required),
      tahunPekerjaan: new FormControl(this.data.tahunPekerjaan, Validators.required)
    });
  }

  public submit(): void {
    if (this.uploadedFileId == "") {
      this.popUpMessage = "Periksa kembali file Anda";
      this.triggerPopUp();
    } else {
      this.pekerjaanForm.markAllAsTouched();
      if (this.pekerjaanForm.valid) {
          this.save();
      }
    }
  }

  save(): void {
    let params: AddPekerjaanInterface = {
      namaPekerjaan: this.pekerjaanForm.value.namaPekerjaan,
      pemberiPekerjaan: this.pekerjaanForm.value.pemberiPekerjaan,
      nilaiPekerjaan: this.pekerjaanForm.value.nilaiPekerjaan.toString(),
      tahunPekerjaan: this.pekerjaanForm.value.tahunPekerjaan.toString(),
      buktiPekerjaanFilePath: this.uploadedFileContentUrl,
      lampiran: this.uploadedFileId,
    };
    this.profileService.addPekerjaan(params).subscribe(
      (resp) =>  { 
        this.popUpMessage = messages.success;
        this.triggerPopUp();
        this.getPekerjaan();
        this.close();
      },
      (error) => { 
        console.log(params);
        console.log(console.error());
        // if(error.error.message){
          this.popUpMessage = error;
        // }
        this.triggerPopUp();
        this.redirectOnClosePopUp = false;
      }
    );
  }


  public selectEventHandler(e: SelectEvent): void {
    let errors = e.files[0].validationErrors;
    if (errors?.includes("invalidMaxFileSize")) {
      this.invalidMaxFileSize = true;
    } else {
      this.invalidMaxFileSize = false;
    }
    if (errors?.includes("invalidFileExtension")) {
      this.invalidFileExtension = true;
    } else {
      this.invalidFileExtension = false;
    }
  }


  public upload(): void {
    this.fileService.upload(this.lampiranFiles[0]).subscribe(
      (res) => {
        this.uploadedFileContentUrl = res.contentUrl;
        this.uploadedFileId = res["@id"];
      },
      (err) => {
        this.popUpMessage = err.error.message;
        this.triggerPopUp();
      }
    );
  }
}
