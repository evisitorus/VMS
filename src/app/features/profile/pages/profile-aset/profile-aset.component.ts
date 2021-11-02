import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-aset',
  templateUrl: './profile-aset.component.html',
  styleUrls: ['./profile-aset.component.css']
})
export class ProfileAsetComponent implements OnInit {

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
