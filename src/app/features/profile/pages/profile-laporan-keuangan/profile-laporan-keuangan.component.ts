import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-laporan-keuangan',
  templateUrl: './profile-laporan-keuangan.component.html',
  styleUrls: ['./profile-laporan-keuangan.component.css']
})
export class ProfileLaporanKeuanganComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public opened = false;
  public openedSaham = false;

  public close() {
    console.log(`Dialog result: ${status}`);
    this.opened = false;
  }

  public open() {
    this.opened = true;
  }

  public closeSaham() {
    console.log(`Dialog result: ${status}`);
    this.openedSaham = false;
  }

  public openSaham() {
    this.openedSaham = true;
  }
}
