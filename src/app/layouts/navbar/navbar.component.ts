import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', '../../app.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn() === 'true';
  }

  logout(): void {
    this.authService.setLoggedIn(false);
    this.navigateTo("/");
  }

  navigateTo(url: string): void {
    window.location.href = url;
  }

}
