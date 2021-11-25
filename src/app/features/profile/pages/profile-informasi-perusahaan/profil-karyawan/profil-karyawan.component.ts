import { Component, OnInit, ViewChild } from '@angular/core';
import { DataBindingDirective } from '@progress/kendo-angular-grid';
import { FileRestrictions } from '@progress/kendo-angular-upload';
import { FileService } from 'src/app/core/services/file.service';

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
  @ViewChild(DataBindingDirective)
  dataBinding!: DataBindingDirective;

  public columns = [
    {field: "nik", title:"NIK"}, 
    {field: "nama_pegawai", title:"Nama Pegawai"}, 
    {field: "tipe_karyawan", title:"Tipe Karyawan"}, 
    {field: "jabatan", title:"Jabatan"},
    {field: "bidang_pekerjaan", title:"Bidang Pekerjaan"}, 
    // {field: "resume", title:"Resume"}, 
  ];

  public dataKaryawan = [
    {
      nik: "848e6002-8a92-447d-951b-1ffd5e695578",
      nama_pegawai: "Sig Jeannel",
      jabatan: "Human Resources Assistant III",
      tipe_karyawan: 1,
      bidang_pekerjaan: "HR"
    },
    {
      id: "19d18d40-0e64-4837-9420-92130a0ed253",
      nama_pegawai: "Shelden Greyes",
      jabatan: "Operator",
      tipe_karyawan: 2,
      bidang_pekerjaan: "Engineering"
    },
    {
      nik: "bebdc6eb",
      nama_pegawai: "Megen Cody",
      jabatan: "Operator",
      tipe_karyawan: 3,
      bidang_pekerjaan: "Engineering"
    },
    {
      nik: "38b08b88",
      nama_pegawai: "Clevey Thursfield",
      jabatan: "VP Quality Control",
      tipe_karyawan: 2,
      bidang_pekerjaan: "Engineering"
    }
  ];
  
  public gridData = this.dataKaryawan;
  public gridView!: any[];

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
  
  public opened = false;

  constructor(
    private fileService: FileService
  ) { }

  public submitted = false;
  public selectedFile!: Array<any>;
  public uploadedFileContentUrl!: string;
  public uploadedFileId!: string;

  public fileRestrictions: FileRestrictions = {
    allowedExtensions: ["pdf", "doc", "docx"],
    maxFileSize: 20000000 //20 MB
  };

  ngOnInit(): void {
    this.gridView = this.gridData;
  }

  public close() {
    console.log(`Dialog result: ${status}`);
    this.opened = false;
  }

  public open() {
    this.opened = true;
  }

  upload(): void {
    console.log(this.selectedFile);
    this.fileService.upload(this.selectedFile[0]).subscribe(
      (res) => {
        this.uploadedFileContentUrl = res.contentUrl; // file url
        this.uploadedFileId = res["@id"]; //vendor :logo_id
      },
      (error) => {
        // this.popUpMessage = "Gagal memilih file, Silakan Coba Lagi!";
        // this.triggerPopUp();
        console.log(error);
      }
    );
  }

}
