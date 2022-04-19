import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DialogCloseResult, DialogRef, DialogService } from '@progress/kendo-angular-dialog';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';
import { ProfileKelengkapanService } from 'src/app/core/services/profile/profile-kelengkapan.service';
import { dictionary } from 'src/app/dictionary/dictionary';

@Component({
  selector: 'app-profile-verifikasi-kelengkapan',
  templateUrl: './profile-verifikasi-kelengkapan.component.html',
  styleUrls: ['./profile-verifikasi-kelengkapan.component.css']
})
export class ProfileVerifikasiKelengkapanComponent implements OnInit {

  public now: any = formatDate(new Date, "dd MMMM YYYY", "en-US");

  public data: any = {
    informasiUmum: {
      status: false,
      text: "Incomplete"
    },
    tataKelolaPerusahaan: {
      status: false,
      text: "Incomplete"
    },
    aspekFinansial: {
      status: false,
      text: "Incomplete"
    },
    aspekLegal: {
      status: false,
      text: "Incomplete"
    },
    riwayatPekerjaan: {
      status: false,
      text: "Incomplete"
    }    
  };

  public role!: string;
  public isDisabled: boolean = false;

  public popUpConfirmationMessage: string = "";
  public popUpTitle: string = "Pengajuan Verifikasi";
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
    private dialogService: DialogService,
  ) { }

  ngOnInit(): void {
    this.getDataKelengkapan();
  }

  public getDataKelengkapan(): void {
    this.service.getDataKelengkapan().subscribe(
      (resp) => {
        let kelengkapan = resp.data.kelengkapan;

        this.data.informasiUmum.status = kelengkapan.informasi_umum.status;
        this.data.informasiUmum.text = kelengkapan.informasi_umum.text;
        this.data.tataKelolaPerusahaan.status = kelengkapan.tata_kelola_perusahaan.status;
        this.data.tataKelolaPerusahaan.text = kelengkapan.tata_kelola_perusahaan.text;
        this.data.aspekFinansial.status = kelengkapan.aspek_finansial.status;
        this.data.aspekFinansial.text = kelengkapan.aspek_finansial.text;
        this.data.aspekLegal.status = kelengkapan.aspek_legal.status;
        this.data.aspekLegal.text = kelengkapan.aspek_legal.text;
        this.data.riwayatPekerjaan.status = kelengkapan.riwayat_pekerjaan.status;
        this.data.riwayatPekerjaan.text = kelengkapan.riwayat_pekerjaan.text;
        
        this.role = resp.data.role_vendor.roleType.name;
        if (this.role === this.roles.vendorBasicVerifying || this.role === this.roles.vendorPro) {
          this.isDisabled = true;
          this.verificationStatus = this.role === this.roles.vendorBasicVerifying ? "Sedang dalam proses verifikasi" : "Terverifikasi";
        }
      },
      () => {
        this.popUpMessage = dictionary.fetch_data_kelengkapan_failed;
        this.triggerPopUp();
      }
    );
  }

  public verify(): any {
    let confirmed = true;

    for (let d in this.data) {
      if (!this.data[d]['status']) {
        this.popUpMessage = dictionary.incomplete_data;
        this.triggerPopUp();
        confirmed = false;
        break;
      }
    }

    if (confirmed) {
      this.service.verifikasiKelengkapan().subscribe(
        () => {
          this.popUpMessage = dictionary.verification_submited;
          this.triggerPopUp();
        },
        () => {
          this.popUpMessage = dictionary.verification_failed;
          this.triggerPopUp();
        }
      );
    }
  }

  public cancelConfirmation() : any {
    const dialog: DialogRef = this.dialogService.open({
      title: "Konfirmasi Pembatalan",
      content: "Anda akan membatalkan Pengajuan Verifikasi ?",
      actions: [{ text: "Tidak" }, { text: "Ya", primary: true }],
      width: 450,
      height: 200,
      minWidth: 250,
    });

    dialog.result.subscribe((result) => {
      if (!(result instanceof DialogCloseResult) && result.text === "Ya") {
        this.cancel();
      } 
    });
  }

  public cancel(): any {
    this.service.batalVerifikasiKelengkapan().subscribe(
      () => {
        this.popUpMessage = dictionary.cancel_verification_submited;
        this.triggerPopUp();
      },
      () => {
        this.popUpMessage = dictionary.cancel_verification_failed;
        this.triggerPopUp();
      }
    );
  }

  triggerPopUp():void  {
    this.eventEmitterService.trigger();
  }

}
