import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tender-data',
  templateUrl: './tender-data.component.html',
  styleUrls: ['./tender-data.component.css']
})
export class TenderDataComponent implements OnInit {
  constructor(){}

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

  getDiffDate(date:Date){
    let fromDate = new Date(date);
    let currentDate = new Date();

    let days = Math.floor((currentDate.getTime() - fromDate.getTime()) / 1000 / 60 / 60 / 24);
    let weeks = Math.floor(days/7);
    let months = Math.floor(weeks/4);
    let years = Math.floor(months/12);

    let status = "";

    if(years > 0){
      status = years+"  tahun yang lalu";
    } else if (months > 0) {
      status = months+" bulan yang lalu";
    } else if (weeks > 0) {
      status = weeks+" minggu yang lalu";
    } else if (days > 0) {
      status = days+" hari yang lalu"
    } else {
      status = "Baru"
    }

    return status;
  }
}
