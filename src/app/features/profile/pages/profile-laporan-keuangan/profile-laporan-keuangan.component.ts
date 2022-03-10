import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogCloseResult, DialogRef, DialogService } from '@progress/kendo-angular-dialog';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { FileRestrictions, SelectEvent } from '@progress/kendo-angular-upload';
import { ProfileKeuanganInterface, ProfileKeuanganNeracaInterface, ProfileKeuanganSPTInterface } from 'src/app/core/interfaces/profile-keuangan.interface';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';
import { FileService } from 'src/app/core/services/file.service';
import { ProfileKeuanganService } from 'src/app/core/services/profile/profile-keuangan.service';
import { dictionary } from 'src/app/dictionary/dictionary';

@Component({
  selector: 'app-profile-laporan-keuangan',
  templateUrl: './profile-laporan-keuangan.component.html',
  styleUrls: ['./profile-laporan-keuangan.component.css']
})
export class ProfileLaporanKeuanganComponent implements OnInit {

  constructor(
    private service: ProfileKeuanganService,
    private eventEmitterService: EventEmitterService,
    private fileService: FileService,
    private neracaDialogService: DialogService,
    private sptDialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.fetchListBank();
    this.setAllForm();
    this.fetchDataNeraca();
    this.fetchDataSPT();
    this.fetchDataKeuangan();
  }

  public maxLength = 13;

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

  public listNamaBank: Array<string> = [];

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

  public setAllForm(): void {
    this.setFormKeuangan();
    this.setFormNeraca();
    this.setFormSPT();
  }

  public setFormKeuangan(): void {
    this.formKeuangan = new FormGroup({
      namaBank: new FormControl(this.dataKeuangan.namaBank, [Validators.required]),
      cabang: new FormControl(this.dataKeuangan.cabang, [Validators.required]),
      nomorRekening: new FormControl(this.dataKeuangan.nomorRekening, [Validators.required]),
      namaPemilikRekening: new FormControl(this.dataKeuangan.namaPemilikRekening, [Validators.required]),
      modalDasar: new FormControl(this.dataKeuangan.modalDasar, [Validators.required]),
      modalDitempatkan: new FormControl(this.dataKeuangan.modalDitempatkan, [Validators.required]),
    });
    localStorage.getItem('disableEditData') === 'yes' ? this.formKeuangan.disable() : null;
  }

  public setFormNeraca(): void {
    this.formNeraca = new FormGroup({
      tahun: new FormControl(this.dataNeraca.tahun, [Validators.required]),
      aktiva: new FormControl(this.dataNeraca.aktiva, [Validators.required]),
      pasiva: new FormControl(this.dataNeraca.pasiva, [Validators.required]),
      equitas: new FormControl(this.dataNeraca.equitas, [Validators.required]),
      omzet: new FormControl(this.dataNeraca.omzet, [Validators.required]),
    });
    localStorage.getItem('disableEditData') === 'yes' ? this.formNeraca.disable() : null;
  }

  public setFormSPT(): void {
    this.formSPT = new FormGroup({
      tahunSPT: new FormControl(this.dataSPT.tahun, [Validators.required]),
      nomorDokumen: new FormControl(this.dataSPT.nomorDokumen, [Validators.required]),
      // lampiran: new FormControl(this.dataSPT.lampiran, [Validators.required]),
    });
    localStorage.getItem('disableEditData') === 'yes' ? this.formSPT.disable() : null;

  }

  public resetAllForm(): void {
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

    this.setAllForm();
  }

  public resetFormKeuangan(): void {
    this.dataKeuangan.namaBank = "";
    this.dataKeuangan.cabang = "";
    this.dataKeuangan.nomorRekening = "";
    this.dataKeuangan.namaPemilikRekening = "";
    this.dataKeuangan.modalDasar = "";
    this.dataKeuangan.modalDitempatkan = "";
    this.isNewData = true;
    this.setFormKeuangan();
  }

  public resetFormNeraca(): void {
    this.dataNeraca.tahun = "";
    this.dataNeraca.aktiva = "";
    this.dataNeraca.pasiva = "";
    this.dataNeraca.equitas = "";
    this.dataNeraca.omzet = "";
    this.isNewData = true;
    this.setFormNeraca();
  }

  public resetFormSPT(): void {
    this.dataSPT.tahun = "";
    this.dataSPT.nomorDokumen = "";
    this.dataSPT.lampiran = "";
    this.isNewData = true;
    this.setFormSPT();
  }

  public triggerPopUp() {
    this.eventEmitterService.trigger();
  }

