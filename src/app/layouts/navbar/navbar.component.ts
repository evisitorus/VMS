import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DropDownButton } from '@progress/kendo-angular-buttons';
import { NotificationService } from '@progress/kendo-angular-notification';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./navbar.component.css', '../../app.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor(
    private authService: AuthService,
    private notificationService: NotificationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn() === 'true';
    this.route.queryParams.subscribe(
      (param) => {
        if (param.signout) {
          this.showNotification();
        }
      }
    );
  }

  logout(): void {
    this.authService.setLoggedIn(false);
    localStorage.removeItem('access_token');
    localStorage.removeItem('person_id');
    localStorage.removeItem('vendor_id');
    this.refresh();
  }

  refresh(): void {
    location.href = "/?signout=true";
  }

  public data: Array<any> = [
    {
      text: 'Ubah Kata Sandi',
      href: 'profile-ubah-sandi'
    },
    {
      text: 'Logout',
      href: 'logout'
    }
  ];

  public doClickProfileMenu(data: any) {
    if (data.text === 'Logout') {
      this.logout();
    } else {
      window.location.href=data.href;
    }
  }



  public showNotification(): void {
    this.notificationService.show({
      content: "Terima Kasih!",
      closable: true,
      hideAfter: 1000,
      position: { horizontal: "right", vertical: "top" },
      animation: { type: "fade", duration: 500 },
      type: { style: "success", icon: true },
    });
  }

}
