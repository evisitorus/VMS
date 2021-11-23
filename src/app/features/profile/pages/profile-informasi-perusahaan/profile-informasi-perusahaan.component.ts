import {Component, ViewEncapsulation} from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ProfileInformationService } from "src/app/core/services/profile-information.service";

interface Item {
  text: string;
  value: number;
}

interface Hydra {
  description: string;
  id: number;
}
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
  public kategoriBuFormGroup = new FormGroup({
    kategoriBu: new FormControl(),
  });

  public listItems: Array<Item> = [];
  
  // TODO: ambil dari table tipe vendor. jangan static
  public kategoriUmkmItems: Array<Item> = [
    { text: "Kecil", value: 1 },
    { text: "Menengah", value: 2 },
    { text: "Mikro", value: 3 },
  ];

  public kategoriCorpItems: Array<Item> = [
    { text: "BUMN (Grup)", value: 1 },
    { text: "Swasta", value: 2 }
  ];

  public tipeBadanUsahaItems: Array<Item> = [
    { text: "UMKM", value: 1 },
    { text: "Korporasi", value: 2 }
  ];

  public isRequired = true;
  public opened = false;
  public openedSaham = false;

  public jenis_penyedia_usaha: Array<Hydra> = [];
  public organizations: Array<Hydra> = [];

  public vendor_info: any;
  public total_karyawan: any;

  public selectedBadanUsaha: Item = this.listItems[1];
  public pkpStatus = false;

  ngOnInit(): void {
    //get vendor information
    this.profileInfoService.getVendorInformation().subscribe(
      (resp) => {
        console.log(resp.data);
        this.vendor_info = resp.data;
        this.total_karyawan = resp.data.jumlahKaryawanDomestik + resp.data.jumlahKaryawanAsing;
        this.pkpStatus = resp.data.statusPerusahaanPkp;
      },
      (error) => {
        console.log(error);
      }
    );

    //get jenis penyedia usaha
    this.profileInfoService.getJenisPenyediaUsaha().subscribe(
      (resp) => {
        this.jenis_penyedia_usaha = resp["hydra:member"];
      },
      (error) => {
        console.log(error);
      }
    );

    //get list of organizations
    this.profileInfoService.getOrganizations().subscribe(
      (resp) => {
        this.organizations = resp["hydra:member"];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public onChangeList(): void{
    if (this.selectedBadanUsaha.text === "UMKM") {
      this.listItems = this.kategoriUmkmItems;
    } else {
      this.listItems = this.kategoriCorpItems;
    }
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
