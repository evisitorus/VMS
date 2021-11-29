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
  public pageSize = 10;
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
    position: "both"
  };

  public hiddenFilter: boolean = true;
  public filterCategory!: Array<{ text: string; value: number }>;
  public listFilterCategory: Array<{ text: string; value: number }> = [
    { text: "Semua Kategori", value: 1 },
    { text: "Material Konstruksi", value: 2 },
    { text: "Jasa Konstruksi & Renovasi", value: 3 },
  ];
  public listFilterCreatedAt: Array<string> = [
    "Terbaru",
    "Terlama",
    "HPS Terendah",
    "HPS Tertinggi"
  ];
  public listFilterStatus: Array<string> = [
    "Semua Status",
    "Aktif",
    "Calon Pemenang Terpilih",
    "Pemenang Terpilih",
    "Masa Sanggah",
    "Selesai",
    "Dibatalkan"
  ];
  public selectedCategoryItem: any = this.listFilterCategory[0];
  public selectedCreatedAtItem: any = this.listFilterCreatedAt[0];
  public selectedStatusItem: any = this.listFilterStatus[0];

  private productsSubscription = new Subscription();

  constructor(
    private tenderService: TenderService,
    private eventEmitterService: EventEmitterService
  ) {}


  ngOnInit(): void {
    this.fetchData();
    this.setFilter();
  }

  public setFilter(): void {
    this.filterCategory = this.listFilterCategory.slice();
  }

  public resetFilter(): void {
    
  }

  public handleFilter(value: any): void {
    this.filterCategory = this.listFilterCategory.filter(
      (s) => s.text.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
  }

  public toggleFilter(): void {
    this.hiddenFilter = !this.hiddenFilter;
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
