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

  public role!: string;
  public isDisabled: boolean = false;

  public popUpTitle: string = "Verifikasi Kelengkapan";
  public popUpMessage: string = "";
  public redirectOnClosePopUp: boolean = true;

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
        let kelengkapan = resp.data.kelengkapan;
        this.data.profilePerusahaan = kelengkapan.profile_perusahaan;
        this.data.PICPerusahaan = kelengkapan.pic_perusahaan;
        this.data.dokumen = kelengkapan.document;
        this.data.asset = kelengkapan.asset;
        this.data.alamat = kelengkapan.alamat;
        this.data.riwayatPekerjaan = kelengkapan.riwayat_pekerjaan;
        this.data.laporanKeuangan = kelengkapan.laporan_keuangan;
        
        this.role = resp.data.role_vendor.roleType.name;
        if (this.role === "Vendor Basic (sedang diverifikasi)") {
          this.isDisabled = true;
        }
      },
      () => {
        this.popUpMessage = "Gagal mendapatkan kelengkapan data";
        this.triggerPopUp();
      }
    );
  }

  public verify(): any {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      for (let d in this.data) {
        if (!this.data[d]) {
          this.popUpMessage = "Lengkapi data terlebih dahulu";
          this.triggerPopUp();
          return false;
        }
      }
      this.service.verifikasiKelengkapan().subscribe(
        () => {
          this.popUpMessage = "Data anda sudah kami rekam dan sedang dalam tahap verifikasi";
          this.triggerPopUp();
        },
        () => {
          this.popUpMessage = "Pengajuan Verifikasi Gagal";
          this.triggerPopUp();
        }
      );
    }
  }

  triggerPopUp():void  {
    this.eventEmitterService.trigger();
  }

}
