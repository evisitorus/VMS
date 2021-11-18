import { Component, OnInit, Input, ViewEncapsulation, OnDestroy } from "@angular/core";
import { finalize, delay } from "rxjs/operators";
import { Subscription, Observable, of } from 'rxjs';
import { ListViewDataResult, PageChangeEvent, PagerSettings } from "@progress/kendo-angular-listview";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { ProductsService } from "./product.service";
import { TenderDataComponent } from "../tender-data/tender-data.component";
import { HttpClientModule } from '@angular/common/http';

import { TenderService } from 'src/app/core/services/tender.service';

@Component({
  selector: 'app-card-tender',
  templateUrl: './card-tender.component.html',
  styleUrls: ['./card-tender.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CardTenderComponent implements OnInit, OnDestroy {
  public view!: ListViewDataResult;
  public loading = false;

  public skip = 0;
  public pageSize = 16;
  public currentPage = 1;

  public dataTenders: any;

  public get showPager(): boolean {
    return this.view && this.view.total > 0;
  }

  public pagerSettings: PagerSettings = {
    previousNext: true,
    pageSizeValues: false,
    buttonCount: 5,
    info: true,
  };

  private productsSubscription = new Subscription();

  constructor(private tenderService: TenderService) {}


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
    this.currentPage = (this.skip/this.pageSize)+1;

    console.log(this.currentPage);

    this.fetchData();
  }

  public fetchData(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }

    this.loading = true;

    // this.productsSubscription = this
    //   .getTender({ skip: this.skip, take: this.pageSize, page:this.currentPage, dataTender:this.dataTenders })
    //   .pipe(finalize(() => (this.loading = false)))
    //   .subscribe((response) => (this.view = response));


    this.tenderService.getListTender(this.currentPage).subscribe(
      (resp) =>  {
          this.productsSubscription = this
            .getTender({ skip: this.skip, take: this.pageSize, page:this.currentPage, dataTender:resp })
            .pipe(finalize(() => (this.loading = false)))
            .subscribe((response) => (this.view = response));
          return resp;
      },
      (error) => { 
          console.log(error);
          return error;
      }
      )
  }

  getTender(options: { skip?: number, take?: number, page?:number, dataTender?:{data:{ meta: {}, tenders:[] } } } = {}): Observable<ListViewDataResult> {

    const skip = options.skip || 0;
    const take = options.take || this.dataTenders.meta.total;
    const delayTime = 1000;

    console.log(options.dataTender?.data);

    if (options.dataTender?.data.tenders) {
      this.dataTenders = options.dataTender?.data;
    }
    
    return of({
        // data: tenders.data.tenders.slice(skip, skip + take).map(item => ({ ...item })),
        data: this.dataTenders.tenders,
        total: this.dataTenders.meta.total
    }).pipe(delay(delayTime)); // simulate remote binding delay
  }

}
