import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogCloseResult, DialogRef, DialogService } from '@progress/kendo-angular-dialog';
import { FileRestrictions, SelectEvent } from '@progress/kendo-angular-upload';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';
import { FileService } from 'src/app/core/services/file.service';
import { ProfileAspekLegalService } from 'src/app/core/services/profile/profile-aspek-legal.service';
import { dictionary } from 'src/app/dictionary/dictionary';
import { ProfileAspekLegalComponent } from '../../profile-aspek-legal.component';

@Component({
  selector: 'app-sertifikasi-dok-khusus',
  templateUrl: './sertifikasi-dok-khusus.component.html',
  styleUrls: ['./sertifikasi-dok-khusus.component.css']
})
export class SertifikasiDokKhususComponent implements OnInit {

  public form!: FormGroup;
  public gridData: any[] = [];
  public opened: boolean = false;
  public isNewData: boolean = true;

  public popUpTitle: string = "Sertifikasi dan Dokumen Khusus";
  public popUpMessage: string = "";

  public fileRestrictions: FileRestrictions = {
    allowedExtensions: ["jpg", "jpeg", "png", "pdf"],
    maxFileSize: 2097152
  };
  public lampiranFiles!: Array<any>;

  public uploadedFileContentUrl!: string;
  public uploadedFileId!: string;
  public invalidFileExtension!: boolean;
  public invalidMaxFileSize!: boolean;

  public data: any = {
    id: "",
    namaDokumen: "",
    tanggalTerbit: "",
    tanggalExpired: "",
    lampiran: ""
  };

  constructor(
    public parent: ProfileAspekLegalComponent,
    public profilApekLegalService: ProfileAspekLegalService,
    private eventEmitterService: EventEmitterService,
    private fileService: FileService,
    private dialogService: DialogService
  ) {
    this.setForm();
  }

  ngOnInit(): void {
    this.fetchData();
  }

  public open(): void {
    this.opened = true;
  }

  public close(): void {
    this.opened = false;
    this.resetForm();
    this.isNewData = true;
  }

  public fetchData(): void {
    this.profilApekLegalService.getAspekLegal().subscribe(
      (response) => {
        this.gridData = response.dokumenLain['hydra:member'];
        this.gridData = this.mapData(this.gridData);

      },
      (err) => {
        this.parent.popUpMessage = err.error.message;
        this.parent.triggerPopUp();
      }
    );
  }

  public mapData(data: any[]): any[] {
    let mappedData: any[] = [];
    for (const key in data) {
      mappedData[key] = {
        no: data[key]['nomorDokumen'],
        namaDokumen: data[key]['namaDokumen'],
        tipeDokumen: data[key]['tipeDokumen'],
        tanggalTerbit: formatDate(data[key]['submitDate'], "dd-MM-YYYY", "en-US"),
        tanggalExpired: data[key]['berlakuSampai'] !== undefined ? formatDate(data[key]['berlakuSampai'], "dd-MM-YYYY", "en-US") : "Seumur Hidup",
        lampiran: data[key]['attachmentFilePath'],
        file: data[key]['file'],
        id: data[key]['id'],
        deletedAt: data[key]['deletedAt']
      };
    }
    return mappedData;
  }

  public setForm(): void {
    this.form = new FormGroup({
      namaDokumen: new FormControl(this.data.namaDokumen, Validators.required),
      tanggalTerbit: new FormControl(this.data.tanggalTerbit, Validators.required),
      tanggalExpired: new FormControl(this.data.tanggalExpired, Validators.required),
    });
  }

  public resetForm(): void {
    this.data.id = "";
    this.data.namaDokumen = "";
    this.data.tanggalTerbit = "";
    this.data.tanggalExpired = "";
    this.data.lampiran = "";
    this.setForm();
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
    if (this.lampiranFiles !== null) {
      this.fileService.upload(this.lampiranFiles[0]).subscribe(
        (res) => {
          this.uploadedFileContentUrl = res.contentUrl;
          this.uploadedFileId = res["@id"];
        },
        (err) => {
          this.parent.popUpMessage = err.error.message;
          this.parent.triggerPopUp();
        }
      );
    }
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
        let url = window.URL.createObjectURL(blob);
        window.open(url);
      },
      (err) => {
        this.parent.popUpMessage = err.error.message;
        this.parent.triggerPopUp();
      }
    );
  }

  public submit(): void {
    if (this.lampiranFiles === null || this.lampiranFiles === undefined) {
      this.popUpMessage = dictionary.invalid_file;
      this.close();
      this.parent.triggerPopUp();
    } else {
      this.form.markAllAsTouched();
      if (this.form.valid) {
        if (this.isNewData) {
          this.save();
        } else {
          this.update();
        }
      }
    }
  }

  public save(): void {
    let params = {
      tipeDokumen:this.form.value.tipeDokumen,
      namaDokumen: this.form.value.namaDokumen,
      berlakuSampai: this.form.value.berlakuSampai,
      submitDate: new Date(),
      file: this.uploadedFileId,
      attachmentFilePath: this.uploadedFileContentUrl
    };

    this.profilApekLegalService.addDokLegal(params).subscribe(
      () => {
        this.popUpMessage = dictionary.save_data_success;
        this.parent.triggerPopUp();
        this.fetchData();
        this.close();
      },
      (err) => {
        this.popUpMessage = err.error.message;
        this.parent.triggerPopUp();
        this.close();
      }
    );
  }

  mapDateFormat(date: string) {
    let arr_date = date.split('-');
    return arr_date[2].concat('-').concat(arr_date[1]).concat('-').concat(arr_date[0]);
  }

  public updateForm(data: any): void {
    // this.id = data.id;
    this.data.namaDokumen = data.namaDokumen;
    this.data.berlakuSampai = data.berlakuSampai !== "Seumur Hidup" ? new Date(this.mapDateFormat(data.berlakuSampai)) : null;

    this.isNewData = false;

    this.setForm();
    this.open();

    this.popUpMessage = dictionary.update_data_notification;
    this.parent.triggerPopUp();
  }

  public update(): void {
    let params = {
      tipeDokumen: this.form.value.tipeDokumen,
      namaDokumen: this.form.value.namaDokumen,
      nomorDokumen: this.form.value.nomorDokumen,
      berlakuSampai: this.form.value.berlakuSampai,
      submitDate: new Date(),
      file: this.uploadedFileId,
      attachmentFilePath: this.uploadedFileContentUrl
    };
    this.profilApekLegalService.updateDokLegal(params).subscribe(
      () => {
        this.popUpMessage = dictionary.save_data_success;
        this.parent.triggerPopUp();
        this.fetchData();
        this.close();
      },
      (err) => {
        this.popUpMessage = err.error.message;
        this.parent.triggerPopUp();
        this.close();
      }
    );
  }

  public deleteConfirmation(id: string, name: string): void {
    const dialog: DialogRef = this.dialogService.open({
      title: "Konfirmasi",
      content: "Apakah " + name + " akan dihapus dari sistem ?",
      actions: [{ text: "Tidak" }, { text: "Ya", primary: true }],
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
  
  public delete(id: string): void {
    this.profilApekLegalService.delete(id).subscribe(
      () => {
        this.popUpMessage = dictionary.delete_data_success;
        this.parent.triggerPopUp();
        this.fetchData();
      },
      (err) => {
        this.popUpMessage = err.error.message;
        this.parent.triggerPopUp();
      }
    );
  }

}
