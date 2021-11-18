import { Component, OnInit, Input, ViewEncapsulation, OnDestroy } from '@angular/core';
import { PagerSettings, ListViewDataResult, ListViewModule, PageChangeEvent } from "@progress/kendo-angular-listview";
import { Subscription, Observable, of } from "rxjs";
import { finalize, delay } from "rxjs/operators";


import { TenderService } from 'src/app/core/services/tender.service';
import { tenders } from './tender';
// import { ProductsService } from "./products.service";

@Component({
  selector: 'app-list-tender',
  templateUrl: './list-tender.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./list-tender.component.css']
})
export class ListTenderComponent implements OnInit, OnDestroy  {

  public view!: ListViewDataResult;
  public dataTenders: any;
  public loading = false;

  public skip = 0;
  public pageSize = 20;

  constructor(
    private tenderService: TenderService,
    // private productsService: ProductsService
  ) { }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.dataTenders = this.getListTender();

    console.log(this.dataTenders);

    this.pageSize = 123;


    this.fetchData();

  }

  public pagerSettings: PagerSettings = {
    previousNext: true,
    pageSizeValues: false,
    buttonCount: 9,
    info: true,
  };

  getListTender(){
    this.tenderService.getListTender().subscribe(
      (resp) =>  { 
        this.dataTenders = resp.data.tenders;
        this.pageSize = resp.data.per_page;
        // this.tender = resp;
        return resp
      },
      (error) => { 
        console.log("error");
        console.log(error);
      }
    )
  };

  public getAvatar(bumn: number): string {
      return `./assets/images/${bumn}.png`;
  }

  public get showPager(): boolean {
    return this.view && this.view.total > 0;
  }

  private productsSubscription = new Subscription();


  public fetchData(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }

    this.loading = true;
    this.productsSubscription = this
      .get({ skip: this.skip, take: this.pageSize })
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((response) => (this.view = response));
  }

  public handlePageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.pageSize = event.take;

    this.fetchData();
  }

  public get(
    options: { skip?: number; take?: number } = {}
  ): Observable<ListViewDataResult> {
    const skip = options.skip || 0;
    const take = options.take || tenders.data.meta.total;
    const delayTime = 1000;

    return of({
      data: tenders.data.tenders.slice(skip, skip + take).map((item) => ({ ...item })),
      total: tenders.data.meta.total,
    }).pipe(delay(delayTime)); // simulate remote binding delay
  }
}
