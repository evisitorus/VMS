import {Component, ViewEncapsulation, ViewChild} from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {AutoCompleteComponent} from "@progress/kendo-angular-dropdowns";
import {ChipRemoveEvent} from "@progress/kendo-angular-buttons";
import {DomSanitizer} from "@angular/platform-browser";
import { ProfileInformationService } from "src/app/core/services/profile-information.service";

@Component({
  selector: 'app-profile-informasi-perusahaan',
  templateUrl: './profile-informasi-perusahaan.component.html',
  styleUrls: ['./profile-informasi-perusahaan.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ProfileInformasiPerusahaanComponent {

  constructor(
    private profileInfoService:ProfileInformationService
  ) {}

  public buFormGroup = new FormGroup({
    buFormControl: new FormControl(),
  });
  public sbuFormGroup = new FormGroup({
    sbuFormControl: new FormControl(),
  });

  public listItems: Array<string> = ["Item 1", "Item 2", "Item 3"];
  public tipeBadanUsahaItems: Array<string> = ["UMKM", "Korporasi"];
  public kategoriUmkmItems: Array<string> = ["Kecil", "Menengah", "Mikro"];
  public kategoriCorpItems: Array<string> = ["BUMN (Grup)", "Swasta"];

  public isRequired = true;
  public opened = false;
  public openedSaham = false;
  public vendor_info: any;
  public total_karyawan: any;

  ngOnInit(): void {
    this.profileInfoService.getVendorInformation().subscribe(
      (resp) => {
        console.log(resp.data);
        this.vendor_info = resp.data;
        this.total_karyawan = resp.data.jumlahKaryawanDomestik + resp.data.jumlahKaryawanAsing
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public close() {
    console.log(`Dialog result: ${status}`);
    this.opened = false;
  }

  public open() {
    this.opened = true;
  }

  public closeSaham() {
    console.log(`Dialog result: ${status}`);
    this.openedSaham = false;
  }

  public openSaham() {
    this.openedSaham = true;
  }

}
