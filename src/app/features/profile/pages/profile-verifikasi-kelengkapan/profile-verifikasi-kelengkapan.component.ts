import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';
import { ProfileKelengkapanService } from 'src/app/core/services/profile/profile-kelengkapan.service';

@Component({
  selector: 'app-profile-verifikasi-kelengkapan',
  templateUrl: './profile-verifikasi-kelengkapan.component.html',
  styleUrls: ['./profile-verifikasi-kelengkapan.component.css']
})
export class ProfileVerifikasiKelengkapanComponent implements OnInit {

  public form!: FormGroup;
  public disclaimer!: boolean;
  public data: any = {
    profilePerusahaan: false,
    PICPerusahaan: false,
    dokumen: false,
    alamat: false,
    laporanKeuangan: false,
    riwayatPekerjaan: false,
    asset: false,    
  };

  public popUpTitle: string = "Verifikasi Kelengkapan";
  public popUpMessage: string = "";

  constructor(
    private service: ProfileKelengkapanService,
    private eventEmitterService: EventEmitterService,
  ) { }

  ngOnInit(): void {
    this.setForm();
    this.getDataKelengkapan();
  }

  public setForm(): void {
    this.form = new FormGroup({
      disclaimer: new FormControl(this.disclaimer, [Validators.requiredTrue])
    });
  }

  public getDataKelengkapan(): void {
    this.service.getDataKelengkapan().subscribe(
      (resp) => {
        this.data.profilePerusahaan = resp.data.profile_perusahaan;
        this.data.PICPerusahaan = resp.data.pic_perusahaan;
        this.data.dokumen = resp.data.document;
        this.data.asset = resp.data.asset;
        this.data.alamat = resp.data.alamat;
        this.data.riwayatPekerjaan = resp.data.riwayat_pekerjaan;
        this.data.laporanKeuangan = resp.data.laporan_keuangan;
      },
      () => {
        this.popUpMessage = "Gagal mendapatkan kelengkapan data";
        this.triggerPopUp();
      }
    );
  }

  public verify(): void {
    if (this.form.valid) {
      this.popUpMessage = "Proses Verifikasi sedang dalam proses";
      this.triggerPopUp();
    } else {
      this.popUpMessage = "Lengkapi data terlebih dahulu";
      this.triggerPopUp();
    }
  }

  triggerPopUp():void  {
    this.eventEmitterService.trigger();
  }

}
