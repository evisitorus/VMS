import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileAspekLegalService } from 'src/app/core/services/profile/profile-aspek-legal.service';
import { ProfileAspekLegalComponent } from '../../profile-aspek-legal.component';

@Component({
  selector: 'app-legalitas',
  templateUrl: './legalitas.component.html',
  styleUrls: ['./legalitas.component.css']
})
export class LegalitasComponent implements OnInit {

  public profileInformationFormGroup!: FormGroup;
  public data:any = {};

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
      },
      (err) => {
        this.parent.popUpMessage = err.error.message;
        this.parent.triggerPopUp();
      }
    )
  }

  public setForm(data: any): void {
    this.profileInformationFormGroup = this.fb.group({
      noAktaPendirian:new FormControl(data.noAktaPendirian, Validators.required),
      tanggalTerbitAktaPendirian: new FormControl(data.tanggalTerbitAktaPendirian, Validators.required),
      notarisAktaPendirian: new FormControl(data.notarisAktaPendirian, Validators.required),
      notarisPenggantiAktaPendirian: new FormControl(data.notarisPenggantiAktaPendirian, Validators.required),
      noAktaPerubahan: new FormControl(data.noAktaPerubahan, Validators.required),
      tanggalTerbitAktaPerubahan: new FormControl(data.tanggalTerbitAktaPerubahan, Validators.required),
      notarisAktaPerubahan: new FormControl(data.notarisAktaPerubahan, Validators.required),
      notarisPenggantiAktaPerubahan:new FormControl(data.notarisPenggantiAktaPerubahan, Validators.required),
      noSkPengesahanMenteri: new FormControl(data.noSkPengesahanMenteri, Validators.required),
      tanggalTerbitNoSkPengesahanMenteri: new FormControl(data.tanggalTerbitNoSkPengesahanMenteri, Validators.required),
      npwp: new FormControl(data.npwp, Validators.required),
      tanggalTerbitNpwp: new FormControl(data.tanggalTerbitNpwp, Validators.required),
      noSiup: new FormControl(data.noSiup, Validators.required),
      tanggalTerbitSiup: new FormControl(data.tanggalTerbitSiup, Validators.required),
      noNibTdp: new FormControl(data.noNibTdp, Validators.required),
      isNiBTdpSeumurHidup: new FormControl(data.isNiBTdpSeumurHidup, Validators.required),
      tanggalTerbitNibTdp: new FormControl(data.tanggalTerbitNibTdp, Validators.required),
      tanggalExpireNibTdp: new FormControl(data.tanggalExpireNibTdp, Validators.required),
      noIdpSitu: new FormControl(data.noIdpSitu, Validators.required),
      isIdpSituSeumurHidup: new FormControl(data.isIdpSituSeumurHidup, Validators.required),
      tanggalTerbitIdpSitu: new FormControl(data.tanggalTerbitIdpSitu, Validators.required),
      tanggalExpireIdpSitu: new FormControl(data.tanggalExpireIdpSitu, Validators.required)
    });
  }


}
