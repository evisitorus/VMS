import { Component, OnInit } from '@angular/core';
import { ProfileDashboardService } from 'src/app/core/services/profile-dashboard.service';

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

  ngOnInit(): void {
    this.profileService.getVendorData().subscribe(
      (resp) => {
        this.phone_number = resp.data.phone_number;
        this.name = resp.data.name;
        this.is_active = resp.data.is_active;
        this.registered_at = resp.data.registered_at;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
