import { Component, OnInit, Input } from '@angular/core';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

@Component({
  selector: 'app-tender-data',
  templateUrl: './tender-data.component.html',
  styleUrls: ['./tender-data.component.css']
})
export class TenderDataComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  product!: {
    productID: number;
    productName: string;
    unitPrice: number;
  };

  @Input()
  tender!: {
    cparent: {
        id: number,
        name: string;
    }
    name:string;
    id:number
  }

}
