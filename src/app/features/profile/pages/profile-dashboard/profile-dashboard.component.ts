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

  ngOnInit(): void {
    this.profileService.getVendorData().subscribe(
      
    );
  }

}
