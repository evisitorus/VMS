import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from '@progress/kendo-angular-notification';
import { ProfileDashboardService } from 'src/app/core/services/profile-dashboard.service';

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
        this.showNotification("error", "Gagal mendapatkan data tender");
      }
    );
  }

  private getVerificationStatus() {
    this.profileService.getVerificationStatus().subscribe(
      (resp) => {
        let data = resp.data;
        this.vendor.type = data.vendor_type;
        this.vendor.status = data.verified_at !== null ? "Terverifikasi" : data.vendor_type === VENDOR_IS_VERIFYING ? "Menunggu Verifikasi" : "Belum Terverifikasi";
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
        this.showNotification("error", "Gagal mendapatkan data status verifikasi");
      }
    );
  }

  private getVerificationData() {
    this.profileService.getVerificationData().subscribe(
      (resp) => {
        console.debug(resp.data.kelengkapan);
      },
      () => {

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

const VENDOR_PRO = "Vendor Pro";
const VENDOR_IS_VERIFYING = "Vendor Basic (sedang diverifikasi)";