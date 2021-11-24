import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpProgressEvent, HttpRequest, HttpResponse } from "@angular/common/http";
import { Component, Injectable, ViewEncapsulation } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { FileRestrictions } from "@progress/kendo-angular-upload";
import { concat, Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
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
    private profileInfoService: ProfileInformationService
  ) { }

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
  public logoForm: FormGroup = undefined!;
  public data: any = {
    files: [],
  };
  public submitted = false;

  public imgRestrictions: FileRestrictions = {
    allowedExtensions: ["jpg", "jpeg", "png"],
  };

  

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
  public isDisabledKota = true;
  public isDisabledKecamatan = true;
  // public isDisabledKelurahan = true;

  public jenis_penyedia_usaha: Array<Hydra> = [];
  public jenis_kegiatan_usaha: Array<Hydra> = [];
  public organizations: Array<Item> = [];
  public provinces: Array<Item> = [];

  public vendor_info: any;
  public total_karyawan: any;
  public vendor_contact_mechanism: any;

  public selectedBadanUsaha: Item = this.listItems[0];
  public selectedProvince: { provinceDescription: string, provinceId: number } = null!;
  public selectedKota:{ kotaDescription: string, kotaId: number } = null!;
  public selectedKecamatan:{ kecamatanDescription: string, kecamatanId: number } =null!;
  public pkpStatus = false;

  public defaultItemProvinces: { provinceDescription: string, provinceId: number } = { provinceDescription: 'Pilih provinsi', provinceId: 0 };

  public defaultItemKota:{ kotaDescription: string, kotaId: number, provinceId: number } = { kotaDescription: 'Pilih kota', kotaId: 0 , provinceId: 0};

  public defaultItemKecamatan: { kecamatanDescription: string, kecamatanId: number, kotaId: number} = { kecamatanDescription: 'Pilih Kecamatan', kecamatanId: 0, kotaId: 0 };

  // public defaultItemKelurahan: { kelurahanDescription: string, kelurahanId: number } = { kelurahanDescription: 'Pilih Kelurahan', kelurahanId: 0 };

  public dataProvinsi: Array<{provinceDescription: string, provinceId: number}> = [
    {
      provinceDescription: 'Jawa Barat', provinceId: 1
    },
    {
      provinceDescription: 'Jawa Tengah', provinceId: 2
    },
    {
      provinceDescription: 'Jawa Timur', provinceId: 3
    }
  ];

  public dataKota: Array<{ kotaDescription: string, kotaId: number, provinceId: number }> = [
    {
      kotaDescription: 'Bandung', kotaId: 1, provinceId: 1
    },
    {
      kotaDescription: 'Cimahi', kotaId: 2, provinceId: 1
    },
    {
      kotaDescription: 'Semarang', kotaId: 3, provinceId: 2
    },
    {
      kotaDescription: 'Surabaya', kotaId: 4, provinceId: 3
    }
  ];

  public dataKecamatan: Array<{ kecamatanDescription: string, kecamatanId:number, kotaId: number}> = [
    {
      kecamatanDescription: 'Sukasari', kecamatanId: 1, kotaId: 1
    },
    {
      kecamatanDescription: 'Baleendah', kecamatanId: 2, kotaId: 1
    },
    {
      kecamatanDescription: 'Pekalongan', kecamatanId: 3, kotaId: 2
    },
    {
      kecamatanDescription: 'Karang Anyar', kecamatanId: 4, kotaId: 3
    }
  ];

  public dataResultKota: Array<{ kotaDescription: string, kotaId: number, provinceId: number  }> = [];

  public dataResultKecamatan: Array<{ kecamatanDescription: string, kecamatanId:number, kotaId: number }> = [];


  ngOnInit(): void {
    this.logoForm = new FormGroup({
      files: new FormControl(this.data.files),
    });

    //get vendor information
    this.profileInfoService.getVendorInformation().subscribe(
      (resp) => {
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

    // get list of provinces
    // this.profileInfoService.getProvinces().subscribe(
    //   (resp) => {
    //     this.provinces = resp["hydra:member"];
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }

  public saveImage(value: any, valid: boolean): void {
    this.submitted = true;

    if (valid) {
      console.log("File uploaded");
    } else {
      this.logoForm.markAllAsTouched();
    }
  }
  public onChangeList(): void {
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

  handleProvinceChange(value: any) {
    this.selectedProvince = value;
    this.selectedKota = undefined!;
    this.selectedKecamatan = undefined!;


    if (value.provinceId === this.defaultItemProvinces.provinceId) {
      this.isDisabledKota = true;
      this.dataResultKota = [];
    } else {
      this.isDisabledKota = false;
      this.dataResultKota = this.dataKota.filter((s) => s.provinceId === value.provinceId);
    }

    this.isDisabledKecamatan = true;
    this.dataResultKecamatan = [];
  }

  handleKotaChange(value: any) {
    this.selectedKota = value;
    this.selectedKecamatan = undefined!;

    if (value.kotaId === this.defaultItemKota.kotaId) {
      this.isDisabledKecamatan = true;
      this.dataResultKecamatan = [];
    } else {
      this.isDisabledKecamatan = false;
      this.dataResultKecamatan = this.dataKecamatan.filter((s) => s.kotaId === value.kotaId);
    }


  }

  handleKecamatanChange(value:any) {
    this.selectedKecamatan = value;
  }


}

@Injectable()
export class UploadInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url === 'saveUrl') {
            const events: Observable<HttpEvent<any>>[] = [0, 30, 60, 100].map((x) => of(<HttpProgressEvent>{
                type: HttpEventType.UploadProgress,
                loaded: x,
                total: 100
            }).pipe(delay(1000)));

            const success = of(new HttpResponse({ status: 200 })).pipe(delay(1000));
            events.push(success);

            return concat(...events);
        }

        if (req.url === 'removeUrl') {
            return of(new HttpResponse({ status: 200 }));
        }

        return next.handle(req);
      }
}
