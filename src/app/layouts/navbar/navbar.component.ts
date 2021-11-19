import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router
  ){}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn() === 'true';
  }

  logout(): void {
    this.authService.setLoggedIn(false);
    this.refresh();
  }

  refresh() {
    location.reload();
  }
}
