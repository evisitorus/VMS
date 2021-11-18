import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TextBoxComponent } from '@progress/kendo-angular-inputs';
import { ProfileAssetInterface } from 'src/app/core/interfaces/profile-asset.interface';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';
import { ProfileAssetService } from 'src/app/core/services/profile/profile-asset.service';

@Component({
  selector: 'app-profile-aset',
  templateUrl: './profile-aset.component.html',
  styleUrls: ['./profile-aset.component.css']
})
export class ProfileAsetComponent implements OnInit {

  public form!: FormGroup;
  public gridData: any[] = [];
  public opened: boolean = false;
  public popUpTitle: string = "Profile Asset";
  public popUpMessage: string = "";
  public id!: string;
  public isNewData: boolean = true;

  public data: any = {
    namaAsset: "",
    jumlah: 0,
    tahunPembuatan: ""
  };

  constructor(
    private profileAssetService: ProfileAssetService,
    private eventEmitterService: EventEmitterService
  ){ 
    this.setFormValue();
  }

  ngOnInit(): void {
    this.getData();
  }

  public mapData(data:any[]) {
    let mappedData:any[] = [];
    let no = 1;
    for (const key in data) {
      mappedData[key] = {
        no: no++,
        nama: data[key]['name'],
        jumlah: data[key]['jumlah'],
        tahunPembuatan: data[key]['tahunPembuatan'],
        id: data[key]['id']
      };
    }
    return mappedData;
  }

  public close() {
    this.opened = false;
  }

  public open() {
    this.opened = true;
  }
  
  public submit(): void {
    if (this.isNewData) {
      this.save();
    } else {
      this.update();
    }
  }

  public getData(): void {
    this.profileAssetService.getDataAsset().subscribe(
      (resp) => {
        this.gridData = resp['hydra:member'];
        this.gridData = this.mapData(this.gridData);
      },
      () => {
        this.popUpMessage = "Gagal mendapatkan data asset";
        this.triggerPopUp();
      }
    );
  }

  public updateForm(data: any): void {
    this.id = data.id;
    this.data.namaAsset = data.nama;
    this.data.jumlah = data.jumlah;
    this.data.tahunPembuatan = data.tahunPembuatan;
    
    this.isNewData = false;

    this.setFormValue();
    this.open();
  }

  public update(): void {
    let params: ProfileAssetInterface = {...this.form.value};
    this.profileAssetService.update(params, this.id).subscribe(
      () => {
        this.popUpMessage = "Berhasil memperbarui data asset";
        this.triggerPopUp();
        this.getData();
        this.close();
      },
      () => {
        this.popUpMessage = "Gagal memperbarui data asset";
        this.triggerPopUp();
        this.close();
      }
    );
  }

  public save(): void {
    let params: ProfileAssetInterface = {...this.form.value};
    this.profileAssetService.saveProfileAsset(params).subscribe(
      () => {
        this.popUpMessage = "Berhasil menyimpan data";
        this.triggerPopUp();
        this.getData();
        this.close();
      }, 
      () => {
        this.popUpMessage = "Gagal menyimpan data";
        this.triggerPopUp();
        this.close();
      }
    );
  }

  public delete(id: string): void {
    this.profileAssetService.delete(id).subscribe(
      () => {
        this.popUpMessage = "Berhasil menghapus data asset";
        this.triggerPopUp();
        this.getData();
      },
      () => {
        this.popUpMessage = "Gagal menghapus data asset";
        this.triggerPopUp();
      }
    );
  }

  setFormValue(): void {
    this.form = new FormGroup({
      namaAsset: new FormControl(this.data.namaAsset, [Validators.required]),
      jumlah: new FormControl(this.data.jumlah, [Validators.required]),
      tahunPembuatan: new FormControl(this.data.tahunPembuatan, [Validators.required])
    });
  }

  triggerPopUp() {
    this.eventEmitterService.trigger();
  }

}
