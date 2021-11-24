import {Component, ViewEncapsulation} from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ProfileInformationService } from "src/app/core/services/profile-information.service";

interface Item {
  name: string;
  id: number;
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

  public psFormGroup = new FormGroup({
    psFormControl: new FormControl(),
  });
  public jpsFormGroup = new FormGroup({
    jpsFormControl: new FormControl(),
  });
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
    { name: "Kecil", id: 1 },
    { name: "Menengah", id: 2 },
    { name: "Mikro", id: 3 },
  ];

  public kategoriCorpItems: Array<Item> = [
    { name: "BUMN (Grup)", id: 1 },
    { name: "Swasta", id: 2 }
  ];

  public tipeBadanUsahaItems: Array<Item> = [
    { name: "UMKM", id: 1 },
    { name: "Korporasi", id: 2 }
  ];

  public isRequired = true;
  public opened = false;
  public openedSaham = false;

  public jenis_penyedia_usaha: Array<Hydra> = [];
  public jenis_kegiatan_usaha: Array<Hydra> = [];
  public organizations: Array<Item> = [];

  public vendor_info: any;
  public total_karyawan: any;
  public vendor_contact_mechanism: any;

  public selectedBadanUsaha: Item = this.listItems[1];
  public pkpStatus = false;

  ngOnInit(): void {
    //get vendor information
    this.profileInfoService.getVendorInformation().subscribe(
      (resp) => {
        console.log(resp.data.contactMechanism.address1);
        this.vendor_info = resp.data.party;
        this.vendor_contact_mechanism = resp.data.contactMechanism;
        this.total_karyawan = resp.data.party.jumlahKaryawanDomestik + resp.data.party.jumlahKaryawanAsing;
        this.pkpStatus = resp.data.party.statusPerusahaanPkp;
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

    //get jenis kegiatan usaha
    this.profileInfoService.getJenisKegiatanUsaha().subscribe(
      (resp) => {
        this.jenis_kegiatan_usaha = resp["hydra:member"];
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
    if (this.selectedBadanUsaha.name === "UMKM") {
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
