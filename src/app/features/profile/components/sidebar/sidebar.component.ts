import { componentFactoryName } from '@angular/compiler';
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
    title: "Dashboard",
    route:"/dashboard",
    id: "sidebar-dashboard" 
  },
  { 
    id: "sidebar-kelola-akun",
    title: "Kelola Akun",
    expanded: "true",
    children: [
      { title: "Profil Perusahaan", route:"/profile-information", id: "sidebar-profile-information"  },
      { title: "PIC", route:"/profile-person-in-charge", id: "sidebar-pic"  },
      { title: "Dokumen", route:"/profile-dokumen", id: "sidebar-dokumen"  },
      { title: "Alamat", route:"/profile-alamat", id: "sidebar-alamat"  },
      { title: "Laporan Keuangan", route:"/profile-laporan-keuangan", id: "sidebar-laporan-keuangan"  },
      { title: "Riwayat Pekerjaan" , route:"/profile-riwayat-pekerjaan", id: "sidebar-riwayat-pekerjaan"  },
      { title: "Asset", route:"/profile-aset", id: "sidebar-aset"  },
      { title: "Verifikasi Kelengkapan", route:"/profile-verification", id: "sidebar-verification"  },
      { title: " ", id: ""}
    ]
  },
  { 
    title: "Tender",
    id: "sidebar-tender",
    children: [
      { title: "Informasi Tender BUMN", route:"/", id: "sidebar-tender-bumn"  }
    ]
  },
];