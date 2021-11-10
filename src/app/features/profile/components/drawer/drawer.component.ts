import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DrawerSelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {

  ngOnInit(): void {
  }

  public expanded = false;
  public items: Array<any> = [
    {path:"/dashboard", text:"Dashboard"},
    {path:"/profile-aset", text:"Profile Assets"}
  ];

  constructor(private router: Router) {
    this.items[0].selected = true;
  }

  // public expanded = true;
  // public items: Array<any> = [];

  // constructor(private router: Router) {
  //   this.items = this.mapItems(router.config);
  //   this.items[0].selected = true;
  // }

  // public onSelect(ev: DrawerSelectEvent): void {
  //   this.router.navigate([ev.item.path]);
  // }

  // public mapItems(routes: any[], path?: string): any[] {
  //   return routes.map((item) => {
  //     return {
  //       text: item.text,
  //       path: item.path ? item.path : "",
  //     };
  //   });
  // }

}


export const items = {
  parents: [
    {
      text: "Getting Started",
      icon: "k-i-information",
      expanded: false,
      children: true,
      selected: false,
    },
    {
      text: "Overview",
      icon: "k-i-zoom",
      expanded: false,
      children: true,
      selected: false,
    },
    {
      text: "Most Popular Widgets",
      icon: "k-i-star",
      expanded: false,
      children: false,
      selected: false,
    },
  ],

  overview: [
    {
      text: "About Angular",
      icon: "k-i-js",
      children: false,
      selected: false,
      level: 1,
    },
    {
      text: "All Angular Components",
      icon: "k-i-style-builder",
      children: false,
      selected: false,
      level: 1,
    },
  ],

  gettingStarted: [
    {
      text: "About Kendo UI",
      icon: "k-i-question",
      selected: false,
      level: 1,
    },
    {
      text: "Supported Themes",
      icon: "k-i-palette",
      selected: false,
      level: 1,
    },
  ],
};
