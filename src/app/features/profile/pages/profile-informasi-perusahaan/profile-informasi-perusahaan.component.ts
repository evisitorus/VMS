import {Component, Injectable, ViewEncapsulation} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {FileRestrictions} from "@progress/kendo-angular-upload";
import {ApiRoutes} from "src/app/core/services/api/api-routes";
import {EventEmitterService} from "src/app/core/services/event-emitter.service";
import {FileService} from "src/app/core/services/file.service";
import {ProfileInformationService} from "src/app/core/services/profile-information.service";
import {environment as env} from "src/environments/environment";
import {ProfileInformationInterface} from "../../../../core/interfaces/profile/profile-information-interface";
import {AuthService} from "../../../../core/services/auth.service";

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
    private eventEmitterService: EventEmitterService,
    private profileInfoService: ProfileInformationService,
    private fileService: FileService,
    private authService: AuthService,
  ) {
  }
  public params!: ProfileInformationInterface;
  public profileInformationFormGroup!: FormGroup;

  public logoForm: FormGroup = undefined!;
  public data: any = {
    files: [],
  };
  public submitted = false;
  public popUpMessage: string = "";

  public imgRestrictions: FileRestrictions = {
    allowedExtensions: ["jpg", "jpeg", "png"],
    maxFileSize: 2097152
  };
  public selectedFile!: Array<any>;
  public uploadedFileContentUrl!: string;
  public uploadedFileId!: string;
  public logoImg!: any;


  public listItems: Array<Item> = [];

  // TODO: ambil dari table tipe vendor. jangan static
  public kategoriUmkmItems: Array<Item> = [
    {name: "Kecil", id: 1},
    {name: "Menengah", id: 2},
    {name: "Mikro", id: 3},
  ];

  public kategoriCorpItems: Array<Item> = [
    {name: "BUMN (Grup)", id: 1},
    {name: "Swasta", id: 2}
  ];

  public tipeBadanUsahaItems: Array<Item> = [
    {name: "UMKM", id: 1},
    {name: "Korporasi", id: 2}
  ];

  public isRequired = true;

  public isDisabledKota = true;
  public isDisabledKecamatan = true;
  public isDisabledKelurahan = true;
  public isDisabledKodePos = true;

  public jenis_penyedia_usaha: Array<Hydra> = [];
  public jenis_kegiatan_usaha: Array<Hydra> = [];
  public organizations: Array<Item> = [];
  public provinces: Array<Item> = [];

  public vendor_info: any;
  public total_karyawan: any;
  public vendor_contact_mechanism: any;

  public selectedBadanUsaha: Item = this.listItems[0];
  public selectedProvince: { provinceDescription: string, provinceId: number } = null!;
  public selectedKota: { kotaDescription: string, kotaId: number } = null!;
  public selectedKecamatan: { kecamatanDescription: string, kecamatanId: number } = null!;
  public selectedKelurahan: { kelurahanDescription: string, kelurahanId: number } = null!;
  public selectedKodePos: { kodePosDescription: string, kodePosId: number } = null!;
  public pkpStatus = false;

  // public defaultItemProvinces: { provinceDescription: string, provinceId: number } = {
  //   provinceDescription: 'Pilih provinsi',
  //   provinceId: 0
  // };

  // public defaultItemKota: { kotaDescription: string, kotaId: number, provinceId: number } = {
  //   kotaDescription: 'Pilih kota',
  //   kotaId: 0,
  //   provinceId: 0
  // };

  // public defaultItemKecamatan: { kecamatanDescription: string, kecamatanId: number, kotaId: number } = {
  //   kecamatanDescription: 'Pilih Kecamatan',
  //   kecamatanId: 0,
  //   kotaId: 0
  // };

  // public defaultItemKelurahan: { kelurahanDescription: string, kelurahanId: number, kecamatanId: number } = {
  //   kelurahanDescription: 'Pilih Kelurahan',
  //   kelurahanId: 0,
  //   kecamatanId: 0
  // };
  
  public defaultItemProvinces: { description: string, id: number } = { description: 'Pilih provinsi', id: 0 };
  public defaultItemKota:{ description: string, id: number, provinceId: number } = { description: 'Pilih kota', id: 0 , provinceId: 0};
  public defaultItemKecamatan: { description: string, id: number, kotaId: number} = { description: 'Pilih Kecamatan', id: 0, kotaId: 0 };
  public defaultItemKelurahan: { description: string, id: number } = { description: 'Pilih Kelurahan', id: 0 };

  public defaultItemKodePos: { kodePosDescription: string, kodePosId: number, kelurahanId: number } = {
    kodePosDescription: 'Pilih Kode Pos',
    kodePosId: 0,
    kelurahanId: 0
  };

  // public defaultItemKelurahan: { kelurahanDescription: string, kelurahanId: number } = { kelurahanDescription: 'Pilih Kelurahan', kelurahanId: 0 };

  // public dataProvinsi: Array<{ provinceDescription: string, provinceId: number }> = [
  //   {
  //     provinceDescription: 'Jawa Barat', provinceId: 1
  //   },
  //   {
  //     provinceDescription: 'Jawa Tengah', provinceId: 2
  //   },
  //   {
  //     provinceDescription: 'Jawa Timur', provinceId: 3
  //   }
  // ];

  // public dataKota: Array<{ kotaDescription: string, kotaId: number, provinceId: number }> = [
  //   {
  //     kotaDescription: 'Bandung', kotaId: 1, provinceId: 1
  //   },
  //   {
  //     kotaDescription: 'Cimahi', kotaId: 2, provinceId: 1
  //   },
  //   {
  //     kotaDescription: 'Semarang', kotaId: 3, provinceId: 2
  //   },
  //   {
  //     kotaDescription: 'Pekalongan', kotaId: 4, provinceId: 3
  //   }
  // ];

  // public dataKecamatan: Array<{ kecamatanDescription: string, kecamatanId: number, kotaId: number }> = [
  //   {
  //     kecamatanDescription: 'Sukasari', kecamatanId: 1, kotaId: 1
  //   },
  //   {
  //     kecamatanDescription: 'Baleendah', kecamatanId: 2, kotaId: 1
  //   },
  //   {
  //     kecamatanDescription: 'Banyumanik', kecamatanId: 3, kotaId: 2
  //   },
  //   {
  //     kecamatanDescription: 'Pekalongan Barat', kecamatanId: 4, kotaId: 3
  //   }
  // ];

  // public dataKelurahan: Array<{ kelurahanDescription: string, kelurahanId: number, kecamatanId: number }> = [
  //   {
  //     kelurahanDescription: 'Sukarasa', kelurahanId: 1, kecamatanId: 1
  //   },
  //   {
  //     kelurahanDescription: 'Rancamanyar', kelurahanId: 2, kecamatanId: 2
  //   },
  //   {
  //     kelurahanDescription: 'Banyumanik', kelurahanId: 3, kecamatanId: 3
  //   },
  //   {
  //     kelurahanDescription: 'Medono', kelurahanId: 4, kecamatanId: 4
  //   },
  // ];

  // public dataResultKota: Array<{ kotaDescription: string, kotaId: number, provinceId: number }> = [];
  // public dataResultKecamatan: Array<{ kecamatanDescription: string, kecamatanId: number, kotaId: number }> = [];
  // public dataResultKelurahan: Array<{ kelurahanDescription: string, kelurahanId: number, kecamatanId: number }> = [];
  
  public dataKecamatan: Array<{}> = [];
  public dataResultKota: Array<{}> = [];
  public dataResultKecamatan: Array<{}> = [];
  public dataResultKelurahan: Array<{}> = [];

  public fetchData(): void {
    //get vendor information
    this.profileInfoService.getVendorInformation().subscribe(
      (resp) => {
        let data = resp.data[0];
        this.vendor_info = data.party;
        this.vendor_contact_mechanism = data.contactMechanism;
        this.total_karyawan = data.party.jumlahKaryawanDomestik + data.party.jumlahKaryawanAsing;
        this.pkpStatus = data.party.statusPerusahaanPkp;

        if (null === data.logo) {
          this.logoImg = null;
        } else {
          this.logoImg = ApiRoutes.api_media_object_route + "/" + data.logo.id + "/file";
        }


        this.setForm();
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

  ngOnInit(): void {
    this.logoForm = new FormGroup({
      files: new FormControl(this.data.files),
    });

    this.fetchData();


  }

  public setForm(): void {
    this.profileInformationFormGroup = new FormGroup({
      namaPerusahaan: new FormControl(this.vendor_info.name, Validators.required),
      inisialPerusahaan: new FormControl(this.vendor_info.altName, []),
      jenisBadanUsaha: new FormControl(null, Validators.required),
      statusBadanUsaha: new FormControl(this.vendor_info.statusPerusahaanPkp, Validators.required),
      tipeBadanUsaha: new FormControl(null, Validators.required),
      kategoriBadanUsaha: new FormControl(null, Validators.required),
      jenisKegiatanUsahaUtama: new FormControl(null, Validators.required),
      jenisPenyediaUsaha: new FormControl(null, Validators.required),
      npwpPerusahaan: new FormControl(this.vendor_info.npwp, Validators.required),
      nomorIndukBerusaha: new FormControl(this.vendor_info.nomorIndukBerusaha, Validators.required),
      bidangUsaha: new FormControl(null, Validators.required),
      bumnPengampu: new FormControl(this.vendor_info.bumnPengampu, Validators.required),
      organisasiHimpunan: new FormControl(this.vendor_info.organisasiHimpunan, []),
      websitePerusahaan: new FormControl(this.vendor_info.website, Validators.required),
      jumlahKaryawanTotal: new FormControl(this.total_karyawan, Validators.required),
      jumlahKaryawanLokal: new FormControl(this.vendor_info.jumlahKaryawanDomestik, Validators.required),
      jumlahKaryawanAsing: new FormControl(this.vendor_info.jumlahKaryawanAsing, Validators.required),
      noTeleponPerusahaan: new FormControl(this.vendor_contact_mechanism.telcoNumber, Validators.required),
      alamatPerusahaan: new FormControl(this.vendor_contact_mechanism.address1, Validators.required),
      provinsi: new FormControl(this.selectedProvince, Validators.required),
      kota: new FormControl(this.selectedKota, Validators.required),
      kecamatan: new FormControl(this.selectedKecamatan, Validators.required),
      kelurahan: new FormControl(null, Validators.required),
      kodePos: new FormControl(null, Validators.required),
      pinGeoLoc: new FormControl(null, []),
    });
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

  // handleProvinceChange(value: any) {
  //   this.selectedProvince = value;
  //   this.selectedKota = undefined!;
  //   this.selectedKecamatan = undefined!;


  //   if (value.provinceId === this.defaultItemProvinces.provinceId) {
  //     this.isDisabledKota = true;
  //     this.dataResultKota = [];
  //   } else {
  //     this.isDisabledKota = false;
  //     this.dataResultKota = this.dataKota.filter((s) => s.provinceId === value.provinceId);
  //   }

  //   this.isDisabledKecamatan = true;
  //   this.dataResultKecamatan = [];
  // }

  // handleKotaChange(value: any) {
  //   this.selectedKota = value;
  //   this.selectedKecamatan = undefined!;

  //   if (value.kotaId === this.defaultItemKota.kotaId) {
  //     this.isDisabledKecamatan = true;
  //     this.dataResultKecamatan = [];
  //   } else {
  //     this.isDisabledKecamatan = false;
  //     this.dataResultKecamatan = this.dataKecamatan.filter((s) => s.kotaId === value.kotaId);
  //   }


  // }

  // handleKecamatanChange(value: any) {
  //   this.selectedKecamatan = value;
  //   this.selectedKelurahan = undefined!;

  //   if (value.kecamatanId === this.defaultItemKecamatan.kecamatanId) {
  //     this.isDisabledKelurahan = true;
  //     this.dataResultKelurahan = [];
  //   } else {
  //     this.isDisabledKelurahan = false;
  //     this.dataResultKelurahan = this.dataKelurahan.filter((s) => s.kecamatanId === value.kecamatanId);
  //   }
  // }

  // handleKelurahanChange(value: any) {
  //   this.selectedKelurahan = value;
  //   // this.selectedKelurahan = undefined!;

  //   // if (value.kecamatanId === this.defaultItemKecamatan.kecamatanId) {
  //   //   // this.isDisabledKodePos = true;
  //   //   // this.dataResultKodePos = [];
  //   // } else {
  //   //   // this.isDisabledKodePos = false;
  //   //   // this.dataResultKodePos = this.dataKelurahan.filter((s) => s.kecamatanId === value.kecamatanId);
  //   // }
  // public close() {
  //   console.log(`Dialog result: ${status}`);
  //   this.opened = false;
  // }

  // public open() {
  //   this.opened = true;
  // }

  handleProvinceChange(value: any) {
    // this.selectedProvince = value;
    // this.selectedKota = undefined!;
    // this.selectedKecamatan = undefined!;

    // if (value.id === this.defaultItemProvinces.id) {
    //   this.isDisabledKota = true;
    //   this.dataResultKota = [];
    // } else {
    //   this.isDisabledKota = false;
    //   this.dataResultKota = this.dataKota.filter((s) => s.provinsi === value.id);
    // }

    this.profileInfoService.getKotaKabupaten(value.id).subscribe(
      (resp) => {
        this.dataResultKota = resp["hydra:member"];
      },
      (error) => {
        console.log(error);
      }
    );

    // this.isDisabledKecamatan = true;
    // this.dataResultKecamatan = [];
  }

  handleKotaChange(value: any) {
    // this.selectedKota = value;
    // this.selectedKecamatan = undefined!;

    // if (value.kotaId === this.defaultItemKota.id) {
    //   this.isDisabledKecamatan = true;
    //   this.dataResultKecamatan = [];
    // } else {
    //   this.isDisabledKecamatan = false;
    //   this.dataResultKecamatan = this.dataKecamatan.filter((s) => s.id === value.kotaId);
    // }

    this.profileInfoService.getKecamatan(value.id).subscribe(
      (resp) => {
        this.dataResultKecamatan = resp["hydra:member"];
      },
      (error) => {
        console.log(error);
      }
    );

  }

  handleKecamatanChange(value:any) {
    this.profileInfoService.getKelurahan(value.id).subscribe(
      (resp) => {
        this.dataResultKecamatan = resp["hydra:member"];
      },
      (error) => {
        console.log(error);
      }
    );
  }

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
        this.uploadedFileId = res["@id"];
        //vendor :logo_id
        this.logoImg = env.api_base_path + res["@id"] + "/file";
      },
      (error) => {
        this.popUpMessage = "Gagal memilih file, Silakan Coba Lagi!";
        this.triggerPopUp();
        console.log(error);
      }
    );
  }

  triggerPopUp(): void {
    this.eventEmitterService.trigger();
  }

  save() {
    this.profileInformationFormGroup.markAllAsTouched();
    if (this.profileInformationFormGroup.valid) {
      this.params = {
        name: this.profileInformationFormGroup.value.namaPerusahaan,
        initial:this.profileInformationFormGroup.value.inisialPerusahaan,
        jenisBadanUsaha:this.profileInformationFormGroup.value.jenisBadanUsaha,
        statusBadanUsaha: this.profileInformationFormGroup.value.statusBadanUsaha,
        tipeBadanUsaha: this.profileInformationFormGroup.value.tipeBadanUsaha,
        kategoriBadanUsaha:this.profileInformationFormGroup.value.kategoriBadanUsaha,
        jenisKegiatanUsaha:this.profileInformationFormGroup.value.jenisKegiatanUsaha,
        jenisPenyediaUsaha:this.profileInformationFormGroup.value.jenisPenyediaUsaha,
        npwp: this.profileInformationFormGroup.value.npwpPerusahaan,
        nib:this.profileInformationFormGroup.value.nomorIndukBerusaha,
        bidangUsaha:this.profileInformationFormGroup.value.bidangUsaha,
        oragnisasiHimpunan:this.profileInformationFormGroup.value.organisasiHimpunan,
        bumnPengampu:this.profileInformationFormGroup.value.bumnPengampu,
        website:this.profileInformationFormGroup.value.websitePerusahaan,
        jumlahKaryawanTotal:this.profileInformationFormGroup.value.jumlahKaryawanTotal,
        jumlahKaryawanLokal:this.profileInformationFormGroup.value.jumlahKaryawanLokal,
        jumlahKaryawanAsing:this.profileInformationFormGroup.value.jumlahKaryawanAsing,
        phoneNumber:this.profileInformationFormGroup.value.noTeleponPerusahaan
      }
  
      this.profileInformationFormGroup.markAllAsTouched();
      let vendorID = this.authService.getLocalStorage('vendor_id')!;
  
      this.profileInfoService.updateProfileInformation(this.params, vendorID).subscribe(
        (response) => {
          location.reload();
        },
        (error) => {
          this.popUpMessage = "Gagal memperbarui data, Silakan Coba Lagi!";
          this.triggerPopUp();
        }
      )
  
      console.log(this.params);
    }
  }

  form = new FormGroup({
    food: new FormControl('fish'),
  });
}
