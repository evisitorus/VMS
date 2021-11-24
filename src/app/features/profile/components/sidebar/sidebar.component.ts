import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PanelBarItemModel } from '@progress/kendo-angular-layout';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  selectedId = "";
  menu = items;

  constructor() {}

  ngOnInit(): void {}

  public stateChange(data: Array<PanelBarItemModel>): boolean {
    const focusedEvent: PanelBarItemModel = data.filter(
      (item) => item.focused === true
    )[0];

    if (focusedEvent.id !== "info") {
      this.selectedId = focusedEvent.id;
      // this.router.navigate(["/" + focusedEvent.id]);
    }

    return false;
  }

}

const items = [
  { 
    path: "Dashboard",
  },
  { 
    path: "Kelola Akun",
    children: [
      { path: "Profil Perusahaan", route:"/profile-information" },
      { path: "PIC", route:"/profile-person-in-charge" },
      { path: "Dokumen", route:"/profile-dokumen" },
      { path: "Alamat", route:"/profile-alamat" },
      { path: "Laporan Keuangan", route:"/profile-laporan-keuangan" },
      { path: "Riwayat Pekerjaan" , route:"/profile-riwayat-pekerjaan" },
      { path: "Asset", route:"/profile-aset" },
      { path: "Verifikasi Kelengkapan", route:"/profile-verification" },
      { path: " "}
    ]
  },
  { 
    path: "Tender",
    children: [
      { path: "Informasi Tender BUMN" }
    ]
  },
];