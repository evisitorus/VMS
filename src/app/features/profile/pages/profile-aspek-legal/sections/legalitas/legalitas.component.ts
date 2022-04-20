import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AspekLegalInterface } from 'src/app/core/interfaces/profile/aspek-legal-interface';
import { ProfileAspekLegalService } from 'src/app/core/services/profile/profile-aspek-legal.service';
import { dictionary } from 'src/app/dictionary/dictionary';
import { ProfileAspekLegalComponent } from '../../profile-aspek-legal.component';

@Component({
  selector: 'app-legalitas',
  templateUrl: './legalitas.component.html',
  styleUrls: ['./legalitas.component.css']
})
export class LegalitasComponent implements OnInit {

  public aspekLegalFromGroup!: FormGroup;
  public data:any = {
    noAktaPendirian: "",
    tanggalTerbitAktaPendirian: "",
    notarisAktaPendirian: "",
    notarisPenggantiAktaPendirian: "",
    noAktaPerubahan: "",
    tanggalTerbitAktaPerubahan: "",
    notarisAktaPerubahan: "",
    notarisPenggantiAktaPerubahan: '',
    noSkPengesahanMenteri: "",
    tanggalTerbitNoSkPengesahanMenteri:"",
    npwp: "",
    tanggalTerbitNpwp: "",
    noSiup: "",
    tanggalTerbitSiup: "",
    noNibTdp: "",
    tanggalTerbitNibTdp: "",
    tanggalExpireNibTdp: "",
    noIdpSitu: "",
    tanggalTerbitIdpSitu: "",
    tanggalExpireIdpSitu: ""
  };
  public params!: AspekLegalInterface;
  public opened: boolean = false;
  public isNewData: boolean = true;
  public nibExpireChecked: boolean = false;
  public idpExpireChecked: boolean = false;
  public disableNibCbx: boolean = false;
  public disableIdpCbx: boolean = false;

  constructor(
    public fb: FormBuilder,
    public parent: ProfileAspekLegalComponent,
    private profileAspekLegalService: ProfileAspekLegalService,
  ) { 
    this.setForm();
  }

  ngOnInit(): void {
    this.fetchData();
  }

  public fetchData(): void{
    this.profileAspekLegalService.getAspekLegal().subscribe(
      (response) => {
        //saving response data to temp array
        Object.keys(response).map((key, index) => {
          this.data[key] = response[key];
        });
        this.checkNib(response['isNibDiisi']);
        this.setForm();
      },
      (err) => {
        this.parent.popUpMessage = err.error.message;
        this.parent.triggerPopUp();
      }
    );
  }

  public checkNib(nib: any){
    if (nib) {
      this.disableIdpCbx = true;
      this.disableNibCbx = true;
      this.disableNibField();
      this.disableIdpField();
      this.disableSiup();
    }
  }

  public disableNibField(){
    this.aspekLegalFromGroup.controls.noNibTdp.disable();
    this.aspekLegalFromGroup.controls.tanggalTerbitNibTdp.disable();
    this.aspekLegalFromGroup.controls.tanggalExpireNibTdp.disable();
    this.aspekLegalFromGroup.controls.noNibTdp.disable();
  }

  public disableIdpField(){
    this.aspekLegalFromGroup.controls.noIdpSitu.disable();
    this.aspekLegalFromGroup.controls.tanggalTerbitIdpSitu.disable();
    this.aspekLegalFromGroup.controls.tanggalExpireIdpSitu.disable();
  }

  public disableSiup(){
    this.aspekLegalFromGroup.controls.noSiup.disable();
  }

  public close(): void {
    this.opened = false;
    this.resetForm();
    this.isNewData = true;
  }

  public open(): void {
    this.opened = true;
  }

  public setNibLifeTime(): void {
    if (this.nibExpireChecked) {
      this.data.isNiBTdpSeumurHidup = this.nibExpireChecked;
      this.aspekLegalFromGroup.controls.tanggalExpireNibTdp.disable();
    } else {
      this.nibExpireChecked = false;
      this.data.isNiBTdpSeumurHidup = this.nibExpireChecked;
      this.aspekLegalFromGroup.controls.tanggalExpireNibTdp.enable();
    }
  }

  public setIdpLifeTime(): void {
    if (this.idpExpireChecked) {
      this.data.isIdpSituSeumurHidup = this.idpExpireChecked;
      this.aspekLegalFromGroup.controls.tanggalExpireIdpSitu.disable();
    } else {
      this.idpExpireChecked = false;
      this.data.isIdpSituSeumurHidup = this.idpExpireChecked;
      this.aspekLegalFromGroup.controls.tanggalExpireIdpSitu.enable();
    }
  }

