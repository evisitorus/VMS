import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { FileRestrictions } from '@progress/kendo-angular-upload';
import { FileService } from 'src/app/core/services/file.service';
import { ProfilePimpinanDanPengurusInterface } from 'src/app/core/interfaces/profile/profile-pimpinan-dan-pengurus.interface';
import { PimpinanDanPengurusService } from 'src/app/core/services/profile/profile-pic/pimpinan-dan-pengurus.service';
import { DialogCloseResult, DialogRef, DialogService } from '@progress/kendo-angular-dialog';
import { ProfileInformasiPerusahaanComponent } from '../../profile-informasi-perusahaan/profile-informasi-perusahaan.component';

interface Item {
  name: string;
  id: number;
}

const messages = {
  default: 'Data tidak boleh kosong.',
  success: 'Sukses'
};

@Component({
  selector: 'app-profil-pimpinan-dan-pengurus',
  templateUrl: './profil-pimpinan-dan-pengurus.component.html',
  styleUrls: ['./profil-pimpinan-dan-pengurus.component.css']
})
export class ProfilPimpinanDanPengurusComponent implements OnInit {

  public gridDataPengurus: any = {};
  public gridViewPengurus!: GridDataResult;
  public pageSize = 5;
  public skip = 0;

  public id!: string;
  public pengurusId!: string;
  public isNewData: boolean = true;

  popUpID: string = "";
  popUpTitle: string = "";
  popUpMessage: string = messages.default;
  redirectOnClosePopUp: boolean = true;

  public tipeSource: Array<Item> = [];
  public bidangSource: Array<Item> = [];

  public pengurusFormGroup!: FormGroup;

  public opened = false;

  public submitted = false;
  public selectedFile!: Array<any>;
  public uploadedFileContentUrl!: string;
  public uploadedFileId!: string;

  public fileRestrictions: FileRestrictions = {
    allowedExtensions: ["pdf", "jpg", "png", "jpeg"],
    maxFileSize: 2097152 //2 MB
  };

  public data: any = {
    nik: null,
    firstName: null,
    lastName: null,
    jabatan: null,
    kartuIdentitas: null,
  };

  public bidangTemp: Array<Item> = [];

  // add new bidang value based on user input
  public filter!: string;
  public selectedBidang!: Item ;
  public selectedBidangId:string = "";

  constructor(
    private fileService: FileService,
    private pimpinanDanPengurusService: PimpinanDanPengurusService,
    private dialogService: DialogService,
    private parent: ProfileInformasiPerusahaanComponent,
  ) {
    this.bidangTemp = this.bidangSource.slice(0);
  }

  ngOnInit(): void {
    this.fetchData();

  }

  public fetchData(): void {
    this.setForm();

    this.pimpinanDanPengurusService.getPimpinanDanPengurus().subscribe(
      (response) => {
        this.gridDataPengurus = response.data;
        this.gridViewPengurus = {
          data: this.gridDataPengurus.slice(this.skip, this.skip + this.pageSize),
          total: this.gridDataPengurus.length,
        }
        return this.gridDataPengurus;
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
    this.data.jabatan = null;
    this.data.kartuIdentitas = null;
    this.setForm();

  }

  public setForm(): void {
    this.pengurusFormGroup = new FormGroup({
      nik: new FormControl(this.data.nik ? parseInt(this.data.nik) : null, Validators.required),
      firstName: new FormControl(this.data.firstName, Validators.required),
      lastName: new FormControl(this.data.lastName, Validators.required),
      jabatan: new FormControl(this.data.jabatan, Validators.required)
    });
  }


  public submitProfilPimpinanDanPengurus(): void {
    if( this.uploadedFileContentUrl === null || this.selectedFile === null){
      this.popUpID = "popup-wrong-file";
      this.parent.popUpMessage = "Periksa kembali file Anda";
      this.parent.triggerPopUp();
    } else {
      this.pengurusFormGroup.markAllAsTouched();
      if (this.pengurusFormGroup.valid) {
        if (this.isNewData) {
          this.save();
        } else {
          this.update();
        }
      }
    }
    

  }

  public addPengurus(){
    this.popUpTitle = "Tambah Pimpinan";
    this.resetForm();
    this.open();
  }

  public save(): void {
    this.popUpTitle = "Tambah Pimpinan";
    let file_id = this.extractNumber(this.uploadedFileId);
    let params: ProfilePimpinanDanPengurusInterface = {
      nik: this.pengurusFormGroup.value.nik.toString(),
      firstName: this.pengurusFormGroup.value.firstName,
      lastName: this.pengurusFormGroup.value.lastName,
      jabatan:this.pengurusFormGroup.value.jabatan,
      file: file_id,
      kartuIdentitas: this.uploadedFileContentUrl
    };
    this.pimpinanDanPengurusService.addProfilPimpinanDanPengurus(params).subscribe(
      () => {
        this.parent.popUpMessage = "Berhasil menyimpan data, silakan ajukan verifikasi";
        this.parent.triggerPopUp();
        this.fetchData();
        this.close();
      },
      () => {
        this.parent.popUpMessage = "Gagal menyimpan data";
        this.parent.triggerPopUp();
        this.close();
      }
    );
  }

  public close() {
    this.opened = false;
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
        this.popUpID = "popup-upload-file-failed";
        this.parent.popUpMessage = "Gagal memilih file, Silakan Coba Lagi!";
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
        this.parent.popUpMessage = "Gagal mengunduh file, Silakan Coba Lagi!";
        this.parent.triggerPopUp();
      }
    );
  }

  public updateForm(data: any): void {
    this.popUpID = "popup-edit-data-pengurus";
    this.popUpTitle = "Edit Data Pimpinan";
    this.id = data.id;
    this.pengurusId = data.fromParty.id;
    this.data.nik = data.nik;
    this.data.firstName = data.fromParty.firstName;
    this.data.lastName = data.fromParty.lastName;
    this.data.jabatan = data.jabatan;
    this.data.kartuIdentitas = data.kartuIdentitas;

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
    let params: ProfilePimpinanDanPengurusInterface = {
      nik: this.pengurusFormGroup.value.nik.toString(),
      firstName: this.pengurusFormGroup.value.firstName,
      lastName: this.pengurusFormGroup.value.lastName,
      jabatan:this.pengurusFormGroup.value.jabatan,
      file: file_id,
      kartuIdentitas: this.uploadedFileContentUrl
    };
    //send pengurus ID and sdm relationship ID
    this.pimpinanDanPengurusService.update(params, this.id, this.pengurusId).subscribe(
      () => {
        this.popUpID = "popup-success-update-pengurus";
        this.parent.popUpMessage = "Berhasil memperbarui data, silakan ajukan verifikasi";
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
    this.pimpinanDanPengurusService.delete(id).subscribe(
      () => {
        this.parent.popUpMessage = "Berhasil menghapus data";
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
    this.loadItems();
  }

  private loadItems(): void {
    this.gridViewPengurus = {
      data: this.gridDataPengurus.slice(this.skip, this.skip + this.pageSize),
      total: this.gridDataPengurus.length,
    };
  }


}
