import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

import { AddPekerjaanInterface, UpdateRiwayatPekerjaanInterface } from 'src/app/core/interfaces/add-pekerjaan-interface';

import { ProfileService } from 'src/app/core/services/profile.service';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';
import { samplePekerjaans } from './pekerjaan';
import { FileRestrictions, SelectEvent } from '@progress/kendo-angular-upload';
import { FileService } from 'src/app/core/services/file.service';
import { DialogAction, ActionsLayout } from "@progress/kendo-angular-dialog";
import { dictionary } from 'src/app/dictionary/dictionary';


const messages = {
  default: 'Data tidak boleh kosong. Silahkan klik syarat dan ketentuan serta kebijakan privasi penggunaan aplikasi',
  success: dictionary.save_data_success,
  disclaimer: 'Silahkan klik syarat dan ketentuan serta kebijakan privasi penggunaan aplikasi',
  deleteConfirmationTitle: "Konfirmasi hapus data Pemegang Saham",
  deleteConfirmationMessage: "Apakah Pemegang Saham atas nama .. akan dihapus dari sistem ?",
};

@Component({
  selector: 'app-profile-riwayat-pekerjaan',
  templateUrl: './profile-riwayat-pekerjaan.component.html',
  styleUrls: ['./profile-riwayat-pekerjaan.component.css']
})
export class ProfileRiwayatPekerjaanComponent implements OnInit {
  submitted = false;
  public deleteId!: string;
  public deletePekerjaanName!: string;

  popUpTitle: string = "Informasi Pengalaman Kerja";
  popUpMessage: string = messages.success;
  popUpConfirmationTitle: string = messages.deleteConfirmationTitle;
  popUpConfirmationMessage: string = "Apakah Pemegang Saham atas nama " + this.deletePekerjaanName + " akan dihapus dari sistem ?";
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

  public openedPekerjaan = false;

