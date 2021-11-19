import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-dokumen',
  templateUrl: './profile-dokumen.component.html',
  styleUrls: ['./profile-dokumen.component.css']
})
export class ProfileDokumenComponent implements OnInit {

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

  public value: Date = new Date();
}
