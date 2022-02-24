import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FileRestrictions, SelectEvent } from '@progress/kendo-angular-upload';
import { ProfileDocumentInterface } from 'src/app/core/interfaces/profile-document.interface';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';
import { ProfileDocumentService } from 'src/app/core/services/profile/profile-document.service';
import { FileService } from 'src/app/core/services/file.service';
import { DialogCloseResult, DialogRef, DialogService } from '@progress/kendo-angular-dialog';
import { dictionary } from 'src/app/dictionary/dictionary';

@Component({
  selector: 'app-profile-dokumen',
  templateUrl: './profile-dokumen.component.html',
  styleUrls: ['./profile-dokumen.component.css']
})
export class ProfileDokumenComponent implements OnInit {

  public form!: FormGroup;
  public gridData: any[] = [];

  public opened: boolean = false;

  public popUpTitle: string = "Profile Dokumen";
  public popUpMessage: string = "";

  public value: Date = new Date();
  public checked: boolean = false;

  public fileRestrictions: FileRestrictions = {
    allowedExtensions: ["jpg", "jpeg", "png", "pdf"],
    maxFileSize: 2097152
  };
  public lampiranFiles!: Array<any>;
  public uploadedFileContentUrl!: string;
  public uploadedFileId!: string;
  public invalidFileExtension!: boolean;
  public invalidMaxFileSize!: boolean;

  public isLifeTime: boolean = false;
  public isNewData: boolean = true;
  public id!: string;

  public data: any = {
    id: "",
    nomorDokumen: "",
    namaDokumen: "",
    berlakuDari: "",
    berlakuSampai: "",
    lampiran: ""
  };

  constructor(
    private eventEmitterService: EventEmitterService,
    private profileDocumentService: ProfileDocumentService,
    private fileService: FileService,
    private dialogService: DialogService
  ){
    this.setForm();
  }

  ngOnInit(): void {
    this.fetchData();
  }

  public close(): void {
    this.opened = false;
    this.resetForm();
    this.isNewData = true;
  }

  public open(): void {
    this.opened = true;
  }

  public setIsLifeTime(): void {
    if (this.checked) {
      this.data.berlakuSampai = null;
    }
    this.isLifeTime = this.checked;
  }

  public setForm(): void {
    this.form = new FormGroup({
      nomorDokumen: new FormControl(this.data.nomorDokumen, Validators.required),
      namaDokumen: new FormControl(this.data.namaDokumen, Validators.required),
      berlakuSampai: new FormControl(this.data.berlakuSampai, [])
    });
  }

  public mapData(data: any[]): any[] {
    let mappedData:any[] = [];
    for (const key in data) {
      mappedData[key] = {
        no: data[key]['nomorDokumen'],
        namaDokumen: data[key]['namaDokumen'],
        berlakuDari: formatDate(data[key]['submitDate'], "dd-MM-YYYY", "en-US"),
        berlakuSampai: data[key]['berlakuSampai'] !== undefined ? formatDate(data[key]['berlakuSampai'], "dd-MM-YYYY", "en-US") : "Seumur Hidup",
        lampiran: data[key]['attachmentFilePath'],
        file: data[key]['file'],
        id: data[key]['id'],
        deletedAt: data[key]['deletedAt']
      };
    }
    return mappedData;
  }

  mapDateFormat(date: string) {
    let arr_date = date.split('-');
    return arr_date[2].concat('-').concat(arr_date[1]).concat('-').concat(arr_date[0]);
  }

  public updateForm(data: any): void {
    this.id = data.id;
    this.data.nomorDokumen = data.no;
    this.data.namaDokumen = data.namaDokumen;
    this.data.berlakuSampai = data.berlakuSampai !== "Seumur Hidup" ? new Date(this.mapDateFormat(data.berlakuSampai)) : null;

    this.isNewData = false;

    this.setForm();
    this.open();

    if (this.data.berlakuSampai === null) {
      this.checked = true;
      this.setIsLifeTime();
    } else {
      this.checked = false;
      this.setIsLifeTime();      
    }
  }

  public resetForm(): void {
    this.data.id = "";
    this.data.nomorDokumen = "";
    this.data.namaDokumen = "";
    this.data.berlakuDari = "";
    this.data.berlakuSampai = "";
    this.data.lampiran = "";
    this.setForm();
  }

  public fetchData(): void {
    this.profileDocumentService.get().subscribe(
      (response) => {
        this.gridData = response['hydra:member'];
        this.gridData = this.mapData(this.gridData);
      },
      (err) => {
        this.popUpMessage = err.error.message;
        this.triggerPopUp();
      }
    );
  }

  public submit(): void {
    if (this.lampiranFiles === null || this.lampiranFiles === undefined) {
      this.popUpMessage = dictionary.invalid_file;
      this.close();
      this.triggerPopUp();
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
    let params: ProfileDocumentInterface = {
      namaDokumen: this.form.value.namaDokumen,
      nomorDokumen: this.form.value.nomorDokumen,
      berlakuSampai: !this.isLifeTime ? this.form.value.berlakuSampai : null,
      submitDate: new Date(),
      file: this.uploadedFileId,
      attachmentFilePath: this.uploadedFileContentUrl
    };
    
    this.profileDocumentService.save(params).subscribe(
      () => {
        this.popUpMessage = dictionary.save_data_success;
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

  public update(): void {
    let params: ProfileDocumentInterface = {
      namaDokumen: this.form.value.namaDokumen,
      nomorDokumen: this.form.value.nomorDokumen,
      berlakuSampai: !this.isLifeTime ? this.form.value.berlakuSampai : null,
      submitDate: new Date(),
      file: this.uploadedFileId,
      attachmentFilePath: this.uploadedFileContentUrl
    };
    this.profileDocumentService.update(params, this.id).subscribe(
      () => {
        this.popUpMessage = dictionary.update_data_success;
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
    this.profileDocumentService.delete(id).subscribe(
      () => {
        this.popUpMessage = dictionary.delete_data_success;
        this.triggerPopUp();
        this.fetchData();
      },
      (err) => {
        this.popUpMessage = err.error.message;
        this.triggerPopUp();
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
          this.popUpMessage = err.error.message;
          this.triggerPopUp();
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
        let url= window.URL.createObjectURL(blob);
        window.open(url);
      },
      (err) => {
        this.popUpMessage = err.error.message;
        this.triggerPopUp();
      }
    );
  }

  triggerPopUp():void  {
    this.eventEmitterService.trigger();
  }
}
