import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataBindingDirective, GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { FileRestrictions } from '@progress/kendo-angular-upload';
import { FileService } from 'src/app/core/services/file.service';
import { ProfileKaryawanInterface } from 'src/app/core/interfaces/profile-karyawan.interface';
import { ProfileInformationService } from 'src/app/core/services/profile/profile-information.service';
import { ApiRoutes } from "src/app/core/services/api/api-routes";
import { DialogCloseResult, DialogRef, DialogService } from '@progress/kendo-angular-dialog';
import { ProfileInformasiPerusahaanComponent } from '../profile-informasi-perusahaan.component';
import { dictionary } from 'src/app/dictionary/dictionary';

interface Item {
  name: string;
  id: number;
}

const messages = {
  default: 'Data tidak boleh kosong.',
  success: 'Sukses'
};

@Component({
  selector: 'app-profil-karyawan',
  templateUrl: './profil-karyawan.component.html',
  styleUrls: ['./profil-karyawan.component.css']
})
export class ProfilKaryawanComponent implements OnInit {

  public gridDataPegawai: any = {};
  public gridViewPegawai!: GridDataResult;
  public pageSize = 5;
  public skip = 0;

  public id!: string;
  public pegawaiId!: string;
  public isNewData: boolean = true;

  popUpID: string = "";
  popUpTitle: string = "";
  popUpMessage: string = messages.default;
  redirectOnClosePopUp: boolean = true;

  public tipeSource: Array<Item> = [];
  public bidangSource: Array<Item> = [];

  public pegawaiFormGroup!: FormGroup;

  public opened = false;

  public submitted = false;
  public selectedFile!: Array<any>;
  public uploadedFileContentUrl!: string;
  public uploadedFileId!: string;

  public fileRestrictions: FileRestrictions = {
    allowedExtensions: ["pdf", "doc", "docx"],
    maxFileSize: 2097152 //2 MB
  };

  public data: any = {
    nik: null,
    firstName: null,
    lastName: null,
    tipeKaryawan: null,
    jabatan: null,
    bidangPekerjaan: null,
    cvFilePath: null,
  };

  public bidangTemp: Array<Item> = [];

  // add new bidang value based on user input
  public filter!: string;
  public selectedBidang!: Item ;
  public selectedBidangId:string = "";

  constructor(
    private fileService: FileService,
    private profileInformationService: ProfileInformationService,
    private dialogService: DialogService,
    private parent: ProfileInformasiPerusahaanComponent
  ) {
    this.bidangTemp = this.bidangSource.slice(0);
  }

  ngOnInit(): void {
    this.fetchData();

  }

  public fetchData(): void {
    this.setForm();
    this.profileInformationService.getTipeKaryawan().subscribe(
      (resp) => {
        this.tipeSource = resp['hydra:member'];
      },
      (error) => {
        console.log(error);
      }
    );

    this.profileInformationService.getBidangKaryawan().subscribe(
      (resp) => {
        this.bidangSource = resp['hydra:member'];
        this.bidangTemp = this.bidangSource;
      },
      (error) => {
        console.log(error);
      }
    );

    this.profileInformationService.getKaryawan().subscribe(
      (response) => {
        this.gridDataPegawai = response.data;
        this.gridViewPegawai = {
          data: this.gridDataPegawai.slice(this.skip, this.skip + this.pageSize),
          total: this.gridDataPegawai.length,
        }
        return this.gridDataPegawai;
      },
      (error) => {
        console.log(error);
      }
    );

  }

  public resetForm():void {
    this.data.nik = null;
    this.data.firstName = null;
    this.data.lastName = null;
    this.data.tipeKaryawan = null;
    this.data.jabatan = null;
    this.data.bidangPekerjaan = null;
    this.data.cvFilePath = null;
    this.selectedBidangId = "";
    this.selectedBidang = {
      name: "Masukkan nama bidang pekerjaan, contoh: IT, Human Resource...",
      id: 0,
    };
    this.setForm();

  }

