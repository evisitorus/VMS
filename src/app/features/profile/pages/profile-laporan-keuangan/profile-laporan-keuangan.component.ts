import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FileRestrictions, SelectEvent } from '@progress/kendo-angular-upload';
import { ProfileKeuanganInterface, ProfileKeuanganNeracaInterface, ProfileKeuanganSPTInterface } from 'src/app/core/interfaces/profile-keuangan.interface';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';
import { FileService } from 'src/app/core/services/file.service';
import { ProfileKeuanganService } from 'src/app/core/services/profile/profile-keuangan.service';

@Component({
  selector: 'app-profile-laporan-keuangan',
  templateUrl: './profile-laporan-keuangan.component.html',
  styleUrls: ['./profile-laporan-keuangan.component.css']
})
export class ProfileLaporanKeuanganComponent implements OnInit {

  constructor(
    private service: ProfileKeuanganService,
    private eventEmitterService: EventEmitterService,
    private fileService: FileService
  ) { }

  ngOnInit(): void {
    this.setForm();
    this.fetchDataNeraca();
    this.fetchDataSPT();
    this.fetchDataKeuangan();
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
    maxFileSize: 2097152
  };
  public lampiranFiles!: Array<any>;
  public uploadedFileContentUrl!: string;
  public uploadedFileId!: string;
  public invalidFileExtension!: boolean;
  public invalidMaxFileSize!: boolean;

  public popUpTitle: string = "Profile Keuangan";
  public popUpMessage: string = ""

  public isNewData: boolean = true;
  public id!: string

