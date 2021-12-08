import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { ProfileService } from 'src/app/core/services/profile.service';
import { DialogAction, ActionsLayout } from "@progress/kendo-angular-dialog";

import { EventEmitterService } from 'src/app/core/services/event-emitter.service';
import { AddPemegangSahamInterface, UpdatePemegangSahamInterface } from 'src/app/core/interfaces/add-pemegang-saham-interface';


const messages = {
  default: 'Data tidak boleh kosong.',
  success: 'Sukses',
  deleteConfirmationTitle: "Konfirmasi hapus data Pemegang Saham",
  deleteConfirmationMessage: "Apakah Pemegang Saham atas nama .. akan dihapus dari sistem ?",
};

@Component({
  selector: 'app-pemegang-saham',
  templateUrl: './pemegang-saham.component.html',
  styleUrls: ['./pemegang-saham.component.css']
})
export class PemegangSahamComponent implements OnInit {
  @ViewChild('panelbar') private panelbar: any;

  public gridData: any = {};
  public id!: string;
  public deleteId!: string;
  public deletePemegangSahamName!: string;
  public isNewData: boolean = true;
  public disableNamaPemegangSaham: boolean = true;
  public openedSaham = false;

  popUpTitle: string = "Informasi Pemegang Saham";
  popUpMessage: string = messages.default;
  popUpConfirmationTitle: string = messages.deleteConfirmationTitle;
  popUpConfirmationMessage: string = "Apakah Pemegang Saham atas nama " + this.deletePemegangSahamName + " akan dihapus dari sistem ?";
  redirectOnClosePopUp: boolean = false;

  public closeSaham() {
    this.openedSaham = false;
  }

  public openSaham() {
    this.openedSaham = true;
  }

  public pemegangSahamFormGroup = new FormGroup({
    namaPemegangSaham: new FormControl(null, Validators.required),
    perseorangan: new FormControl(null, Validators.required),
    lokal: new FormControl(null, Validators.required),
    persentaseKepemilikan: new FormControl(null, Validators.required),
  });

  public data: any = {
    id: "",
    namaPemegangSaham: "",
    perseorangan: "",
    lokal: "",
    persentaseKepemilikan: ""
  };


  constructor(
    private profileService: ProfileService,
    private eventEmitterService: EventEmitterService,
    ) { }

  ngOnInit(): void {
    this.getPemegangSaham();
  }

  getPemegangSaham(){
    this.profileService.getPemegangSaham().subscribe(
      (resp) =>  {
        this.gridData = resp['hydra:member'];
        this.gridData = this.mapData(this.gridData);
        console.log(this.gridData);
        return this.gridData;
      },
      (error) => {
        this.popUpMessage = "Gagal mendapatkan data";
        this.triggerPopUp();
      }
    );
  }

  public mapData(data:any[]) {
    let mappedData:any[] = [];
    let no = 1;
    for (const key in data) {
      mappedData[key] = {
        no: no++,
        namaPemegangSaham: data[key]['toParty']['firstName'] ? data[key]['toParty']['firstName'] : data[key]['toParty']['name'],
        namaPemegangSahamValue: data[key]['toParty'],
        pemegangSahamPerseorangan: data[key]['pemegangSahamPerseorangan'] ?  "Perseorangan" : "Badan Usaha",
        pemegangSahamPerseoranganValue: data[key]['pemegangSahamPerseorangan'],
        pemegangSahamLokal: data[key]['pemegangSahamLokal'] ? "Lokal" : "Asing",
        pemegangSahamLokalValue: data[key]['pemegangSahamLokal'],
        persentaseKepemilikan: data[key]['persentaseKepemilikan'],
        id: data[key]['id'],
        active: data[key]['active']
      };
    }
    return mappedData;
  }

  triggerPopUp() {
    this.eventEmitterService.trigger();
  }

