import { Component, OnInit, ViewChild } from '@angular/core';
import { FileRestrictions } from '@progress/kendo-angular-upload';

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
  @ViewChild('panelbar') private panelbar: any;

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
  constructor() { }

  public submitted = false;
  public selectedFile!: Array<any>;
  public uploadedFileContentUrl!: string;
  public uploadedFileId!: string;

  public fileRestrictions: FileRestrictions = {
    allowedExtensions: ["pdf", "doc", "docx"],
    maxFileSize: 20000000 //20 MB
  };
  

  public dataKaryawan = [
    {
      nik: "848e6002-8a92-447d-951b-1ffd5e695578",
      nama: "Sig Jeannel",
      jabatan: "Human Resources Assistant III",
      tipe_karyawan_id: 1,
      bidang_pekerjaan: "HR"
    },
    {
      id: "19d18d40-0e64-4837-9420-92130a0ed253",
      nama: "Shelden Greyes",
      jabatan: "Operator",
      tipe_karyawan_id: 2,
      bidang_pekerjaan: "Engineering"
    },
    {
      nik: "bebdc6eb",
      nama: "Megen Cody",
      jabatan: "Operator",
      tipe_karyawan_id: 3,
      bidang_pekerjaan: "Engineering"
    },
    {
      nik: "38b08b88",
      nama: "Clevey Thursfield",
      jabatan: "VP Quality Control",
      tipe_karyawan_id: 2,
      bidang_pekerjaan: "Engineering"
    }
  ];

  ngOnInit(): void {
  }

  public close() {
    console.log(`Dialog result: ${status}`);
    this.opened = false;
  }

  public open() {
    this.opened = true;
  }

}
