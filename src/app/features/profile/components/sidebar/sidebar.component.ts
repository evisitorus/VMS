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
    route:"/dashboard",
    id: "sidebar-dashboard" 
  },
  { 
    path: "Kelola Akun",
    children: [
      { path: "Profil Perusahaan", route:"/profile-information", id: "sidebar-dashboard"  },
      { path: "PIC", route:"/profile-person-in-charge", id: "sidebar-pic"  },
      { path: "Dokumen", route:"/profile-dokumen", id: "sidebar-dokumen"  },
      { path: "Alamat", route:"/profile-alamat", id: "sidebar-alamat"  },
      { path: "Laporan Keuangan", route:"/profile-laporan-keuangan", id: "sidebar-laporan-keuangan"  },
      { path: "Riwayat Pekerjaan" , route:"/profile-riwayat-pekerjaan", id: "sidebar-riwayat-pekerjaan"  },
      { path: "Asset", route:"/profile-aset", id: "sidebar-aset"  },
      { path: "Verifikasi Kelengkapan", route:"/profile-verification", id: "sidebar-verification"  },
      { path: " "}
    ]
  },
  { 
    path: "Tender",
    children: [
      { path: "Informasi Tender BUMN", route:"/", id: "sidebar-tender"  }
    ]
  },
];