  submitPemegangSaham(): void {
    this.pemegangSahamFormGroup.markAllAsTouched();
    this.popUpMessage = messages.default;


    // stop here if form is invalid
    if (this.pemegangSahamFormGroup.invalid) {
      this.popUpMessage = messages.default;
      this.triggerPopUp();
      this.redirectOnClosePopUp = false;
      return;
    }

    const dataPemegangSaham = {
      namaPemegangSaham: this.pemegangSahamFormGroup.controls['namaPemegangSaham'].value,
      perseorangan: this.pemegangSahamFormGroup.controls['perseorangan'].value,
      lokal: this.pemegangSahamFormGroup.controls['lokal'].value,
      persentaseKepemilikan: this.pemegangSahamFormGroup.controls['persentaseKepemilikan'].value,
      active: true
    }

    let params: AddPemegangSahamInterface= {...dataPemegangSaham}
    this.profileService.addPemegangSaham(params).subscribe(
      (resp) =>  {
        this.popUpMessage = "Berhasil menyimpan data";
        this.redirectOnClosePopUp = false;
        this.triggerPopUp();
        this.getPemegangSaham();
        this.closeSaham();
        // this.panelbar.stateChange.next([{title: 'Saham', expanded: true, selected: true}])
      },
      (error) => {
        this.popUpMessage = "Gagal menyimpan data";
        this.triggerPopUp();
        this.closeSaham();
      }
    );
  }

  public updateForm(data: any): void {
    this.data.id = data.id;
    this.data.namaPemegangSahamValue = data.namaPemegangSahamValue;
    this.data.namaPemegangSaham = data.namaPemegangSaham;
    this.data.perseorangan = data.pemegangSahamPerseoranganValue;
    this.data.lokal = data.pemegangSahamLokalValue;
    this.data.persentaseKepemilikan = parseFloat(data.persentaseKepemilikan);
    
    this.isNewData = false;
    this.disableNamaPemegangSaham = true;

    this.setForm();
    this.openSaham();
  }


  public setForm(): void {
    this.pemegangSahamFormGroup = new FormGroup({
      id: new FormControl(this.data.id, Validators.required),
      namaPemegangSaham: new FormControl({disabled: this.disableNamaPemegangSaham, value: this.data.namaPemegangSahamValue.firstName ? this.data.namaPemegangSahamValue.firstName : this.data.namaPemegangSahamValue.name  }, Validators.required),
      perseorangan: new FormControl({disabled: this.disableNamaPemegangSaham, value: this.data.perseorangan }, Validators.required),
      lokal: new FormControl(this.data.lokal, Validators.required),
      persentaseKepemilikan: new FormControl(this.data.persentaseKepemilikan, Validators.required),
    });
  }

  public submit(): void {
    this.pemegangSahamFormGroup.markAllAsTouched();
    if (this.pemegangSahamFormGroup.valid) {
      if (this.isNewData) {
        this.submitPemegangSaham();
      } else {
        this.updatePemegangSaham();
      }
    }
  }

  public updatePemegangSaham(): void {
    const dataPemegangSaham = {
      id: this.pemegangSahamFormGroup.controls['id'].value,
      lokal: this.pemegangSahamFormGroup.controls['lokal'].value,
      persentaseKepemilikan: this.pemegangSahamFormGroup.controls['persentaseKepemilikan'].value
    }

    let params: UpdatePemegangSahamInterface= {...dataPemegangSaham}
    this.profileService.updatePemegangSaham(params).subscribe(
      () => {
        this.popUpMessage = "Berhasil memperbarui data";
        this.triggerPopUp();
        this.getPemegangSaham();
        this.closeSaham();
      },
      (err) => {
        this.popUpMessage = err.error.message;
        this.triggerPopUp();
        this.closeSaham();
      }
    );
  }

  public delete(data: any): void {
    this.popUpConfirmationTitle= messages.deleteConfirmationTitle;
    this.popUpConfirmationMessage= 'Apakah Pemegang Saham atas nama "' + data.namaPemegangSaham + '" akan dihapus dari sistem ?';
    this.opened = true;
    this.deleteId = data.id;
    console.log(this.deleteId);
  }

  public deletePemegangSaham(id: string): void {
    this.profileService.deletePemegangSaham(id).subscribe(
      () => {
        this.popUpMessage = "Berhasil menghapus data";
        this.triggerPopUp();
        this.getPemegangSaham();
      },
      (err) => {
        this.popUpMessage = err.error.message;
        this.triggerPopUp();
      }
    );
  }

  public opened = false;
  public actionsLayout: ActionsLayout = "normal";

  public myActions: DialogAction[] = [
    { text: "No" },
    { text: "Yes", primary: true },
  ];

  public onAction(action: DialogAction): void {
    console.log(action);
    if(action.text == "Yes"){
      this.deletePemegangSaham(this.deleteId);
    }
    this.opened = false;
  }

  public close(status: any) {
    console.log(status);
    this.opened = false;
  }

  public open() {
    this.opened = true;
  }
}
