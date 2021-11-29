import { Component, OnInit, Input, ViewEncapsulation, OnDestroy } from "@angular/core";
import { finalize, delay } from "rxjs/operators";
import { Subscription, Observable, of } from 'rxjs';
import { ListViewDataResult, PageChangeEvent, PagerSettings } from "@progress/kendo-angular-listview";
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';
import { TenderService } from 'src/app/core/services/tender.service';
import { FormControl, FormGroup } from "@angular/forms";
  
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
  public query!: string;

  public orderBy!: Array<any>;
  public filterCategory!: Array<any>;
  public filterStatus!: Array<any>;
  public filterKeyword: string = "";
  public filterHpsStart!: number;
  public filterHpsEnd!: number;

  public listOrderBy: Array<any> = tenderOrderBy;
  public listFilterCategory: Array<any> = categoryTender;
  public listFilterStatus: Array<string> = statusTender;

  public selectedOrderByItem: any = this.listOrderBy[0];
  public selectedFilterCategoryItem: any = this.listFilterCategory[0];
  public selectedFilterStatusItem: any = this.listFilterStatus[0];

  private productsSubscription = new Subscription();

  constructor(
    private tenderService: TenderService,
    private eventEmitterService: EventEmitterService
  ) {}


  ngOnInit(): void {
    this.setFilter();
    this.fetchData();
  }

  public setFilter(): void {
    this.orderBy = this.listOrderBy.slice();
    this.filterCategory = this.listFilterCategory.slice();
    this.filterStatus = this.listFilterStatus.slice();
  }

  public resetFilter(): void {
    this.selectedOrderByItem = this.listOrderBy[0];
    this.selectedFilterCategoryItem = this.listFilterCategory[0];
    this.selectedFilterStatusItem = this.listFilterStatus[0];
  }

  public filter() {
    this.query = "ob=" + this.selectedOrderByItem.value + "&";

    if (this.selectedFilterCategoryItem.value !== null) {
      this.query = this.query + "cids=" + this.selectedFilterCategoryItem.value + "&";
    }

    if (!this.hiddenFilter) {

      if (this.selectedFilterStatusItem.value !== null) {
        this.query = this.query + "status-ids=" + this.selectedFilterStatusItem.value + "&";
      }
  
      if (this.filterKeyword !== "") {
        this.query = this.query + "q=" + this.filterKeyword + "&";
      }

      if (this.filterHpsStart !== undefined && this.filterHpsStart !== 0) {
        this.query = this.query + "hps-min=" + this.filterHpsStart + "&";
      }

      if (this.filterHpsEnd !== undefined && this.filterHpsEnd !== 0) {
        this.query = this.query + "hps-max=" + this.filterHpsEnd + "&";
      }

    }
    
    this.fetchData();
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

    this.tenderService.getListTender(this.query, this.currentPage).subscribe(
      (resp) =>  {
          this.productsSubscription = this
            .getTender({dataTender:resp })
            .pipe(finalize(() => (this.loading = false)))
            .subscribe((response) => (this.view = response));
      },
      () => {
        this.popUpMessage = "Gagal menemukan data tender";
        this.triggerPopUp();
      }
    );
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

const categoryTender: Array<any> = [
  { value: null, text: "Semua Kategori" },
  { value: 2, text: "Material Konstruksi" },
  { value: 3, text: "Jasa Konstruksi & Renovasi" },
  { value: 4, text: "Jasa Ekspedisi & Pengepakan" },
  { value: 5, text: "Pengadaan & Sewa Peralatan-Mesin" },
  { value: 6, text: "Jasa Perawatan Peralatan & Mesin" },
  { value: 7, text: "Jasa Advertising" },
  { value: 8, text: "Pengadaan & Sewa Perlengkapan-Furniture" },
  { value: 9, text: "Catering & Snack" },
  { value: 10, text: "Souvenir & Merchandise" },
  { value: 12, text: "Sewa Gedung" },
  { value: 12, text: "Pertanian & Peternakan" },
  { value: 13, text: "Pengadaan & Sewa Kendaraan" },
  { value: 14, text: "Pendidikan & Pelatihan" },
  { value: 15, text: "Konveksi & Laundry" },
  { value: 16, text: "Jasa Travel & Akomodasi" },
  { value: 17, text: "Jasa Percetakan & Media" },
  { value: 18, text: "Jasa Perawatan Kendaraan" },
  { value: 19, text: "Jasa Perawatan Gedung" },
  { value: 20, text: "Jasa Perawatan Elektronik & IT" },
  { value: 21, text: "Jasa Mandor  & Tenaga Kerja Lainnya" },
  { value: 22, text: "Jasa Event Organizer" },
  { value: 23, text: "Alat Tulis Kantor" },
  { value: 24, text: "Alat & Jasa Kesehatan-Keselamatan" },
  { value: 25, text: "Bahan Kimia" },
  { value: 26, text: "Barang Elektronik, Komputer & Periferal" },
  { value: 27, text: "Jasa Konsultan & Penilaian" },
];

const tenderOrderBy: Array<any> = [
  { value: 4, text: "Terbaru" },        // 4 : order by ID DESC
  { value: 3, text: "Terlama" },        // 3 : order by ID ASC
  { value: 1, text: "HPS Terendah" },   // 1 : order by hps total ASC
  { value: 2, text: "HPS Tertinggi" },  // 2 : order by hps total DESC
];

const statusTender: Array<any> = [
  { value: null, text: "Semua Status" },
  { value: 1, text: "Aktif" },
  { value: 2, text: "Calon Pemenang Terpilih" },
  { value: 3, text: "Pemenang Terpilih" },
  { value: 4, text: "Masa Sanggah" },
  { value: 10, text: "Selesai" },
  { value: -1, text: "Dibatalkan" },
  { value: -2, text: "Dibuat Ulang" },
];