  public setForm(): void {
    this.aspekLegalFromGroup = new FormGroup({
      noAktaPendirian: new FormControl(this.data.noAktaPendirian, Validators.required),
      tanggalTerbitAktaPendirian: new FormControl(new Date(this.data.tanggalTerbitAktaPendirian), Validators.required),
      notarisAktaPendirian: new FormControl(this.data.notarisAktaPendirian, Validators.required),
      notarisPenggantiAktaPendirian: new FormControl(this.data.notarisPenggantiAktaPendirian, Validators.required),
      noAktaPerubahan: new FormControl(this.data.noAktaPerubahan, Validators.required),
      tanggalTerbitAktaPerubahan: new FormControl(new Date(this.data.tanggalTerbitAktaPerubahan)),
      notarisAktaPerubahan: new FormControl(this.data.notarisAktaPerubahan),
      notarisPenggantiAktaPerubahan:new FormControl(this.data.notarisPenggantiAktaPerubahan),
      noSkPengesahanMenteri: new FormControl(this.data.noSkPengesahanMenteri),
      tanggalTerbitNoSkPengesahanMenteri: new FormControl(new Date(this.data.tanggalTerbitNoSkPengesahanMenteri), Validators.required),
      npwp: new FormControl(this.data.npwp, Validators.required),
      tanggalTerbitNpwp: new FormControl(new Date(this.data.tanggalTerbitNpwp), Validators.required),
      noSiup: new FormControl(this.data.noSiup),
      tanggalTerbitSiup: new FormControl(new Date(this.data.tanggalTerbitSiup)),
      noNibTdp: new FormControl(this.data.noNibTdp),
      tanggalTerbitNibTdp: new FormControl(new Date(this.data.tanggalTerbitNibTdp)),
      tanggalExpireNibTdp: new FormControl(new Date(this.data.tanggalExpireNibTdp)),
      noIdpSitu: new FormControl(this.data.noIdpSitu),
      tanggalTerbitIdpSitu: new FormControl(new Date(this.data.tanggalTerbitIdpSitu)),
      tanggalExpireIdpSitu: new FormControl(new Date(this.data.tanggalExpireIdpSitu))
    });
    this.nibExpireChecked = this.data.isNiBTdpSeumurHidup;
    this.idpExpireChecked = this.data.isIdpSituSeumurHidup;
  }

  public resetForm(): void {
    Object.keys(this.data).map((key, index) => {
      this.data[key] = "";
    });
  }

  public submitForm(): void {
    if (this.aspekLegalFromGroup.valid) {
      this.params = {
        noAktaPendirian:this.aspekLegalFromGroup.value.noAktaPendirian,
        tanggalTerbitAktaPendirian: this.parent.convertDateFormat(this.aspekLegalFromGroup.value.tanggalTerbitAktaPendirian),
        notarisAktaPendirian: this.aspekLegalFromGroup.value.notarisAktaPendirian,
        notarisPenggantiAktaPendirian: this.aspekLegalFromGroup.value.notarisPenggantiAktaPendirian,
        noAktaPerubahan: this.aspekLegalFromGroup.value.noAktaPerubahan,
        tanggalTerbitAktaPerubahan: this.parent.convertDateFormat(this.aspekLegalFromGroup.value.tanggalTerbitAktaPerubahan),
        notarisAktaPerubahan: this.aspekLegalFromGroup.value.notarisAktaPerubahan,
        notarisPenggantiAktaPerubahan:this.aspekLegalFromGroup.value.notarisPenggantiAktaPerubahan,
        noSkPengesahanMenteri: this.aspekLegalFromGroup.value.noSkPengesahanMenteri,
        tanggalTerbitNoSkPengesahanMenteri: this.parent.convertDateFormat(this.aspekLegalFromGroup.value.tanggalTerbitNoSkPengesahanMenteri),
        npwp: this.aspekLegalFromGroup.value.npwp,
        tanggalTerbitNpwp: this.parent.convertDateFormat(this.aspekLegalFromGroup.value.tanggalTerbitNpwp),
        noSiup: this.aspekLegalFromGroup.value.noSiup,
        tanggalTerbitSiup: this.parent.convertDateFormat(this.aspekLegalFromGroup.value.tanggalTerbitSiup),
        noNibTdp: this.aspekLegalFromGroup.value.noNibTdp,
        isNiBTdpSeumurHidup: this.data.isNiBTdpSeumurHidup,
        tanggalTerbitNibTdp: this.parent.convertDateFormat(this.aspekLegalFromGroup.value.tanggalTerbitNibTdp),
        tanggalExpireNibTdp: this.aspekLegalFromGroup.value.tanggalExpireNibTdp ? this.parent.convertDateFormat(this.aspekLegalFromGroup.value.tanggalExpireNibTdp) : null,
        noIdpSitu: this.aspekLegalFromGroup.value.noIdpSitu,
        isIdpSituSeumurHidup: this.data.isIdpSituSeumurHidup,
        tanggalTerbitIdpSitu: this.parent.convertDateFormat(this.aspekLegalFromGroup.value.tanggalTerbitIdpSitu),
        tanggalExpireIdpSitu: this.aspekLegalFromGroup.value.tanggalExpireIdpSitu ? this.parent.convertDateFormat(this.aspekLegalFromGroup.value.tanggalExpireIdpSitu) : null
      }

      this.profileAspekLegalService.addAspekLegal(this.params).subscribe(
        () => {
          this.parent.popUpMessage = dictionary.save_data_success;
          this.parent.triggerPopUp();
          this.fetchData();
          this.close();
        },
        (err) => {
          this.parent.popUpMessage = err.error.message;
          this.parent.triggerPopUp();
          this.close();
        }
      );
    } else {
      this.parent.popUpMessage = dictionary.incomplete_data;
      this.parent.triggerPopUp();
    }
  }


}
