import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataBindingDirective } from '@progress/kendo-angular-grid';
import { FileRestrictions } from '@progress/kendo-angular-upload';
import { FileService } from 'src/app/core/services/file.service';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';
import { ProfileKaryawanInterface } from 'src/app/core/interfaces/profile-karyawan.interface';
import { ProfileInformationService } from 'src/app/core/services/profile/profile-information.service';
import { ApiRoutes } from "src/app/core/services/api/api-routes";

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
  public id!: string;
  public pegawaiId!: string;
  public isNewData: boolean = true;

  popUpTitle: string = "Informasi Pemegang Saham";
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
    maxFileSize: 20971520 //20 MB
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
    private eventEmitterService: EventEmitterService,
  ) {
    //extract from 0
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
      },
      (error) => {
        console.log(error);
      }
    );

    this.profileInformationService.getKaryawan().subscribe(
      (response) => {
        this.gridDataPegawai = response.data;
      },
      () => {
        this.popUpMessage = "Gagal mendapatkan data";
        this.triggerPopUp();
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
    this.setForm();

  }

  public setForm(): void {
    this.pegawaiFormGroup = new FormGroup({
      nik: new FormControl(this.data.nik, Validators.required),
      firstName: new FormControl(this.data.firstName, Validators.required),
      lastName: new FormControl(this.data.lastName, Validators.required),
      tipeKaryawan: new FormControl(this.data.tipeKaryawan, Validators.required),
      jabatan: new FormControl(this.data.jabatan, Validators.required),
      bidangPekerjaan: new FormControl(this.data.bidangPekerjaan, Validators.required)
    });
  }

  public submitProfilKaryawan(): void {
    if( this.uploadedFileContentUrl === null){
      this.popUpMessage = "File tidak valid";
      this.close();
      this.triggerPopUp();
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
        this.selectedBidangId = res.id;
        this.popUpMessage = "Berhasil menambahkan bidang pekerjaan ke database";
        this.triggerPopUp();
      },
      (error) => {
        this.popUpMessage = "Gagal menambahkan bidang pekerjaan";
        this.triggerPopUp();
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

  public save(): void {
    let file_id = this.uploadedFileId.replace(/\D/g,'');
    let bidang_id = (this.selectedBidangId) ? this.selectedBidangId : this.pegawaiFormGroup.value.bidangPekerjaan.id;
    let params: ProfileKaryawanInterface = {
      nik: this.pegawaiFormGroup.value.nik,
      firstName: this.pegawaiFormGroup.value.firstName,
      lastName: this.pegawaiFormGroup.value.lastName,
      tipeKaryawan: this.pegawaiFormGroup.value.tipeKaryawan.id,
      jabatan:this.pegawaiFormGroup.value.jabatan,
      bidangPekerjaan:bidang_id,
      file: file_id,
      attachmentFilePath: this.uploadedFileContentUrl
    };

    this.profileInformationService.addProfilKaryawan(params).subscribe(
      () => {
        this.popUpMessage = "Berhasil menyimpan data";
        this.triggerPopUp();
        this.fetchData();
        this.close();
      },
      () => {
        this.popUpMessage = "Gagal menyimpan data";
        this.triggerPopUp();
        this.close();
      }
    );
  }

  public close() {
    this.opened = false;
    this.resetForm();
    this.isNewData = true;
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
        this.popUpMessage = "Gagal memilih file, Silakan Coba Lagi!";
        this.triggerPopUp();
        console.log(error);
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
        console.log(error)
        this.popUpMessage = "Gagal mengunduh file, Silakan Coba Lagi!";
        this.triggerPopUp();
      }
    );
  }

  public updateForm(data: any): void {
    this.id = data.id;
    this.pegawaiId = data.fromParty.id;
    this.data.nik = data.nik;
    this.data.firstName = data.fromParty.firstName;
    this.data.lastName = data.fromParty.lastName;
    this.data.tipeKaryawan = data.sdmType;
    this.data.jabatan = data.jabatan;
    this.selectedBidang = data.sdmBidang;
    this.data.cvFilePath = data.cvFilePath;

    this.isNewData = false;

    this.setForm();
    this.open();

  }


  public update(): void {
    let file_id = "";
    if(this.uploadedFileId){
      file_id = this.uploadedFileId.replace(/\D/g,'');
    }
    let bidang_id = (this.selectedBidangId) ? this.selectedBidangId : this.pegawaiFormGroup.value.bidangPekerjaan.id;
    let params: ProfileKaryawanInterface = {
      nik: this.pegawaiFormGroup.value.nik,
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
        this.popUpMessage = "Berhasil memperbarui data";
        this.triggerPopUp();
        this.fetchData();
        this.close();
      },
      (err) => {
        this.popUpMessage = err.error.message;
        this.triggerPopUp();
        this.close();
      }
    );
  }

  public delete(id: string): void {
    this.profileInformationService.delete(id).subscribe(
      () => {
        this.popUpMessage = "Berhasil menghapus data";
        this.triggerPopUp();
        this.fetchData();
      },
      (err) => {
        this.popUpMessage = err.error.message;
        this.triggerPopUp();
      }
    );
  }

  triggerPopUp(): void {
    this.eventEmitterService.trigger();
  }

}