  public loaderVisible = false;
  public buttonText = "Submit";
  public submitDisable = false;

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
        id: data[key]['id'],
        active: data[key]['active']
      };
    }
    return mappedData;
  }

  public download(fileId: string, filename: string) {
    let ids;
    let longId = fileId.split("/");
    if (longId.length > 0) {
      ids = longId[longId.length - 1];
    } else {
      ids = fileId;
    }

    this.fileService.download(ids).subscribe(
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

  public resetForm(): void {
    this.data.namaPekerjaan = "";
    this.data.pemberiPekerjaan = "";
    this.data.nilaiPekerjaan = "";
    this.data.tahunPekerjaan = "";
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
    this.lampiranFiles = [];
    this.uploadedFileContentUrl = "";
    this.uploadedFileId = "";
    this.invalidMaxFileSize = false;
    this.invalidFileExtension = false;
  }

  public submit(): void {
    console.log("submit");
    if (this.isNewData) {
      if (this.lampiranFiles == null || this.uploadedFileContentUrl == "") {
        this.popUpMessage = dictionary.invalid_file;
        this.triggerPopUp();
      } else {
        this.pekerjaanForm.markAllAsTouched();
        if (this.pekerjaanForm.valid) {
            this.save();
        }
      }
    } else {
      console.log("submit");
      console.log(this.lampiranFiles);
      console.log(this.uploadedFileContentUrl);
      if (this.lampiranFiles == null || this.uploadedFileContentUrl == "") {
        console.log("submit");
        console.log(this.lampiranFiles);
        console.log(this.uploadedFileContentUrl);
        this.popUpMessage = dictionary.invalid_file;
        this.triggerPopUp();
      } else {
        console.log("submit");
        this.pekerjaanForm.markAllAsTouched();
        console.log(this.pekerjaanForm.value);
        if (this.pekerjaanForm.valid) {
          console.log("submit");
          this.updateRiwayatPekerjaan();
        }
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
        this.closePekerjaan();
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
    if(!this.invalidFileExtension && !this.invalidMaxFileSize){
      this.buttonText = "Uploading file ..";
      this.loaderVisible = true;
      this.submitDisable = true;
    }
    this.fileService.upload(this.lampiranFiles[0]).subscribe(
      (res) => {
        this.uploadedFileContentUrl = res.contentUrl;
        this.uploadedFileId = res["@id"];
        this.buttonText = "Submit";
        this.loaderVisible = false;
        this.submitDisable = false;
        console.log(this.uploadedFileContentUrl);
        console.log(this.uploadedFileId);
      },
      (err) => {
        this.popUpMessage = err.error.message;
        this.triggerPopUp();
      }
    );
  }


  public updateForm(data: any): void {
    this.data.id = data.id;
    this.data.namaPekerjaan = data.namaPekerjaan;
    this.data.pemberiPekerjaan = data.pemberiPekerjaan;
    this.data.nilaiPekerjaan = data.nilaiPekerjaan;
    this.data.tahunPekerjaan = data.tahunPekerjaan;
    this.data.buktiPekerjaanFilePath = data.lampiran;
    this.data.lampiran = data.file;
    
    this.isNewData = false;

    console.log(this.data);

    this.popUpTitle = "Perhatian";
    this.popUpMessage = dictionary.update_data_notification;
    this.triggerPopUp();
    this.setUpdateForm();
    this.openPekerjaan();
  }


  public setUpdateForm(): void {
    this.pekerjaanForm = new FormGroup({
      id: new FormControl(this.data.id, Validators.required),
      namaPekerjaan: new FormControl(this.data.namaPekerjaan, Validators.required),
      pemberiPekerjaan: new FormControl(this.data.pemberiPekerjaan, Validators.required),
      nilaiPekerjaan: new FormControl(Number(this.data.nilaiPekerjaan), Validators.required),
      tahunPekerjaan: new FormControl(Number(this.data.tahunPekerjaan), Validators.required),
      buktiPekerjaanFilePath: new FormControl(this.data.buktiPekerjaanFilePath, Validators.required),
      lampiran: new FormControl(this.data.lampiran ? this.data.lampiran : "" , Validators.required),
    });
    this.lampiranFiles = [];
    console.log(this.pekerjaanForm.value);
  }

  public updateRiwayatPekerjaan(): void {
    const dataRiwayatPekerjaan = {
      id: this.pekerjaanForm.controls['id'].value,
      namaPekerjaan: this.pekerjaanForm.controls['namaPekerjaan'].value,
      pemberiPekerjaan: this.pekerjaanForm.controls['pemberiPekerjaan'].value,
      nilaiPekerjaan: this.pekerjaanForm.controls['nilaiPekerjaan'].value.toString(),
      tahunPekerjaan: this.pekerjaanForm.controls['tahunPekerjaan'].value.toString(),
      buktiPekerjaanFilePath: this.uploadedFileContentUrl ? this.uploadedFileContentUrl : this.pekerjaanForm.controls['buktiPekerjaanFilePath'].value,
      lampiran: this.uploadedFileId ? this.uploadedFileId : this.pekerjaanForm.controls['lampiran'].value,
    }

    console.log(dataRiwayatPekerjaan);

    let params: UpdateRiwayatPekerjaanInterface= {...dataRiwayatPekerjaan}
    this.profileService.updatePekerjaan(params).subscribe(
      () => {
        this.popUpMessage = dictionary.update_data_success;
        this.triggerPopUp();
        this.getPekerjaan();
        this.closePekerjaan();
      },
      (err) => {
        this.popUpMessage = err.error.message;
        this.triggerPopUp();
        this.closePekerjaan();
      }
    );
  }


  public delete(data: any): void {
    console.log(data);
    this.popUpConfirmationTitle= messages.deleteConfirmationTitle;
    this.popUpConfirmationMessage= 'Apakah Riwayat Pekerjaan "' + data.namaPekerjaan + '" akan dihapus dari sistem ?';
    this.opened = true;
    this.deleteId = data.id;
  }

  public deletePekerjaan(id: string): void {
    this.profileService.deletePekerjaan(id).subscribe(
      () => {
        this.popUpMessage = dictionary.delete_data_success;
        this.triggerPopUp();
        this.getPekerjaan();
      },
      (err) => {
        this.popUpMessage = err.error.message;
        this.triggerPopUp();
      }
    );
  }

  public opened = false;
  
  public actionsLayout: ActionsLayout = "normal";

  public myActions: DialogAction[] = [
    { text: "Tidak" },
    { text: "Ya", primary: true },
  ];

  public onAction(action: DialogAction): void {
    if(action.text == "Ya"){
      this.deletePekerjaan(this.deleteId);
    }
    this.opened = false;
    this.lampiranFiles = [];
  }

  public close(status: any) {
    console.log(status);
    this.opened = false;
  }

  public open() {
    this.opened = true;
  }

  public closePekerjaan() {
    this.openedPekerjaan = false;
    this.resetForm();
    this.isNewData = true;
  }

  public openPekerjaan() {
    this.openedPekerjaan = true;
  }

}
