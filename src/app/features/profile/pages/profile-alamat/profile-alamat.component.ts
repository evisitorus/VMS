import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-alamat',
  templateUrl: './profile-alamat.component.html',
  styleUrls: ['./profile-alamat.component.css']
})
export class ProfileAlamatComponent implements OnInit {

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

  public listItems: Array<string> = ["Item 1", "Item 2", "Item 3"];
}
