import { Component, OnInit } from '@angular/core';

interface Item {
  name: string;
  id: number;
}

@Component({
  selector: 'app-data-pegawai',
  templateUrl: './data-pegawai.component.html',
  styleUrls: ['./data-pegawai.component.css']
})
export class DataPegawaiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public isRequired = true;
  public opened = false;
  public openedSaham = false;
  public listItems: Array<Item> = [];


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
