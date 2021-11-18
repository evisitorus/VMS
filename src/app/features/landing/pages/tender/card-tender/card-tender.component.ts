import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { finalize } from "rxjs/operators";
import {
  ListViewDataResult,
  PageChangeEvent,
} from "@progress/kendo-angular-listview";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { ProductsService } from "./product.service";
import { TenderDataComponent } from "../tender-data/tender-data.component";
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-card-tender',
  templateUrl: './card-tender.component.html',
  styleUrls: ['./card-tender.component.css']
})
export class CardTenderComponent implements OnInit, OnDestroy {
  public view!: ListViewDataResult;
  public loading = false;

  public skip = 0;
  public pageSize = 20;

  public get showPager(): boolean {
    return this.view && this.view.total > 0;
  }

  private productsSubscription = new Subscription();

  constructor(private productsService: ProductsService) {}


  ngOnInit(): void {
    this.fetchData();
  }

  public ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }

  public handlePageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.pageSize = event.take;

    this.fetchData();
  }

  public fetchData(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }

    this.loading = true;
    // this.productsSubscription = this.productsService
    //   .get({ skip: this.skip, take: this.pageSize })
    //   .pipe(finalize(() => (this.loading = false)))
    //   .subscribe((response) => (this.view = response));
      this.productsSubscription = this.productsService
        .getTender({ skip: this.skip, take: this.pageSize })
        .pipe(finalize(() => (this.loading = false)))
        .subscribe((response) => (this.view = response));
  }

  @Input()
  product!: {
    productID: number;
    productName: string;
    unitPrice: number;
  };
}
