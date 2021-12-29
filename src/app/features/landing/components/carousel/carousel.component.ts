import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  isLoggedIn = false;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn() === 'true';
  }

  navigate(url: string): void {
    window.location.href = url;
  }

}
