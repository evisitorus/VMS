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
    profilePerusahaan: {
      status: false,
      text: "Completed"
    },
    PICPerusahaan: {
      status: false,
      text: "Completed"
    },
    dokumen: {
      status: false,
      text: "Completed"
    },
    alamat: {
      status: false,
      text: "Completed"
    },
    laporanKeuangan: {
      status: false,
      text: "Completed"
    },
    riwayatPekerjaan: {
      status: false,
      text: "Completed"
    },
    asset: {
      status: false,
      text: "Completed"
    },    
  };

  public role!: string;
  public isDisabled: boolean = false;

  public popUpTitle: string = "Verifikasi Kelengkapan";
  public popUpMessage: string = "";
  public redirectOnClosePopUp: boolean = true;

  public verificationStatus: string = "";
  public roles : any = {
    vendorBasic : "Vendor Basic",
    vendorBasicVerifying : "Vendor Basic (sedang diverifikasi)",
    vendorPro : "Vendor Pro"
  };

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
        this.data.profilePerusahaan.status = kelengkapan.profile_perusahaan.status;
        this.data.profilePerusahaan.text = kelengkapan.profile_perusahaan.text;
        this.data.PICPerusahaan.status = kelengkapan.pic_perusahaan.status;
        this.data.PICPerusahaan.text = kelengkapan.pic_perusahaan.text;
        this.data.dokumen.status = kelengkapan.document.status;
        this.data.dokumen.text = kelengkapan.document.text;
        this.data.asset.status = kelengkapan.asset.status;
        this.data.asset.text = kelengkapan.asset.text;
        this.data.alamat.status = kelengkapan.alamat.status;
        this.data.alamat.text = kelengkapan.alamat.text;
        this.data.riwayatPekerjaan.status = kelengkapan.riwayat_pekerjaan.status;
        this.data.riwayatPekerjaan.text = kelengkapan.riwayat_pekerjaan.text;
        this.data.laporanKeuangan.status = kelengkapan.laporan_keuangan.status;
        this.data.laporanKeuangan.text = kelengkapan.laporan_keuangan.text;
        
        this.role = resp.data.role_vendor.roleType.name;
        if (this.role === this.roles.vendorBasicVerifying || this.role === this.roles.vendorPro) {
          this.isDisabled = true;
          this.verificationStatus = this.role === this.roles.vendorBasicVerifying ? "Sedang dalam proses verifikasi" : "Terverifikasi";
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
