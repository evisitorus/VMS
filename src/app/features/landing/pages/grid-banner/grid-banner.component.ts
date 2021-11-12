import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-banner',
  templateUrl: './grid-banner.component.html',
  styleUrls: ['./grid-banner.component.css']
})
export class GridBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public avatarSrc =
  "https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg";
public imageSrc =
  "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/sofia.jpg";
}
