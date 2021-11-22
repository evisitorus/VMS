import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FileRestrictions } from '@progress/kendo-angular-upload';
import { ProfileDocumentInterface } from 'src/app/core/interfaces/profile-document.interface';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';
import { ProfileDocumentService } from 'src/app/core/services/profile/profile-document.service';

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
    allowedExtensions: ["jpg", "jpeg", "png"],
  };
  public lampiranFiles!: Array<any>;

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
    private profileDocumentService: ProfileDocumentService
  ){
    this.setForm();
  }

  ngOnInit(): void {
    this.fetchData();
  }

  public close(): void {
    this.opened = false;
  }

  public open(): void {
    this.opened = true;
  }

  public setForm(): void {
    this.form = new FormGroup({
      nomorDokumen: new FormControl(this.data.nomorDokumen, Validators.required),
      namaDokumen: new FormControl(this.data.namaDokumen, Validators.required),
      berlakuSampai: new FormControl(this.data.berlakuSampai, Validators.required)
    });
  }

  public mapData(data: any[]): any[] {
    let mappedData:any[] = [];
    for (const key in data) {
      mappedData[key] = {
        no: data[key]['nomorDokumen'],
        namaDokumen: data[key]['namaDokumen'],
        berlakuDari: data[key]['submitDate'],
        berlakuSampai: data[key]['berlakuSampai'],
        lampiran: data[key]['attachmentFilePath'],
        id: data[key]['id']
      };
    }
    return mappedData;
  }

  public updateForm(data: any): void {
    this.id = data.id;
    this.data.nomorDokumen = data.no;
    this.data.namaDokumen = data.namaDokumen;
    // this.data.berlakuSampai = data.berlakuSampai;
    
    this.isNewData = false;

    this.setForm();
    this.open();
  }

  public fetchData(): void {
    this.profileDocumentService.get().subscribe(
      (response) => {
        this.gridData = response['hydra:member'];
        this.gridData = this.mapData(this.gridData);
      },
      () => {

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
    let params: ProfileDocumentInterface = {...this.form.value};
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
    let params: ProfileDocumentInterface = {...this.form.value};
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

  triggerPopUp():void  {
    this.eventEmitterService.trigger();
  }
}
