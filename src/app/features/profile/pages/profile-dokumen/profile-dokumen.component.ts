import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FileRestrictions } from '@progress/kendo-angular-upload';
import { ProfileDocumentInterface } from 'src/app/core/interfaces/profile-document.interface';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';
import { ProfileDocumentService } from 'src/app/core/services/profile/profile-document.service';
import { FileService } from 'src/app/core/services/file.service';

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
    private fileService: FileService
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
    this.isLifeTime = !this.isLifeTime;
    this.data.berlakuSampai = null;
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
        berlakuSampai: formatDate(data[key]['berlakuSampai'], "dd-MM-YYYY", "en-US"),
        lampiran: data[key]['attachmentFilePath'],
        file: data[key]['file'],
        id: data[key]['id']
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
    this.data.berlakuSampai = new Date(this.mapDateFormat(data.berlakuSampai));

    this.isNewData = false;

    this.setForm();
    this.open();
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
      () => {
        this.popUpMessage = "Gagal mendapatkan data";
        this.triggerPopUp();
      }
    );
  }

  public submit(): void {
    if (this.isNewData) {
      this.save();
    } else {
      this.update();
    }
  }

  public save(): void {
    let params: ProfileDocumentInterface = {
      namaDokumen: this.form.value.namaDokumen,
      nomorDokumen: this.form.value.nomorDokumen,
      berlakuSampai: this.form.value.berlakuSampai,
      submitDate: new Date(),
      file: this.uploadedFileId,
      attachmentFilePath: this.uploadedFileContentUrl
    };

    this.profileDocumentService.save(params).subscribe(
      () => {
        this.popUpMessage = "Berhasil menyimpan data";
        this.triggerPopUp();
        this.fetchData();
        this.close();
      },
      () => {
        this.popUpMessage = "Gagal menyimpan data";
        this.triggerPopUp();
        this.close();
      }
    );
  }

  public update(): void {
    let params: ProfileDocumentInterface = {
      namaDokumen: this.form.value.namaDokumen,
      nomorDokumen: this.form.value.nomorDokumen,
      berlakuSampai: this.form.value.berlakuSampai,
      submitDate: new Date(),
      file: this.uploadedFileId,
      attachmentFilePath: this.uploadedFileContentUrl
    };
    this.profileDocumentService.update(params, this.id).subscribe(
      () => {
        this.popUpMessage = "Berhasil memperbarui data";
        this.triggerPopUp();
        this.fetchData();
        this.close();
      },
      () => {
        this.popUpMessage = "Gagal memperbarui data";
        this.triggerPopUp();
        this.close();
      }
    );
  }

  public delete(id: string): void {
    this.profileDocumentService.delete(id).subscribe(
      () => {
        this.popUpMessage = "Berhasil menghapus data";
        this.triggerPopUp();
        this.fetchData();
      },
      () => {
        this.popUpMessage = "Gagal menghapus data";
        this.triggerPopUp();
      }
    );
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

  triggerPopUp():void  {
    this.eventEmitterService.trigger();
  }
}
