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

  public close() {
    this.opened = false;
  }

  public open() {
    this.opened = true;
  }
  
  public submit() {
    
  }

}
