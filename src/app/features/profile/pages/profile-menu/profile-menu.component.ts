import {Component, ViewChild} from '@angular/core';
import {TextBoxComponent} from "@progress/kendo-angular-inputs";

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.css']
})
export class ProfileMenuComponent {
  @ViewChild("password") public textbox!: TextBoxComponent;

  public toggleVisibility(): void {
    const inputEl = this.textbox.input.nativeElement;
    inputEl.type = inputEl.typ === "password" ? "text" : "password";
  }

  public items: any[] = items;
  //
  // constructor(private router: Router) {
  //   this.items = this.mapItems(router.config);
  // }
  //
  // private mapItems(routes: any[], path?: string): any[] {
  //   return routes.map((item) => {
  //     const result: any = {
  //       text: item.text,
  //       path: (path ? `${path}/` : "") + item.path,
  //     };
  //
  //     if (item.children) {
  //       result.items = this.mapItems(item.children, item.path);
  //     }
  //
  //     return result;
  //   });
  // }
}

export const items: any[] = [
  {
    text: "Profil Perusahaan",
  },
  {
    text: "PIC",
  },
  {
    text: "Dokumen",
  },
  {
    text: "Alamat",
  },
  {
    text: "Laporan Keuangan",
  },
  {
    text: "Riwayat Pekerjaan",
  },
  {
    text: "Asset",
  },
  {
    text: "Verifikasi Kelengkapan",
  },
];
