import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogCloseResult, DialogRef, DialogService } from '@progress/kendo-angular-dialog';
import { ProfileAssetInterface } from 'src/app/core/interfaces/profile-asset.interface';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';
import { ProfileAssetService } from 'src/app/core/services/profile/profile-asset.service';
import { dictionary } from 'src/app/dictionary/dictionary';

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
  public isDelete!: boolean;
  public maxLengthNama = 100;
  public maxLengthJumlah = 9;

  public data: any = {
    namaAsset: "",
    jumlah: 0,
    tahunPembuatan: ""
  };

  constructor(
    private profileAssetService: ProfileAssetService,
    private eventEmitterService: EventEmitterService,
    private dialogService: DialogService
  ) {
    this.setFormValue();
  }

  ngOnInit(): void {
    this.getData();
  }

  public mapData(data: any[]) {
    let mappedData: any[] = [];
    let no = 1;
    for (const key in data) {
      mappedData[key] = {
        no: no++,
        nama: data[key]['name'],
        jumlah: data[key]['jumlah'],
        tahunPembuatan: data[key]['tahunPembuatan'],
        id: data[key]['id'],
        deletedAt: data[key]['deletedAt']
      };
    }
    return mappedData;
  }

  public close(): void {
    this.opened = false;
    this.resetForm();
    this.isNewData = true;
  }

  public open(): void {
    this.opened = true;
  }

  public submit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      if (this.isNewData) {
        this.save();
      } else {
        this.update();
      }
    }
  }

  public getData(): void {
    this.profileAssetService.get().subscribe(
      (resp) => {
        this.gridData = resp['hydra:member'];
        this.gridData = this.mapData(this.gridData);
      },
      (err) => {
        this.popUpMessage = err.error.message;
        this.triggerPopUp();
      }
    );
  }

  public updateForm(data: any): void {
    this.id = data.id;
    this.data.namaAsset = data.nama;
    this.data.jumlah = data.jumlah;
    this.data.tahunPembuatan = parseInt(data.tahunPembuatan);

    this.isNewData = false;

    this.setFormValue();
    this.open();
  }

  public resetForm(): void {
    this.data.namaAsset = "";
    this.data.jumlah = "";
    this.data.tahunPembuatan = "";
    this.setFormValue();
  }

  public save(): void {
    let params: ProfileAssetInterface = {
      namaAsset: this.form.value.namaAsset,
      jumlah: this.form.value.jumlah,
      tahunPembuatan: this.form.value.tahunPembuatan.toString()
    };
    this.profileAssetService.save(params).subscribe(
      () => {
        this.popUpMessage = dictionary.save_data_success;
        this.triggerPopUp();
        this.getData();
        this.close();
        this.resetForm();
      },
      (err) => {
        this.popUpMessage = err.error.message;
        this.triggerPopUp();
        this.close();
        this.resetForm();
      }
    );
  }

  public update(): void {
    let params: ProfileAssetInterface = {
      namaAsset: this.form.value.namaAsset,
      jumlah: this.form.value.jumlah,
      tahunPembuatan: this.form.value.tahunPembuatan.toString()
    };
    this.profileAssetService.update(params, this.id).subscribe(
      () => {
        this.popUpMessage = dictionary.update_data_success;
        this.triggerPopUp();
        this.getData();
        this.close();
        this.resetForm();
      },
      (err) => {
        this.popUpMessage = err.error.message;
        this.triggerPopUp();
        this.close();
        this.resetForm();
      }
    );
  }

  public delete(id: string): void {
    this.profileAssetService.delete(id).subscribe(
      () => {
        this.popUpMessage = dictionary.delete_data_success;
        this.triggerPopUp();
        this.getData();
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

  setFormValue(): void {
    this.form = new FormGroup({
      namaAsset: new FormControl(this.data.namaAsset, [Validators.required]),
      jumlah: new FormControl(this.data.jumlah, [Validators.required]),
      tahunPembuatan: new FormControl(this.data.tahunPembuatan, [Validators.required])
    });
    localStorage.getItem('disableEditData') === 'yes' ? this.form.disable() : null;
  }

  triggerPopUp() {
    this.eventEmitterService.trigger();
  }

}
