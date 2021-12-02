import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-logo',
  templateUrl: './grid-logo.component.html',
  styleUrls: ['./grid-logo.component.css']
})
export class GridLogoComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  public mediaCards: Array<any> = [
    {
      imageSrc: "./assets/images/landing/pnm.png",
      last: false
    },
    {
      imageSrc: "./assets/images/landing/pegadaian.png",
      last: false
    },
    {
      imageSrc: "./assets/images/landing/pln.png",
      last: false
    },
    {
      imageSrc: "./assets/images/landing/telkom.png",
      last: false
    },
    {
      imageSrc: "./assets/images/landing/pertamina.png",
      last: true
    }
  ];
  
}
