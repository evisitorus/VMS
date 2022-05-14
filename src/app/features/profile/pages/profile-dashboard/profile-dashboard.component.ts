import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from '@progress/kendo-angular-notification';
import { ProfileDashboardService } from 'src/app/core/services/profile-dashboard.service';
import { dictionary } from 'src/app/dictionary/dictionary';

@Component({
  selector: 'app-profile-dashboard',
  templateUrl: './profile-dashboard.component.html',
  styleUrls: ['./profile-dashboard.component.css']
})
export class ProfileDashboardComponent implements OnInit {

  constructor(
    private profileService:ProfileDashboardService,
    private notification: NotificationService
  ) { }

  star: string = "bi-star";

  public tenders: any = {
    total: 0,
    followed: 0,
    onGoing: 0,
    denied: 0
  };

  public vendor: any = {
    type: "-",
    status: "-",
    registeredDate: "-",
    lastUpdatedDate: "-",
    verifiedDate: "-"
  }

  public verification: any = {
    informasi_umum: {
      status: false,
      text: dictionary.undefined_data,
      submission_status: dictionary.undefined_data
    },
    tata_kelola_perusahaan: {
      status: false,
      text: dictionary.undefined_data,
      submission_status: dictionary.undefined_data
    },
    aspek_finansial: {
      status: false,
      text: dictionary.undefined_data,
      submission_status: dictionary.undefined_data
    },
    aspek_legal: {
      status: false,
      text: dictionary.undefined_data,
      submission_status: dictionary.undefined_data
    },
    riwayat_pekerjaan: {
      status: false,
      text: dictionary.undefined_data,
      submission_status: dictionary.undefined_data
    }
  };

  ngOnInit(): void {
    this.getDataTenders();
    this.getVerificationStatus();
    this.getVerificationData();
  }

  private getDataTenders() {
    this.profileService.getTenders().subscribe(
      (resp) => {
        this.tenders = resp;
      },
      () => {
        this.showNotification("error", dictionary.error_get_tender_data);
      }
    );
  }

  private getVerificationStatus() {
    this.profileService.getVerificationStatus().subscribe(
      (resp) => {
        let data = resp.data;
        this.vendor.type = data.vendor_type;
        this.vendor.status = data.verified_at !== null ? VERIFIED : data.vendor_type === VENDOR_IS_VERIFYING ? VERIFICATION_ONGOING : UNVERIFIED;
        this.vendor.registeredDate = data.registered_at ? formatDate(data.registered_at.date, "dd MMMM YYYY", "en-US") : "-";
        this.vendor.lastUpdatedDate = data.updated_at ? formatDate(data.updated_at.date, "dd MMMM YYYY", "en-US") : "-";
        this.vendor.verifiedDate = data.verified_at ? formatDate(data.verified_at.date, "dd MMMM YYYY", "en-US") : "-"

        switch (data.vendor_type) {
          case VENDOR_IS_VERIFYING:
            this.star = "bi-star-half";
            break;
          case VENDOR_PRO:
            this.star = "bi-star-fill";
            break;
          default:
            this.star = "bi-star";
            break;
        }
      },
      () => {
        this.showNotification("error", dictionary.error_get_status_verification);
      }
    );
  }

  private getVerificationData() {
    this.profileService.getVerificationData().subscribe(
      (resp) => {
        console.debug(resp.data.kelengkapan);
        this.verification = resp.data.kelengkapan;
      },
      () => {
        this.showNotification("error", dictionary.error_get_verification_data);
      }
    );
  }

  public showNotification(type: "success" | "none" | "warning" | "error" | "info" | undefined, message: string): void {
    this.notification.show({
      content: message,
      closable: true,
      hideAfter: 2000,
      position: { horizontal: "right", vertical: "top" },
      animation: { type: "fade", duration: 500 },
      type: { style: type, icon: true },
    });
  }

}

const VENDOR_PRO = dictionary.vendor_pro;
const VENDOR_IS_VERIFYING = dictionary.vendor_is_verifying;
const VERIFIED = dictionary.verified;
const VERIFICATION_ONGOING = dictionary.verification_ongoing;
const UNVERIFIED = dictionary.unverified;