  public setForm(): void {
    this.pegawaiFormGroup = new FormGroup({
      nik: new FormControl(this.data.nik ? parseInt(this.data.nik) : null, [Validators.max(9999999999999999), Validators.required]),
      firstName: new FormControl(this.data.firstName, Validators.required),
      lastName: new FormControl(this.data.lastName, Validators.required),
      tipeKaryawan: new FormControl(this.data.tipeKaryawan, Validators.required),
      jabatan: new FormControl(this.data.jabatan, Validators.required),
      bidangPekerjaan: new FormControl(this.data.bidangPekerjaan, Validators.required)
    });
  }

  public submitProfilKaryawan(): void {
    if( this.uploadedFileContentUrl === null || this.selectedFile === null){
      this.popUpID = "popup-wrong-file";
      this.parent.popUpMessage = "Periksa kembali file Anda";
      this.parent.triggerPopUp();
    } else {
      this.pegawaiFormGroup.markAllAsTouched();
      if (this.pegawaiFormGroup.valid) {
        if (this.isNewData) {
          this.save();
        } else {
          this.update();
        }
      }
    }
    

  }

  public addPegawai(){
    this.resetForm();
    this.open();
  }


  public addNewBidang(): void {
    this.profileInformationService.postBidangKaryawan(this.filter).subscribe(
      (res) => {
        //add new value into temp array and backend
        this.bidangSource.push({
          name: this.filter,
          id: this.bidangSource.length
        });
        //make new added value the selected value
        this.selectedBidang = this.bidangSource[this.bidangSource.length-1];
        // get selected bidang id as in the id in the db
        this.selectedBidangId = res["@id"];
        // this.popUpID = "popup-bidang-pekerjaan-success";
        this.parent.popUpMessage = dictionary.save_data_bidang_success;
        this.parent.triggerPopUp();
      },
      (error) => {
        this.popUpID = "popup-bidang-pekerjaan-failed";
        this.parent.popUpMessage = dictionary.save_data_bidang_failed;
        this.parent.triggerPopUp();
      });


    this.handleFilter(this.filter);

  }