  public dataNeraca: any = {
    tahun: "",
    aktiva: "",
    pasiva: "",
    equitas: "",
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
      equitas: new FormControl(this.dataNeraca.equitas, [Validators.required]),
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

  public resetForm(): void {
    this.dataNeraca.tahun = "";
    this.dataNeraca.aktiva = "";
    this.dataNeraca.pasiva = "";
    this.dataNeraca.equitas = "";
    this.dataNeraca.omzet = "";

    this.dataSPT.tahun = "";
    this.dataSPT.nomorDokumen = "";
    this.dataSPT.lampiran = "";

    this.dataKeuangan.namaBank = "";
    this.dataKeuangan.cabang = "";
    this.dataKeuangan.nomorRekening = "";
    this.dataKeuangan.namaPemilikRekening = "";
    this.dataKeuangan.modalDasar = "";
    this.dataKeuangan.modalDitempatkan = "";

    this.isNewData = true;

    this.setForm();
  }

  public triggerPopUp() {
    this.eventEmitterService.trigger();
  }

  public triggerModal(option: string): void {
    if (this.openNeraca === true || this.openSPT === true) {
      this.resetForm();
    }
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
        file: data[key]['file']
      };
    }
    return mappedData;
  }

  public updateFormNeraca(data: any): void {
    this.id = data.id;
    this.dataNeraca.tahun = data.tahun;
    this.dataNeraca.aktiva = data.aktiva;
    this.dataNeraca.pasiva = data.pasiva;
    this.dataNeraca.equitas = data.equitas;
    this.dataNeraca.omzet = data.omzet;

    this.isNewData = false;
    this.triggerModal('neraca');
    this.setForm();
  }

  public updateFormSPT(data: any): void {
    this.id = data.id;
    this.dataSPT.tahun = data.tahun;
    this.dataSPT.nomorDokumen = data.nomor;
    this.dataSPT.lampiran = data.lampiran;

    this.isNewData = false;
    this.triggerModal('spt');
    this.setForm();
  }

  public fetchDataNeraca(): void {
    this.service.fetchDataNeraca().subscribe(
      (resp) => {
        this.dataGridNeraca = resp['hydra:member'];
        this.dataGridNeraca = this.mapDataNeraca(this.dataGridNeraca);
      },
      () => {
        this.popUpMessage = "Gagal mendapatkan data Neraca";
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
        this.popUpMessage = "Gagal mendapatkan data SPT";
        this.triggerPopUp();
      }
    );
  }

  public fetchDataKeuangan(): void {
    this.service.fetchDataKeuangan().subscribe(
      (resp) => {
        let data = resp.data;
        this.dataKeuangan.namaBank = data.fromParty.name;
        this.dataKeuangan.cabang = data.cabang;
        this.dataKeuangan.nomorRekening = data.nomorRekening;
        this.dataKeuangan.namaPemilikRekening = data.namaPemilikRekening;
        this.dataKeuangan.modalDasar = data.toParty.modalDasar;
        this.dataKeuangan.modalDitempatkan = data.toParty.modalDitempatkan;
        this.setForm();
      },
      () => {
        this.popUpMessage = "Gagal mendapatkan data Keuangan";
        this.triggerPopUp();
      }
    );
  }

  public submitNeraca(): void {
    if (this.isNewData) {
      this.saveNeraca();
    } else {
      this.updateNeraca();
    }
  }

  public submitSPT(): void {
    if (this.lampiranFiles === null) {
      this.popUpMessage = "File tidak valid";
      this.triggerModal('spt');
      this.triggerPopUp();
    } else {
      if (this.isNewData) {
        this.saveSPT();
      } else {
        this.updateSPT();
      }
    }
  }

  public saveNeraca(): void {
    let params: ProfileKeuanganNeracaInterface = {
      tahun: this.formNeraca.value.tahun.toString(),
      aktiva: this.formNeraca.value.aktiva.toString(),
      pasiva: this.formNeraca.value.pasiva.toString(),
      equitas: this.formNeraca.value.equitas.toString(),
      omzet: this.formNeraca.value.omzet.toString(),
    };
    this.service.saveDataNeraca(params).subscribe(
      () => {
        this.popUpMessage = "Berhasil menyimpan data";
        this.triggerPopUp();
        this.fetchDataNeraca();
        this.triggerModal('neraca');
      },
      () => {
        this.popUpMessage = "Gagal menyimpan data";
        this.triggerPopUp();
        this.triggerModal('neraca');
      }
    );
  }

  public saveSPT(): void {
    let params: ProfileKeuanganSPTInterface = {
      tahunSPT: this.formSPT.value.tahunSPT,
      nomorDokumen: this.formSPT.value.nomorDokumen,
      lampiran: this.uploadedFileId,
      filename: this.uploadedFileContentUrl,
      submitDate: new Date()
    };
    this.service.saveDataSPT(params).subscribe(
      () => {
        this.popUpMessage = "Berhasil menyimpan data";
        this.triggerPopUp();
        this.fetchDataSPT();
        this.triggerModal('spt');
      },
      () => {
        this.popUpMessage = "Gagal menyimpan data";
        this.triggerPopUp();
        this.triggerModal('spt');
      }
    );
  }

  public updateNeraca(): void {
    let params : ProfileKeuanganNeracaInterface = {...this.formNeraca.value};
    this.service.updateDataNeraca(params, this.id).subscribe(
      () => {
        this.popUpMessage = "Berhasil memperbarui data";
        this.triggerPopUp();
        this.fetchDataNeraca();
        this.triggerModal('neraca');
      },
      () => {
        this.popUpMessage = "Gagal memperbarui data";
        this.triggerPopUp();
        this.triggerModal('neraca');
      }
    );
  }

  public updateSPT(): void {
    let params : ProfileKeuanganSPTInterface = {
      tahunSPT: this.formSPT.value.tahunSPT,
      nomorDokumen: this.formSPT.value.nomorDokumen,
      lampiran: this.uploadedFileId,
      filename: this.uploadedFileContentUrl,
      submitDate: new Date()
    };
    this.service.updateDataSPT(params, this.id).subscribe(
      () => {
        this.popUpMessage = "Berhasil memperbarui data";
        this.triggerPopUp();
        this.fetchDataSPT();
        this.triggerModal('spt');
      },
      () => {
        this.popUpMessage = "Gagal memperbarui data";
        this.triggerPopUp();
        this.triggerModal('spt');
      }
    );
  }

  public deleteNeraca(id: string): void {
    this.service.deleteDataNeraca(id).subscribe(
      () => {
        this.popUpMessage = "Berhasil menghapus data";
        this.triggerPopUp();
        this.fetchDataNeraca();
      },
      () => {
        this.popUpMessage = "Gagal menghapus data";
        this.triggerPopUp();
      }
    );
  }

  public deleteSPT(id: string): void {
    this.service.deleteDataSPT(id).subscribe(
      () => {
        this.popUpMessage = "Berhasil menghapus data";
        this.triggerPopUp();
        this.fetchDataSPT();
      },
      () => {
        this.popUpMessage = "Gagal menghapus data";
        this.triggerPopUp();
      }
    );
  }

  public postDataKeuangan(): void {
    let params: ProfileKeuanganInterface = {...this.formKeuangan.value};
    this.service.postDataKeuangan(params).subscribe(
      () => {
        this.popUpMessage = "Berhasil menyimpan data";
        this.triggerPopUp();
        this.fetchDataKeuangan();
      },
      () => {
        this.popUpMessage = "Gagal menyimpan data";
        this.triggerPopUp();
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
      () => {
        this.popUpMessage = "Gagal memilih file, Silakan Coba Lagi!";
        this.triggerPopUp();
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

}
