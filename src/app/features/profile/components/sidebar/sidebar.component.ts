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

  public navigate(url: string|undefined): void {
    console.log(url);
    if (url !== "" && url != undefined) {
      window.location.href = url;
    }
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
      { title: "Informasi Umum", route:"/profile-information", id: "sidebar-profile-information"  },
      { title: "Tata Kelola Perusahaan", route:"/profile-tata-kelola-perusahaan", id: "sidebar-tata-kelola"  },
      { title: "Aspek Finansial", route:"/profile-laporan-keuangan", id: "sidebar-laporan-keuangan"  },
      { title: "Aspek Legal", route:"/profile-aspek-legal", id: "sidebar-aspek-legal"  },
      { title: "Riwayat Pekerjaan" , route:"/profile-riwayat-pekerjaan", id: "sidebar-riwayat-pekerjaan"  },
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