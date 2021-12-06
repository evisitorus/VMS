import { Component, OnInit } from '@angular/core';
import { ProfileDashboardService } from 'src/app/core/services/profile-dashboard.service';
import {ApiRoutes} from "src/app/core/services/api/api-routes";

@Component({
  selector: 'app-profile-dashboard',
  templateUrl: './profile-dashboard.component.html',
  styleUrls: ['./profile-dashboard.component.css']
})
export class ProfileDashboardComponent implements OnInit {

  constructor(
    private profileService:ProfileDashboardService
  ) { }

  phone_number:string = "";
  name:string="";
  is_active:string="";
  registered_at:string="";
  jenis_kegiatan_usaha:string = "";
  address_vendor:string = "";
  vendor_name: string = "";
  profil: string = "";
  pic: string = "";
  dokumen: string = "";
  keuangan: string = "";
  pekerjaan: string = "";
  aset: string = "";
  alamat: string = "";
  star: string = "";
  public logoImg!: any;


  ngOnInit(): void {
    this.profileService.getVendor().subscribe(
      (resp) => {
        this.jenis_kegiatan_usaha = resp.jenisKegiatanUsaha[0].description;

        if (null === resp.logo) {
          this.logoImg = null;
        } else {
          this.logoImg = ApiRoutes.api_env + resp.logo + "/file";
        }
      },
      (error) => {
      }
    );

    this.profileService.getDashboard().subscribe(
      (resp) => {
        this.phone_number = resp.data.phone_number;
        this.address_vendor = resp.data.address;
        this.registered_at = resp.data.registered_at;
        this.vendor_name = resp.data.name;
      },
      (error) => {
      }
    );

    this.profileService.getVendorStatusData().subscribe(
      (resp) => {
        // console.log(resp)
        this.profil = resp.data.profil_perusahaan;
        this.pic = resp.data.pic_perusahaan;
        this.dokumen = resp.data.dokumen;
        this.alamat = resp.data.alamat;
        this.keuangan= resp.data.keuangan;
        this.pekerjaan= resp.data.pekerjaan;
        this.aset = resp.data.aset;

        const hasValue = Object.values(resp.data).includes(false);
        hasValue ?
        this.star = "bi-star-half" :
        this.star = "bi-star-fill";
      },
      (error) => {
      }
    );
  }
}
