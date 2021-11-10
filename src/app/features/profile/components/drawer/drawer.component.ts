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

  public expanded = true;
  public items: Array<any> = [];

  constructor(private router: Router) {
    this.items = this.mapItems(router.config);
    this.items[0].selected = true;
  }

  public onSelect(ev: DrawerSelectEvent): void {
    this.router.navigate([ev.item.path]);
  }

  public mapItems(routes: any[], path?: string): any[] {
    return routes.map((item) => {
      return {
        text: item.text,
        path: item.path ? item.path : "",
      };
    });
  }

}
