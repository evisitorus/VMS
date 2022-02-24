import { Component, OnInit, Input, ViewEncapsulation, OnDestroy } from "@angular/core";
import { finalize, delay } from "rxjs/operators";
import { Subscription, Observable, of } from 'rxjs';
import { ListViewDataResult, PageChangeEvent, PagerSettings } from "@progress/kendo-angular-listview";
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';
import { TenderService } from 'src/app/core/services/tender.service';
import { FormControl, FormGroup } from "@angular/forms";
import { dictionary } from "src/app/dictionary/dictionary";
  
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
    buttonCount: 10,
    info: true,
    position: "both"
  };

  public hiddenFilter: boolean = true;
  public query!: string;

  public orderBy!: Array<any>;
  public filterCategory!: Array<any>;
  public filterBUMN!: Array<any>;
  public filterStatus!: Array<any>;
  public filterRegisterEnd!: Array<any>;
  public filterKeyword: string = "";
  public filterHpsStart!: number;
  public filterHpsEnd!: number;

  public listOrderBy: Array<any> = tenderOrderBy;
  public listFilterCategory: Array<any> = categoryTender;
  public listFilterBUMN: Array<any> = BUMNTender;
  public listFilterStatus: Array<any> = statusTender;
  public listFilterRegisterEnd: Array<any> = registerEndTender;

  public selectedOrderByItem: any = this.listOrderBy[0];
  public selectedFilterCategoryItem: any = this.listFilterCategory[0];
  public selectedFilterBUMNItem: any = this.listFilterBUMN[0];
  public selectedFilterStatusItem: any = this.listFilterStatus[0];
  public selectedFilterRegisterEndItem: any = this.listFilterRegisterEnd[0];

  private productsSubscription = new Subscription();

  constructor(
    private tenderService: TenderService,
    private eventEmitterService: EventEmitterService
  ) {}


  ngOnInit(): void {
    this.fetchListBUMN()
    this.setFilter();
    this.fetchData();
  }

  public setFilter(): void {
    this.orderBy = this.listOrderBy.slice();
    this.filterCategory = this.listFilterCategory.slice();
    this.filterStatus = this.listFilterStatus.slice();
    this.filterRegisterEnd = this.listFilterRegisterEnd.slice();
    this.filterBUMN = this.listFilterBUMN.slice();
  }

  public resetFilter(): void {
    this.selectedOrderByItem = this.listOrderBy[0];
    this.selectedFilterCategoryItem = this.listFilterCategory[0];
    this.selectedFilterStatusItem = this.listFilterStatus[0];
    this.selectedFilterRegisterEndItem = this.listFilterRegisterEnd[0];
    this.filterKeyword = "";
    this.filterHpsStart = 0;
    this.filterHpsEnd = 0;
    this.filter();
    this.fetchData();
  }

  public filter() {
    this.query = "ob=" + this.selectedOrderByItem.value + "&";

    if (this.selectedFilterCategoryItem.value !== null) {
      this.query = this.query + "cids=" + this.selectedFilterCategoryItem.value + "&";
    }

    if (this.selectedFilterBUMNItem.value !== null) {
      this.query = this.query + "cparent-ids=" + this.selectedFilterBUMNItem.id + "&";
    }

    if (!this.hiddenFilter) {

      if (this.selectedFilterStatusItem.value !== null) {
        this.query = this.query + "status-ids=" + this.selectedFilterStatusItem.value + "&";
      }
  
      if (this.filterKeyword !== "") {
        this.query = this.query + "q=" + this.filterKeyword + "&";
      }

      if (this.filterRegisterEnd !== null) {
        this.query = this.query + "reg-ends=" + this.selectedFilterRegisterEndItem.value + "&"
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

  public handleFilter(value: any, type?: string): void {
    switch (type) {
      
      case "category":
        this.filterCategory = this.listFilterCategory.filter(
          (s) => s.text.toLowerCase().indexOf(value.toLowerCase()) !== -1
        );
        break;

      case "bumn":
        this.filterBUMN = this.listFilterBUMN.filter(
          (s) => s.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
        );
        break;

      case "order":
        this.orderBy = this.listOrderBy.filter(
          (s) => s.text.toLowerCase().indexOf(value.toLowerCase()) !== -1
        );
        break;

      case "register":
        this.filterRegisterEnd = this.listFilterRegisterEnd.filter(
          (s) => s.text.toLowerCase().indexOf(value.toLowerCase()) !== -1
        );
        break;

      case "status":
        this.filterStatus = this.listFilterStatus.filter(
          (s) => s.text.toLowerCase().indexOf(value.toLowerCase()) !== -1
        );
        break;
    
      default:
        break;
    }
    
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
        this.popUpMessage = dictionary.fetch_data_tender_failed;
        this.triggerPopUp();
      }
    );
  }

  public fetchListBUMN(): void {
    this.tenderService.getListBUMN().subscribe(
      (resp) =>  {      
          let data = resp.data;

          let arr: any[] = [];
          Object.keys(data).map(function(key){  
            arr.push(data[key])  
            return arr;  
          });  

          this.listFilterBUMN = this.listFilterBUMN.concat(arr)
          this.filterBUMN = this.listFilterBUMN.slice();
      },
      () => {
        this.popUpMessage = dictionary.fetch_data_list_bumn_failed;
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
  { value: 1, text: "Material Konstruksi" },
  { value: 2, text: "Jasa Konstruksi & Renovasi" },
  { value: 3, text: "Jasa Ekspedisi & Pengepakan" },
  { value: 4, text: "Pengadaan & Sewa Peralatan-Mesin" },
  { value: 5, text: "Jasa Perawatan Peralatan & Mesin" },
  { value: 6, text: "Jasa Advertising" },
  { value: 7, text: "Pengadaan & Sewa Perlengkapan-Furniture" },
  { value: 8, text: "Catering & Snack" },
  { value: 200, text: "Souvenir & Merchandise" },
  { value: 199, text: "Sewa Gedung" },
  { value: 198, text: "Pertanian & Peternakan" },
  { value: 197, text: "Pengadaan & Sewa Kendaraan" },
  { value: 196, text: "Pendidikan & Pelatihan" },
  { value: 195, text: "Konveksi & Laundry" },
  { value: 194, text: "Jasa Travel & Akomodasi" },
  { value: 193, text: "Jasa Percetakan & Media" },
  { value: 192, text: "Jasa Perawatan Kendaraan" },
  { value: 191, text: "Jasa Perawatan Gedung" },
  { value: 190, text: "Jasa Perawatan Elektronik & IT" },
  { value: 19, text: "Jasa Mandor  & Tenaga Kerja Lainnya" },
  { value: 188, text: "Jasa Event Organizer" },
  { value: 187, text: "Alat Tulis Kantor" },
  { value: 186, text: "Alat & Jasa Kesehatan-Keselamatan" },
  { value: 185, text: "Bahan Kimia" },
  { value: 184, text: "Barang Elektronik, Komputer & Periferal" },
  { value: 183, text: "Jasa Konsultan & Penilaian" },
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

const registerEndTender: Array<any> = [
  { value: null, text: "" },
  { value: 'today', text: "Hari Ini" },
  { value: 'week', text: "Minggu Ini" },
  { value: 'month', text: "Bulan Ini" },
];

const BUMNTender: Array<any> = [
  { id: "", name: "Semua BUMN" }
];