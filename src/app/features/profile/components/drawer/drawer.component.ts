import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DrawerSelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  public selected: any;
  public items = items.parents;
  public itemIndex: any;

  public onSelect(ev: DrawerSelectEvent): void {
    this.selected = ev.item.text;

    const item = this.items.find((e, index) => {
      this.itemIndex = index;
      return e.text === ev.item.text;
    });

    item!.expanded ? (item!.expanded = false) : (item!.expanded = true);

    if (ev.item.text === "Getting Started") {
      item!.expanded
        ? this.addChildren(items.gettingStarted)
        : this.removeChildren(items.gettingStarted);
    }
    if (ev.item.text === "Overview") {
      item!.expanded
        ? this.addChildren(items.overview)
        : this.removeChildren(items.overview);
    }

    if (ev.item.path) {
      this.router.navigate([ev.item.path]);
    }

  }

  public addChildren(children: any) {
    this.items.splice(this.itemIndex + 1, 0, ...children);
  }

  public removeChildren(children: Array<any>) {
    this.items.splice(this.itemIndex + 1, children.length);
  }

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
      path: "/profile-aset"
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
