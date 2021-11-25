import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FileRestrictions } from '@progress/kendo-angular-upload';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';
import { ProfileKeuanganService } from 'src/app/core/services/profile/profile-keuangan.service';

@Component({
  selector: 'app-profile-laporan-keuangan',
  templateUrl: './profile-laporan-keuangan.component.html',
  styleUrls: ['./profile-laporan-keuangan.component.css']
})
export class ProfileLaporanKeuanganComponent implements OnInit {

  constructor(
    private service: ProfileKeuanganService,
    private eventEmitterService: EventEmitterService
  ) { }

  ngOnInit(): void {
    this.setForm();
    this.fetchDataNeraca();
    this.fetchDataSPT();
  }

  public openNeraca = false;
  public openSPT = false;

  public formNeraca!: FormGroup;
  public formSPT!: FormGroup;
  public formKeuangan!: FormGroup;

  public dataGridNeraca: any[] = [];
  public dataGridSPT: any[] = [];

  public fileRestrictions: FileRestrictions = {
    allowedExtensions: ["jpg", "jpeg", "png", "pdf"],
  };
  public lampiranFiles!: Array<any>;
  public uploadedFileContentUrl!: string;
  public uploadedFileId!: string;

  public popUpTitle: string = "Profile Keuangan";
  public popUpMessage: string = ""

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

  triggerPopUp() {
    this.eventEmitterService.trigger();
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

  public mapDataNeraca(data: any[]): any[] {
    let mappedData:any[] = [];
    for (const key in data) {
      mappedData[key] = {
        id: data[key]['id'],
        tahun: data[key]['year'],
        asset: data[key]['asset'],
        aktiva: data[key]['aktiva'],
        pasiva: data[key]['pasiva'],
        equitas: data[key]['equitas'],
        omzet: data[key]['omzetBersih']
      };
    }
    return mappedData;
  }

  public mapDataSPT(data: any[]): any[] {
    let mappedData:any[] = [];
    for (const key in data) {
      mappedData[key] = {
        id: data[key]['id'],
        tahun: data[key]['year'],
        submitDate: formatDate(data[key]['submitDate'], "dd-MM-YYYY hh:mm:ss", "en-US"),
        nomor: data[key]['number'],
        lampiran: data[key]['attachmentFilePath'],
      };
    }
    return mappedData;
  }

  public updateFormNeraca(data: any): void {

  }

  public updateFormSPT(data: any): void {

  }

  public fetchDataNeraca(): void {
    this.service.fetchDataNeraca().subscribe(
      (resp) => {
        this.dataGridNeraca = resp['hydra:member'];
        this.dataGridNeraca = this.mapDataNeraca(this.dataGridNeraca);
      },
      () => {
        this.popUpMessage = "Gagal mendapatkan data";
        this.triggerPopUp();
      }
    );
  }

  public fetchDataSPT(): void {
    this.service.fetchDataSPT().subscribe(
      (resp) => {
        this.dataGridSPT = resp['hydra:member'];
        this.dataGridSPT = this.mapDataSPT(this.dataGridSPT);
      },
      () => {
        this.popUpMessage = "Gagal mendapatkan data";
        this.triggerPopUp();
      }
    );
  }

  public submitNeraca(): void {

  }

  public submitSPT(): void {

  }

  public deleteNeraca(id: string): void {

  }

  public deleteSPT(id: string): void {
    
  }

  public upload(): void {

  }

}
