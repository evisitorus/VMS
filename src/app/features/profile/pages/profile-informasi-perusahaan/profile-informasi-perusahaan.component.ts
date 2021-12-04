import { Component, Injectable, ViewEncapsulation } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { FileRestrictions } from "@progress/kendo-angular-upload";
import { FileService } from "src/app/core/services/file.service";
import { ProfileInformationService } from "src/app/core/services/profile-information.service";
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';
import { ProfileInterface } from 'src/app/core/interfaces/profile-interface';

const messages = {
  default: 'Data tidak boleh kosong. Silahkan klik syarat dan ketentuan serta kebijakan privasi penggunaan aplikasi',
  success: 'Selamat anda telah terdaftar sebagai Vendor PaDi, silahkan cek email anda untuk melakukan aktivasi akun',
  disclaimer: 'Silahkan klik syarat dan ketentuan serta kebijakan privasi penggunaan aplikasi'
};

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
    private profileInfoService: ProfileInformationService,
    private fileService: FileService,
    private eventEmitterService: EventEmitterService
  ) { }

  popUpTitle: string = "Informasi Registrasi Akun";
  popUpMessage: string = messages.default;
  redirectOnClosePopUp: boolean = true;

  profileForm = new FormGroup({});

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
  public selectedFile!: Array<any>;
  public uploadedFileContentUrl!: string;
  public uploadedFileId!: string;



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
  public isDisabledKota = true;
  public isDisabledKecamatan = true;
  // public isDisabledKelurahan = true;

  public jenis_penyedia_usaha: Array<Hydra> = [];
  public jenis_kegiatan_usaha: Array<Hydra> = [];
  public organizations: Array<Item> = [];
  public provinces: Array<Item> = [];

  public vendor_info: any;
  public vendor_data: any;
  public total_karyawan: any;
  public vendor_contact_mechanism: any;

  public selectedBadanUsaha: Item = this.listItems[0];
  public selectedProvince: { provinceDescription: string, provinceId: number } = null!;
  public selectedKota:{ kotaDescription: string, kotaId: number } = null!;
  public selectedKecamatan:{ kecamatanDescription: string, kecamatanId: number } =null!;
  public selectedKelurahan:{ kecamatanDescription: string, kecamatanId: number } =null!;
  public pkpStatus = false;

  // public defaultItemProvinces: { description: string, id: number } = { description: 'Pilih provinsi', id: 0 };
  // public defaultItemKota:{ description: string, id: number, provinceId: number } = { description: 'Pilih kota', id: 0 , provinceId: 0};
  // public defaultItemKecamatan: { description: string, id: number, kotaId: number} = { description: 'Pilih Kecamatan', id: 0, kotaId: 0 };
  // public defaultItemKelurahan: { description: string, id: number } = { description: 'Pilih Kelurahan', id: 0 };

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

  public provinsi: Array<{}> = [];

  public dataKota: Array<{}> = [];

  // public dataKecamatan: Array<{}> = [];
  // public dataResultKota: Array<{}> = [];
  // public dataResultKecamatan: Array<{}> = [];
  // public dataResultKelurahan: Array<{}> = [];


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

    this.profileInfoService.getVendorData().subscribe(
      (resp) => {
        this.vendor_data = resp;
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


    //get tipe vendor
    this.profileInfoService.getTipeVendor().subscribe(
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
    this.profileInfoService.getProvinces().subscribe(
      (resp) => {
        this.provinsi = resp["hydra:member"];
      },
      (error) => {
        console.log(error);
      }
    );
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

  // handleProvinceChange(value: any) {
  //   // this.selectedProvince = value;
  //   // this.selectedKota = undefined!;
  //   // this.selectedKecamatan = undefined!;

  //   // if (value.id === this.defaultItemProvinces.id) {
  //   //   this.isDisabledKota = true;
  //   //   this.dataResultKota = [];
  //   // } else {
  //   //   this.isDisabledKota = false;
  //   //   this.dataResultKota = this.dataKota.filter((s) => s.provinsi === value.id);
  //   // }

  //   this.profileInfoService.getKotaKabupaten(value.id).subscribe(
  //     (resp) => {
  //       this.dataResultKota = resp["hydra:member"];
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );

  //   // this.isDisabledKecamatan = true;
  //   // this.dataResultKecamatan = [];
  // }

  // handleKotaChange(value: any) {
  //   // this.selectedKota = value;
  //   // this.selectedKecamatan = undefined!;

  //   // if (value.kotaId === this.defaultItemKota.id) {
  //   //   this.isDisabledKecamatan = true;
  //   //   this.dataResultKecamatan = [];
  //   // } else {
  //   //   this.isDisabledKecamatan = false;
  //   //   this.dataResultKecamatan = this.dataKecamatan.filter((s) => s.id === value.kotaId);
  //   // }

  //   this.profileInfoService.getKecamatan(value.id).subscribe(
  //     (resp) => {
  //       this.dataResultKecamatan = resp["hydra:member"];
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );

  // }

  // handleKecamatanChange(value:any) {
  //   this.profileInfoService.getKelurahan(value.id).subscribe(
  //     (resp) => {
  //       this.dataResultKecamatan = resp["hydra:member"];
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }

  handleKelurahanChange(value:any) {
    this.profileInfoService.getKodepos(value.id).subscribe(
      (resp) => {
        this.dataResultKecamatan = resp["hydra:member"];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  upload(): void {
    console.log(this.selectedFile);
    this.fileService.upload(this.selectedFile[0]).subscribe(
      (res) => {
        this.uploadedFileContentUrl = res.contentUrl; // file url
        this.uploadedFileId = res["@id"]; //vendor :logo_id
      },
      (error) => {
        // this.popUpMessage = "Gagal memilih file, Silakan Coba Lagi!";
        // this.triggerPopUp();
        console.log(error);
      }
    );
  }

  updateProfile(): void {
    this.profileForm.markAllAsTouched();

    let params: ProfileInterface= {...this.profileForm.value};
    this.profileInfoService.updateProfile(params).subscribe(
      (resp) =>  {
        this.submitted = true;
        this.popUpMessage = resp.message;
        this.triggerPopUp();
        this.redirectOnClosePopUp = true;
      },
      (error) => {
        if(error.error.message){
          this.popUpMessage = error.error.message;
        }
        this.triggerPopUp();
        this.redirectOnClosePopUp = true;
      }
    );
  }

  triggerPopUp() {
    this.eventEmitterService.trigger();
  }


}
