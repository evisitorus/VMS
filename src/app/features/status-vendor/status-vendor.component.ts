import { Component, OnInit } from '@angular/core';
import { ProfileInformationService } from "src/app/core/services/profile-information.service";

@Component({
  selector: 'app-status-vendor',
  templateUrl: './status-vendor.component.html',
  styleUrls: ['./status-vendor.component.css']
})
export class StatusVendorComponent implements OnInit {

  constructor(
    private profileInfoService: ProfileInformationService,
  ) { }

  ngOnInit(): void {
    this.cekStatusVendor();
  }

  public cekStatusVendor() {
    this.profileInfoService.cekStatusVendor().subscribe(
      (resp) => {
        if (resp.data.is_verifying) {
          localStorage.setItem('isDisableEditData', 'yes');
        } else {
          localStorage.setItem('isDisableEditData', 'no');
        }
      },
      (error) => {
      }
    );
  }

}
