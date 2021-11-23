import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '@progress/kendo-angular-notification';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', '../../app.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor(
    private authService: AuthService,
    private notificationService: NotificationService,
    private route: ActivatedRoute
  ){}

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
    this.refresh();
  }

  refresh(): void {
    location.href = "/?signout=true";
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
