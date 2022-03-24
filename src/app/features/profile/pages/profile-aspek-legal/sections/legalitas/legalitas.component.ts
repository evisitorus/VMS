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
  public data:any = {};
  public params!: AspekLegalInterface;
  public opened: boolean = false;
  public isNewData: boolean = true;

  constructor(
    public fb: FormBuilder,
    public parent: ProfileAspekLegalComponent,
    private profileAspekLegalService: ProfileAspekLegalService,
  ) { }

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
        this.setForm(this.data);
      },
      (err) => {
        this.parent.popUpMessage = err.error.message;
        this.parent.triggerPopUp();
      }
    )
  }

  public close(): void {
    this.opened = false;
    this.resetForm();
    this.isNewData = true;
  }

  public open(): void {
    this.opened = true;
  }

  public convertDate(d: any) {
    return (d.getMonth()+1)+'/'+d.getDate()+'/'+d.getFullYear()
  }

  public setForm(data: any): void {
    console.log(data)
    this.aspekLegalFromGroup = new FormGroup({
      noAktaPendirian: new FormControl(data.noAktaPendirian, Validators.required),
      tanggalTerbitAktaPendirian: new FormControl(new Date(data.tanggalTerbitAktaPendirian), Validators.required),
      notarisAktaPendirian: new FormControl(data.notarisAktaPendirian, Validators.required),
      notarisPenggantiAktaPendirian: new FormControl(data.notarisPenggantiAktaPendirian, Validators.required),
      noAktaPerubahan: new FormControl(data.noAktaPerubahan, Validators.required),
      tanggalTerbitAktaPerubahan: new FormControl(new Date(data.tanggalTerbitAktaPerubahan), Validators.required),
      notarisAktaPerubahan: new FormControl(data.notarisAktaPerubahan, Validators.required),
      notarisPenggantiAktaPerubahan:new FormControl(data.notarisPenggantiAktaPerubahan, Validators.required),
      noSkPengesahanMenteri: new FormControl(data.noSkPengesahanMenteri, Validators.required),
      tanggalTerbitNoSkPengesahanMenteri: new FormControl(new Date(data.tanggalTerbitNoSkPengesahanMenteri), Validators.required),
      npwp: new FormControl(data.npwp, Validators.required),
      tanggalTerbitNpwp: new FormControl(new Date(data.tanggalTerbitNpwp), Validators.required),
      noSiup: new FormControl(data.noSiup, Validators.required),
      tanggalTerbitSiup: new FormControl(new Date(data.tanggalTerbitSiup), Validators.required),
      noNibTdp: new FormControl(data.noNibTdp, Validators.required),
      tanggalTerbitNibTdp: new FormControl(new Date(data.tanggalTerbitNibTdp), Validators.required),
      tanggalExpireNibTdp: new FormControl(new Date(data.tanggalExpireNibTdp), Validators.required),
      noIdpSitu: new FormControl(data.noIdpSitu, Validators.required),
      tanggalTerbitIdpSitu: new FormControl(new Date(data.tanggalTerbitIdpSitu), Validators.required),
      tanggalExpireIdpSitu: new FormControl(new Date(data.tanggalExpireIdpSitu), Validators.required)
    });
  }

  public resetForm(): void {
    Object.keys(this.data).map((key, index) => {
      this.data[key] = "";
    });
  }

  public convertDateFormat(date: any){
    const offset = date.getTimezoneOffset();
    date = new Date(date.getTime() - (offset*60*1000));
    return date.toISOString().split('T')[0];
  }

  public submitForm(): void {
    console.log(this.aspekLegalFromGroup.value)
    console.log(this.aspekLegalFromGroup.valid)
    if (this.aspekLegalFromGroup.valid) {
      this.params = {
        noAktaPendirian:this.aspekLegalFromGroup.value.noAktaPendirian,
        tanggalTerbitAktaPendirian: this.aspekLegalFromGroup.value.tanggalTerbitAktaPendirian.toISOString(),
        notarisAktaPendirian: this.aspekLegalFromGroup.value.notarisAktaPendirian,
        notarisPenggantiAktaPendirian: this.aspekLegalFromGroup.value.notarisPenggantiAktaPendirian,
        noAktaPerubahan: this.aspekLegalFromGroup.value.noAktaPerubahan,
        tanggalTerbitAktaPerubahan: this.aspekLegalFromGroup.value.tanggalTerbitAktaPerubahan.toISOString(),
        notarisAktaPerubahan: this.aspekLegalFromGroup.value.notarisAktaPerubahan,
        notarisPenggantiAktaPerubahan:this.aspekLegalFromGroup.value.notarisPenggantiAktaPerubahan,
        noSkPengesahanMenteri: this.aspekLegalFromGroup.value.noSkPengesahanMenteri,
        tanggalTerbitNoSkPengesahanMenteri: this.aspekLegalFromGroup.value.tanggalTerbitNoSkPengesahanMenteri.toISOString(),
        npwp: this.aspekLegalFromGroup.value.npwp,
        tanggalTerbitNpwp: this.aspekLegalFromGroup.value.tanggalTerbitNpwp.toISOString(),
        noSiup: this.aspekLegalFromGroup.value.noSiup,
        tanggalTerbitSiup: this.aspekLegalFromGroup.value.tanggalTerbitSiup.toISOString(),
        noNibTdp: this.aspekLegalFromGroup.value.noNibTdp,
        isNiBTdpSeumurHidup: this.aspekLegalFromGroup.value.isNiBTdpSeumurHidup ? this.aspekLegalFromGroup.value.isNiBTdpSeumurHidup  : false ,
        tanggalTerbitNibTdp: this.aspekLegalFromGroup.value.tanggalTerbitNibTdp.toISOString(),
        tanggalExpireNibTdp: this.aspekLegalFromGroup.value.tanggalExpireNibTdp.toISOString(),
        noIdpSitu: this.aspekLegalFromGroup.value.noIdpSitu,
        isIdpSituSeumurHidup: this.aspekLegalFromGroup.value.isIdpSituSeumurHidup ? this.aspekLegalFromGroup.value.isIdpSituSeumurHidup : false,
        tanggalTerbitIdpSitu: this.aspekLegalFromGroup.value.tanggalTerbitIdpSitu.toISOString(),
        tanggalExpireIdpSitu: this.aspekLegalFromGroup.value.tanggalExpireIdpSitu.toISOString()
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
      )
    }
  }


}
