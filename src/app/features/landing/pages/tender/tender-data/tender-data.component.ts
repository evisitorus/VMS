import { Component, OnInit, Input } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

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
    category: {
      id: number,
      name: string
    },
    cparent: {
        id: number,
        name: string;
    }
    hps_hide: number,
    hps_total: number,
    id: number,
    method: {
        desc: string,
        id: number,
        name: string
    },
    name: string,
    province: {
        id: number,
        name: string
    },
    publish_at: Date,
    registration_end: Date,
    status: {
        id: number,
        name: string
    },
    winner_hide: number,
    winners: []
  }

  public getAvatar(bumn: number): string {
    return `./assets/images/${bumn}.png`;
}

}
