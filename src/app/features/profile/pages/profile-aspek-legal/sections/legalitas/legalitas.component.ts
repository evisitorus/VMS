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
        this.setForm();
      },
      (err) => {
        this.parent.popUpMessage = err.error.message;
        this.parent.triggerPopUp();
      }
    );
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
    if (this.nibExpireChecked) this.data.isNiBTdpSeumurHidup = this.nibExpireChecked;
  }

  public setIdpLifeTime(): void {
    if (this.idpExpireChecked) this.data.isIdpSituSeumurHidup = this.idpExpireChecked;
  }

  public setForm(): void {
    this.aspekLegalFromGroup = new FormGroup({
      noAktaPendirian: new FormControl(this.data.noAktaPendirian, Validators.required),
      tanggalTerbitAktaPendirian: new FormControl(new Date(this.data.tanggalTerbitAktaPendirian), Validators.required),
      notarisAktaPendirian: new FormControl(this.data.notarisAktaPendirian, Validators.required),
      notarisPenggantiAktaPendirian: new FormControl(this.data.notarisPenggantiAktaPendirian, Validators.required),
      noAktaPerubahan: new FormControl(this.data.noAktaPerubahan, Validators.required),
      tanggalTerbitAktaPerubahan: new FormControl(new Date(this.data.tanggalTerbitAktaPerubahan), Validators.required),
      notarisAktaPerubahan: new FormControl(this.data.notarisAktaPerubahan, Validators.required),
      notarisPenggantiAktaPerubahan:new FormControl(this.data.notarisPenggantiAktaPerubahan, Validators.required),
      noSkPengesahanMenteri: new FormControl(this.data.noSkPengesahanMenteri, Validators.required),
      tanggalTerbitNoSkPengesahanMenteri: new FormControl(new Date(this.data.tanggalTerbitNoSkPengesahanMenteri), Validators.required),
      npwp: new FormControl(this.data.npwp, Validators.required),
      tanggalTerbitNpwp: new FormControl(new Date(this.data.tanggalTerbitNpwp), Validators.required),
      noSiup: new FormControl(this.data.noSiup, Validators.required),
      tanggalTerbitSiup: new FormControl(new Date(this.data.tanggalTerbitSiup), Validators.required),
      noNibTdp: new FormControl(this.data.noNibTdp, Validators.required),
      tanggalTerbitNibTdp: new FormControl(new Date(this.data.tanggalTerbitNibTdp), Validators.required),
      tanggalExpireNibTdp: new FormControl(new Date(this.data.tanggalExpireNibTdp), Validators.required),
      noIdpSitu: new FormControl(this.data.noIdpSitu, Validators.required),
      tanggalTerbitIdpSitu: new FormControl(new Date(this.data.tanggalTerbitIdpSitu), Validators.required),
      tanggalExpireIdpSitu: new FormControl(new Date(this.data.tanggalExpireIdpSitu), Validators.required)
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
        tanggalExpireNibTdp: this.parent.convertDateFormat(this.aspekLegalFromGroup.value.tanggalExpireNibTdp),
        noIdpSitu: this.aspekLegalFromGroup.value.noIdpSitu,
        isIdpSituSeumurHidup: this.data.isIdpSituSeumurHidup,
        tanggalTerbitIdpSitu: this.parent.convertDateFormat(this.aspekLegalFromGroup.value.tanggalTerbitIdpSitu),
        tanggalExpireIdpSitu: this.parent.convertDateFormat(this.aspekLegalFromGroup.value.tanggalExpireIdpSitu)
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