  // searching handler
  public handleFilter(value: any) {
    this.filter = value;
    this.bidangTemp = this.bidangSource.filter(
      (s) => s.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
  }

  public valueChange(value: any): void {
    this.selectedBidang = value;
    this.selectedBidangId = value["@id"];
  }

  public selectionChange(value: any): void {
    this.selectedBidang = value;
    this.selectedBidangId = value["@id"];
}

  public save(): void {
    this.popUpTitle = "Tambah Pegawai";
    let file_id = this.extractNumber(this.uploadedFileId);
    let bidang_id = this.selectedBidangId ? this.extractNumber(this.selectedBidangId) : this.pegawaiFormGroup.value.bidangPekerjaan.id ? this.extractNumber(this.pegawaiFormGroup.value.bidangPekerjaan.id) : "";
    let params: ProfileKaryawanInterface = {
      nik: this.pegawaiFormGroup.value.nik.toString(),
      firstName: this.pegawaiFormGroup.value.firstName,
      lastName: this.pegawaiFormGroup.value.lastName,
      tipeKaryawan: this.extractNumber(this.pegawaiFormGroup.value.tipeKaryawan["@id"]),
      jabatan:this.pegawaiFormGroup.value.jabatan,
      bidangPekerjaan:bidang_id,
      file: file_id,
      attachmentFilePath: this.uploadedFileContentUrl
    };
    this.profileInformationService.addProfilKaryawan(params).subscribe(
      () => {
        this.parent.popUpMessage = dictionary.save_data_success;
        this.parent.triggerPopUp();
        this.fetchData();
        this.close();
      },
      () => {
        this.parent.popUpMessage = dictionary.save_data_failed;
        this.parent.triggerPopUp();
        this.close();
      }
    );
  }

  public close() {
    this.opened = false;
    this.isNewData = true;
  }

  public cancelAddUpdatePegawai(){
    this.fetchData();
    this.resetForm();
    this.close();
  }

  public open() {
    this.opened = true;
  }

  public upload(): void {
    this.fileService.upload(this.selectedFile[0]).subscribe(
      (res) => {
        this.uploadedFileContentUrl = res.contentUrl; // file url
        this.uploadedFileId = res["@id"]; //vendor :resume_id

      },
      (error) => {
        this.popUpID = "popup-upload-file-failed";
        this.parent.popUpMessage = dictionary.select_file_failed;
        this.parent.triggerPopUp();
      }
    );
  }

  public download(fileId: string, filename: string) {
    this.fileService.download(fileId).subscribe(
      (res) => {
        let mime = this.fileService.getMimeType(filename);
        let blob = new Blob([res], { type: mime });
        let url = window.URL.createObjectURL(blob);
        window.open(url);
      },
      (error) => {
        this.popUpID = "popup-failed-download";
        this.parent.popUpMessage = dictionary.download_file_failed;
        this.parent.triggerPopUp();
      }
    );
  }

  public updateForm(data: any): void {
    this.popUpID = "popup-edit-data-pegawai";
    this.popUpTitle = "Edit Data Pegawai";
    this.id = data.id;
    this.pegawaiId = data.fromParty.id;
    this.data.nik = data.nik;
    this.data.firstName = data.fromParty.firstName;
    this.data.lastName = data.fromParty.lastName;
    this.data.tipeKaryawan = data.sdmType;
    this.data.jabatan = data.jabatan;
    this.data.bidangPekerjaan = data.sdmBidang;
    this.selectedBidang = data.sdmBidang;
    this.data.cvFilePath = data.cvFilePath;

    this.isNewData = false;

    this.setForm();
    this.open();

    this.parent.popUpMessage = "Perubahan yang Anda lakukan belum aktif hingga diverifikasi oleh VMS Verifikator. Pastikan perubahan data perusahaan Anda sudah benar.";
    this.parent.triggerPopUp();
  }

  public extractNumber(value: string){
    if (typeof value === 'string') {
      return value.replace(/\D/g,'')
    } else {
      return String(value);
    }
  }

  public update(): void {
    let file_id = "";
    if(this.uploadedFileId){
      file_id = this.extractNumber(this.uploadedFileId);
    }
    let bidang_id = this.selectedBidangId ? this.extractNumber(this.selectedBidangId) : this.pegawaiFormGroup.value.bidangPekerjaan.id ? this.extractNumber(this.pegawaiFormGroup.value.bidangPekerjaan.id) : "";
    let params: ProfileKaryawanInterface = {
      nik: this.pegawaiFormGroup.value.nik.toString(),
      firstName: this.pegawaiFormGroup.value.firstName,
      lastName: this.pegawaiFormGroup.value.lastName,
      tipeKaryawan: this.pegawaiFormGroup.value.tipeKaryawan.id,
      jabatan:this.pegawaiFormGroup.value.jabatan,
      bidangPekerjaan:bidang_id,
      file: file_id,
      attachmentFilePath: this.uploadedFileContentUrl
    };
    //send pegawai ID and sdm relationship ID
    this.profileInformationService.update(params, this.id, this.pegawaiId).subscribe(
      () => {
        this.popUpID = "popup-success-update-pegawai";
        this.parent.popUpMessage = dictionary.update_data_success;
        this.parent.triggerPopUp();
        this.fetchData();
        this.resetForm();
        this.close();
      },
      (err) => {
        this.parent.popUpMessage = err.error.message;
        this.parent.triggerPopUp();
        this.close();
      }
    );
  }

  public delete(id: string): void {
    this.profileInformationService.delete(id).subscribe(
      () => {
        this.parent.popUpMessage = dictionary.delete_data_success;
        this.parent.triggerPopUp();
        this.fetchData();
        window.location.reload();
      },
      (err) => {
        this.parent.popUpMessage = err.error.message;
        this.parent.triggerPopUp();
      }
    );
  }

  public deleteConfirmation(id: string, name: string): void {
    const dialog: DialogRef = this.dialogService.open({
      title: "Konfirmasi",
      content: "Apakah " + name + " akan dihapus dari sistem ?",
      actions: [{ text: "Ya" }, { text: "Tidak", primary: true }],
      width: 450,
      height: 200,
      minWidth: 250,
    });

    dialog.result.subscribe((result) => {
      if (!(result instanceof DialogCloseResult) && result.text === "Ya") {
        this.delete(id);
      } 
    });
  }

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.fetchData();
  }
}
