import { Component, OnInit, Input, ViewEncapsulation, OnDestroy } from "@angular/core";
import { finalize, delay } from "rxjs/operators";
import { Subscription, Observable, of } from 'rxjs';
import { ListViewDataResult, PageChangeEvent, PagerSettings } from "@progress/kendo-angular-listview";
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';
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

  public popUpTitle: string = "Tender List";
  public popUpMessage: string = "";
  
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

  constructor(
    private tenderService: TenderService,
    private eventEmitterService: EventEmitterService
  ) {}


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
    this.fetchData();
  }

  public fetchData(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }

    this.loading = true;

    this.tenderService.getListTender(this.currentPage).subscribe(
      (resp) =>  {
          this.productsSubscription = this
            .getTender({dataTender:resp })
            .pipe(finalize(() => (this.loading = false)))
            .subscribe((response) => (this.view = response));
      },
      (error) => { 
        this.popUpMessage = "Gagal menemukan data tender";
        this.triggerPopUp();
      }
      )
  }

  getTender(options: { dataTender?:{data:{ meta: {}, tenders:[] } } } = {}): Observable<ListViewDataResult> {
    const delayTime = 1000;

    if (options.dataTender?.data.tenders) {
      this.dataTenders = options.dataTender?.data;
    }
    
    return of({
        data: this.dataTenders.tenders,
        total: this.dataTenders.meta.total
    }).pipe(delay(delayTime)); // simulate remote binding delay
  }

  triggerPopUp() {
    this.eventEmitterService.trigger();
  }

}
