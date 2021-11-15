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

    if (ev.item.text === "Kelola Akun") {
      item!.expanded
        ? this.addChildren(items.kelolaAkun)
        : this.removeChildren(items.kelolaAkun);
    }
    if (ev.item.text === "Tender") {
      item!.expanded
        ? this.addChildren(items.tender)
        : this.removeChildren(items.tender);
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
      text: "Dashboard",
      expanded: false,
      children: false,
      selected: false,
      path: "/dashboard"
    },
    {
      text: "Kelola Akun",
      expanded: false,
      children: true,
      selected: false,
    },
    {
      text: "Tender",
      expanded: false,
      children: true,
      selected: false,
    },
  ],

  tender: [
    {
      text: "Informasi Tender BUMN",
      children: false,
      selected: false,
      level: 1,
    }
  ],

  kelolaAkun: [
    {
      text: "Profil Perusahaan",
      selected: false,
      level: 1,
      path: "/profile-information"
    },
    {
      text: "PIC",
      selected: false,
      level: 1,
    },
    {
      text: "Dokumen",
      selected: false,
      level: 1,
    },
    {
      text: "Alamat",
      selected: false,
      level: 1,
    },
    {
      text: "Laporan Keuangan",
      selected: false,
      level: 1,
    },
    {
      text: "Riwayat Pekerjaan",
      selected: false,
      level: 1,
    },
    {
      text: "Asset",
      selected: false,
      level: 1,
      path: "/profile-aset"
    },
    {
      text: "Verifikasi Kelengkapan",
      selected: false,
      level: 1,
    },
  ],
};