  public triggerModal(option: string): void {
    switch (option) {
      case "neraca":
        if (this.openNeraca === true) {
          this.resetFormNeraca();
        }
        this.openNeraca = !this.openNeraca;
        break;
      case "spt":
        if (this.openSPT === true) {
          this.resetFormSPT();
        }
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
        tahun: parseInt(data[key]['year']),
        asset: parseInt(data[key]['asset']),
        aktiva: parseInt(data[key]['aktiva']),
        pasiva: parseInt(data[key]['pasiva']),
        equitas: parseInt(data[key]['equitas']),
        omzet: parseInt(data[key]['omzetBersih']),
        deletedAt: data[key]['deletedAt']
      };
    }
    return mappedData;
  }

  public mapDataSPT(data: any[]): any[] {
    let mappedData:any[] = [];
    for (const key in data) {
      mappedData[key] = {
        id: data[key]['id'],
        tahun: parseInt(data[key]['year']),
        submitDate: formatDate(data[key]['submitDate'], "dd-MM-YYYY hh:mm:ss", "en-US"),
        nomor: data[key]['number'],
        lampiran: data[key]['attachmentFilePath'],
        file: data[key]['file'],
        deletedAt: data[key]['deletedAt'],
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
    this.setFormNeraca();
  }

  public updateFormSPT(data: any): void {
    this.id = data.id;
    this.dataSPT.tahun = data.tahun;
    this.dataSPT.nomorDokumen = data.nomor;
    this.dataSPT.lampiran = data.lampiran;

    this.isNewData = false;
    this.triggerModal('spt');
    this.setFormSPT();
  }

  public fetchDataNeraca(): void {
    this.service.fetchDataNeraca().subscribe(
      (resp) => {
        this.dataGridNeraca = resp['hydra:member'];
        this.dataGridNeraca = this.mapDataNeraca(this.dataGridNeraca);
        this.loadItemsNeraca();
      },
      (err) => {
        this.popUpMessage = err.error.message;
        this.triggerPopUp();
      }
    );
  }

  public fetchDataSPT(): void {
    this.service.fetchDataSPT().subscribe(
      (resp) => {
        this.dataGridSPT = resp['hydra:member'];
        this.dataGridSPT = this.mapDataSPT(this.dataGridSPT);
        this.loadItemsSPT();
      },
      (err) => {
        this.popUpMessage = err.error.message;
        this.triggerPopUp();
      }
    );
  }

  public fetchDataKeuangan(): void {
    this.service.fetchDataKeuangan().subscribe(
      (resp) => {
        if (resp.data) {
          let data = resp.data[0];
          this.dataKeuangan.namaBank = data.fromParty.name;
          this.dataKeuangan.cabang = data.cabang;
          this.dataKeuangan.nomorRekening = data.nomorRekening;
          this.dataKeuangan.namaPemilikRekening = data.namaPemilikRekening;
          this.dataKeuangan.modalDasar = parseInt(data.toParty.modalDasar);
          this.dataKeuangan.modalDitempatkan = parseInt(data.toParty.modalDitempatkan);
          this.setFormKeuangan();
        }
      },
      (err) => {
        this.popUpMessage = err.error.message;
        this.triggerPopUp();
      }
    );
  }

  public fetchListBank(): void {
    this.service.fetchListBank().subscribe(
      (resp) => {
        const data = resp.data;
        for (let key in data) {
          this.listNamaBank.push(data[key]['name']);
        }
      },
      (err) => {
        this.popUpMessage = err.error.message;
        this.triggerPopUp();
      }
    );
  }

  public submitNeraca(): void {
    this.formNeraca.markAllAsTouched();
    if (this.formNeraca.valid) {
      if (this.isNewData) {
        this.saveNeraca();
      } else {
        this.updateNeraca();
      }
    }
  }

  public submitSPT(): void {
    if (this.lampiranFiles === null || this.lampiranFiles === undefined) {
      this.popUpMessage = dictionary.invalid_file;
      this.triggerModal('spt');
      this.triggerPopUp();
    } else {
      this.formSPT.markAllAsTouched();
      if (this.formSPT.valid) {
        if (this.isNewData) {
          this.saveSPT();
        } else {
          this.updateSPT();
        }
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
        this.popUpMessage = dictionary.save_data_success;
        this.triggerPopUp();
        this.fetchDataNeraca();
        this.triggerModal('neraca');
      },
      (err) => {
        this.popUpMessage = err.error.message;
        this.triggerPopUp();
        this.triggerModal('neraca');
      }
    );
  }

  public saveSPT(): void {
    let params: ProfileKeuanganSPTInterface = {
      tahunSPT: this.formSPT.value.tahunSPT.toString(),
      nomorDokumen: this.formSPT.value.nomorDokumen,
      lampiran: this.uploadedFileId,
      filename: this.uploadedFileContentUrl,
      submitDate: new Date()
    };
    this.service.saveDataSPT(params).subscribe(
      () => {
        this.popUpMessage = dictionary.save_data_success;
        this.triggerPopUp();
        this.fetchDataSPT();
        this.triggerModal('spt');
      },
      (err) => {
        this.popUpMessage = err.error.message;
        this.triggerPopUp();
        this.triggerModal('spt');
      }
    );
  }

  public updateNeraca(): void {
    let params : ProfileKeuanganNeracaInterface = {
      tahun: this.formNeraca.value.tahun.toString(),
      aktiva: this.formNeraca.value.aktiva.toString(),
      pasiva: this.formNeraca.value.pasiva.toString(),
      equitas: this.formNeraca.value.equitas.toString(),
      omzet: this.formNeraca.value.omzet.toString()
    };
    this.service.updateDataNeraca(params, this.id).subscribe(
      () => {
        this.popUpMessage = dictionary.update_data_success;
        this.triggerPopUp();
        this.fetchDataNeraca();
        this.triggerModal('neraca');
      },
      (err) => {
        this.popUpMessage = err.error.message;
        this.triggerPopUp();
        this.triggerModal('neraca');
      }
    );
  }

  public updateSPT(): void {
    let params : ProfileKeuanganSPTInterface = {
      tahunSPT: this.formSPT.value.tahunSPT.toString(),
      nomorDokumen: this.formSPT.value.nomorDokumen,
      lampiran: this.uploadedFileId,
      filename: this.uploadedFileContentUrl,
      submitDate: new Date()
    };
    this.service.updateDataSPT(params, this.id).subscribe(
      () => {
        this.popUpMessage = dictionary.update_data_success;
        this.triggerPopUp();
        this.fetchDataSPT();
        this.triggerModal('spt');
      },
      (err) => {
        this.popUpMessage = err.error.message;
        this.triggerPopUp();
        this.triggerModal('spt');
      }
    );
  }

  public deleteNeraca(id: string): void {
    this.service.deleteDataNeraca(id).subscribe(
      () => {
        this.popUpMessage = dictionary.delete_data_success;
        this.triggerPopUp();
        this.fetchDataNeraca();
      },
      (err) => {
        this.popUpMessage = err.error.message;
        this.triggerPopUp();
      }
    );
  }

  public deleteSPT(id: string): void {
    this.service.deleteDataSPT(id).subscribe(
      () => {
        this.popUpMessage = dictionary.delete_data_success;
        this.triggerPopUp();
        this.fetchDataSPT();
      },
      (err) => {
        this.popUpMessage = err.error.message;
        this.triggerPopUp();
      }
    );
  }

  public deleteConfirmation(type: string, id: string, name: string): void {
    if (type === "neraca") {
      const dialog: DialogRef = this.neracaDialogService.open({
        title: "Konfirmasi",
        content: "Apakah neraca tahun " + name + " akan dihapus dari sistem ?",
        actions: [{ text: "Tidak" }, { text: "Ya", primary: true }],
        width: 450,
        height: 200,
        minWidth: 250,
      });

      dialog.result.subscribe((result) => {
        if (!(result instanceof DialogCloseResult) && result.text === "Ya") {
          this.deleteNeraca(id);
        }
      });
    } else {
      const dialog: DialogRef = this.sptDialogService.open({
        title: "Konfirmasi",
        content: "Apakah SPT tahun " + name + " akan dihapus dari sistem ?",
        actions: [{ text: "Tidak" }, { text: "Ya", primary: true }],
        width: 450,
        height: 200,
        minWidth: 250,
      });

      dialog.result.subscribe((result) => {
        if (!(result instanceof DialogCloseResult) && result.text === "Ya") {
          this.deleteSPT(id);
        }
      });
    }
  }

  public postDataKeuangan(): void {
    this.formKeuangan.markAllAsTouched();
    if (this.formKeuangan.valid) {
      let params: ProfileKeuanganInterface = {
        namaBank: this.formKeuangan.value.namaBank,
        cabang: this.formKeuangan.value.cabang,
        nomorRekening: this.formKeuangan.value.nomorRekening,
        namaPemilikRekening: this.formKeuangan.value.namaPemilikRekening,
        modalDasar: this.formKeuangan.value.modalDasar.toString(),
        modalDitempatkan: this.formKeuangan.value.modalDitempatkan.toString(),
      };
      this.service.postDataKeuangan(params).subscribe(
        () => {
          this.popUpMessage = dictionary.save_data_success;
          this.triggerPopUp();
          this.fetchDataKeuangan();
        },
        (err) => {
          this.popUpMessage = err.error.message;
          this.triggerPopUp();
        }
      );
    }
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
      (err) => {
        this.popUpMessage = err.error.message;
        this.triggerPopUp();
      }
    );
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

  public gridViewNeraca!: GridDataResult;
  public gridViewSPT!: GridDataResult;
  public skip: number = 0;
  public pageSize: number = 5;

  public pageChangeNeraca(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadItemsNeraca();
  }
  private loadItemsNeraca(): void {
    this.gridViewNeraca = {
      data: this.dataGridNeraca.slice(this.skip, this.skip + this.pageSize),
      total: this.dataGridNeraca.length,
    };
  }

  public pageChangeSPT(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadItemsSPT();
  }
  private loadItemsSPT(): void {
    this.gridViewSPT = {
      data: this.dataGridSPT.slice(this.skip, this.skip + this.pageSize),
      total: this.dataGridSPT.length,
    };
  }

}
