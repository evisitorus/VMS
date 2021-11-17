import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileAssetInterface } from 'src/app/core/interfaces/profile-asset.interface';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';
import { ProfileAssetService } from 'src/app/core/services/profile/profile-asset.service';

@Component({
  selector: 'app-profile-aset',
  templateUrl: './profile-aset.component.html',
  styleUrls: ['./profile-aset.component.css']
})
export class ProfileAsetComponent implements OnInit {

  // public form: FormGroup = new FormGroup({
  //   namaAsset: new FormControl,
  //   jumlah: new FormControl,
  //   tahunPembuatan: new FormControl
  // });

  public form!: FormGroup;
  public gridData: any[] = [];
  public opened: boolean = false;
  public popUpTitle: string = "Profile Asset";
  public popUpMessage: string = "";

  constructor(
    private profileAssetService: ProfileAssetService,
    private eventEmitterService: EventEmitterService
  ){ 
    this.form = new FormGroup({
      namaAsset: new FormControl("", [Validators.required]),
      jumlah: new FormControl(0, [Validators.required]),
      tahunPembuatan: new FormControl("", [Validators.required])
    });
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
        tahunPembuatan: data[key]['tahunPembuatan']
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
    this.close();
    let params: ProfileAssetInterface = {...this.form.value};
    this.profileAssetService.saveProfileAsset(params).subscribe(
      (resp) => {
        this.popUpMessage = "Berhasil menyimpan data";
        this.triggerPopUp();
        this.getData();
      }, 
      (error) => {
        this.popUpMessage = "Gagal menyimpan data";
        this.triggerPopUp();
      }
    );
  }

  public getData(): void {
    this.profileAssetService.getDataAsset().subscribe(
      (resp) => {
        this.gridData = resp['hydra:member'];
        this.gridData = this.mapData(this.gridData);
      },
      (err) => {
        this.popUpMessage = "Gagal mendapatkan data asset";
        this.triggerPopUp();
      }
    );
  }

  triggerPopUp() {
    this.eventEmitterService.trigger();
  }

}
