import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FileRestrictions } from '@progress/kendo-angular-upload';

@Component({
  selector: 'app-profile-laporan-keuangan',
  templateUrl: './profile-laporan-keuangan.component.html',
  styleUrls: ['./profile-laporan-keuangan.component.css']
})
export class ProfileLaporanKeuanganComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.setForm();
  }

  public openNeraca = false;
  public openSPT = false;

  public formNeraca!: FormGroup;
  public formSPT!: FormGroup;
  public formKeuangan!: FormGroup;

  public dataNeracaGrid: any[] = [];
  public dataSptGrid: any[] = [];

  public fileRestrictions: FileRestrictions = {
    allowedExtensions: ["jpg", "jpeg", "png", "pdf"],
  };
  public lampiranFiles!: Array<any>;
  public uploadedFileContentUrl!: string;
  public uploadedFileId!: string;

  public dataNeraca: any = {
    tahun: "",
    aktiva: "",
    pasiva: "",
    ekuitas: "",
    omzet: ""
  };

  public dataSPT: any = {
    tahun: "",
    nomorDokumen: "",
    lampiran: ""
  };

  public dataKeuangan: any = {
    namaBank: "",
    cabang: "",
    nomorRekening: "",
    namaPemilikRekening: "",

    modalDasar: "",
    modalDitempatkan: ""
  }

  public setForm(): void {
    this.formNeraca = new FormGroup({
      tahun: new FormControl(this.dataNeraca.tahun, [Validators.required]),
      aktiva: new FormControl(this.dataNeraca.aktiva, [Validators.required]),
      pasiva: new FormControl(this.dataNeraca.pasiva, [Validators.required]),
      ekuitas: new FormControl(this.dataNeraca.ekuitas, [Validators.required]),
      omzet: new FormControl(this.dataNeraca.omzet, [Validators.required]),
    });

    this.formSPT = new FormGroup({
      tahunSPT: new FormControl(this.dataSPT.tahun, [Validators.required]),
      nomorDokumen: new FormControl(this.dataSPT.nomorDokumen, [Validators.required]),
      lampiran: new FormControl(this.dataSPT.lampiran, [Validators.required]),
    });

    this.formKeuangan = new FormGroup({
      namaBank: new FormControl(this.dataKeuangan.namaBank, [Validators.required]),
      cabang: new FormControl(this.dataKeuangan.cabang, [Validators.required]),
      nomorRekening: new FormControl(this.dataKeuangan.nomorRekening, [Validators.required]),
      namaPemilikRekening: new FormControl(this.dataKeuangan.namaPemilikRekening, [Validators.required]),
      modalDasar: new FormControl(this.dataKeuangan.modalDasar, [Validators.required]),
      modalDitempatkan: new FormControl(this.dataKeuangan.modalDitempatkan, [Validators.required]),
    });
  }

  public triggerModal(option: string): void {
    switch (option) {
      case "neraca":
        this.openNeraca = !this.openNeraca;
        break;
      case "spt":
        this.openSPT = !this.openSPT;
        break
      default:
        break;
    }
  }

  public upload(): void {

  }

  public submit() {

  }

}
