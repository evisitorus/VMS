import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DataBindingDirective } from '@progress/kendo-angular-grid';
import { FileRestrictions } from '@progress/kendo-angular-upload';
import { FileService } from 'src/app/core/services/file.service';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';

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

  public dataKaryawan = [
    {
      "nik": "848e6002-8a92-447d-951b-1ffd5e695578",
      "nama_pegawai": "Sig Jeannel",
      "tipe_karyawan": 1,
      "jabatan": "Human Resources Assistant III",
      "bidang_pekerjaan": "HR"
    },
    {
      "nik": "19d18d40-0e64-4837-9420-92130a0ed253",
      "nama_pegawai": "Shelden Greyes",
      "tipe_karyawan": 2,
      "jabatan": "Operator",
      "bidang_pekerjaan": "Engineering"
    },
    {
      "nik": "bebdc6eb",
      "nama_pegawai": "Megen Cody",
      "tipe_karyawan": 3,
      "jabatan": "Operator",
      "bidang_pekerjaan": "Engineering"
    },
    {
      "nik": "38b08b88",
      "nama_pegawai": "Clevey Thursfield",
      "tipe_karyawan": 2,
      "jabatan": "VP Quality Control",
      "bidang_pekerjaan": "Engineering"
    }
  ];
  
  public gridData: any = {};
  // public gridView!: any[];

  popUpTitle: string = "Informasi Pemegang Saham";
  popUpMessage: string = messages.default;
  redirectOnClosePopUp: boolean = true;

  public tipeKaryawan: Array<Item> = [{ 
      id: 1,
      name: "Tenaga Ahli"
    },{
      id: 2,
      name: "Tenaga Terampil"
    },{
      id: 3,
      name: "Tenaga Administrasi"
  }];

  public pegawaiFormGroup = new FormGroup({});
  
  public opened = false;

  constructor(
    private fileService: FileService,
    private eventEmitterService: EventEmitterService,
  ) { }

  public submitted = false;
  public selectedFile!: Array<any>;
  public uploadedFileContentUrl!: string;
  public uploadedFileId!: string;

  public fileRestrictions: FileRestrictions = {
    allowedExtensions: ["pdf", "doc", "docx"],
    maxFileSize: 20971520 //20 MB
  };

  ngOnInit(): void {
    // this.gridView = this.gridData;
    this.gridData = this.dataKaryawan;
  }

  public submitProfilKaryawan(): void {
    this.pegawaiFormGroup.markAllAsTouched();
  }

  public close() {
    console.log(`Dialog result: ${status}`);
    this.opened = false;
  }

  public open() {
    this.opened = true;
  }

  public upload(): void {
    console.log(this.selectedFile);
    this.fileService.upload(this.selectedFile[0]).subscribe(
      (res) => {
        this.uploadedFileContentUrl = res.contentUrl; // file url
        this.uploadedFileId = res["@id"]; //vendor :logo_id
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
        let url= window.URL.createObjectURL(blob);
        window.open(url);
      },
      () => {
        this.popUpMessage = "Gagal mengunduh file, Silakan Coba Lagi!";
        this.triggerPopUp();
      }
    );
  }

  triggerPopUp():void  {
    this.eventEmitterService.trigger();
  }

}
