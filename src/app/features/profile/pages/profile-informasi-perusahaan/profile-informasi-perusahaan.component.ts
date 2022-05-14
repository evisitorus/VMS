import {Component, ViewEncapsulation} from "@angular/core";
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import {FileRestrictions} from "@progress/kendo-angular-upload";
import {forkJoin} from "rxjs";
import {EventEmitterService} from "src/app/core/services/event-emitter.service";
import {FileService} from "src/app/core/services/file.service";
import {ProfileInformationService} from "src/app/core/services/profile-information.service";
import {environment as env, environment} from "src/environments/environment";
import {ProfileInformationInterface} from "../../../../core/interfaces/profile/profile-information-interface";
import {AuthService} from "../../../../core/services/auth.service";
import {DropDownFilterSettings} from "@progress/kendo-angular-dropdowns";
import {VendorLogoInterface} from "../../../../core/interfaces/profile/vendor-logo-interface";
import { dictionary } from "src/app/dictionary/dictionary";

interface Item {
  name: string;
  id: number;
}

interface Hydra {
  description: string;
  id: number;
}

interface Address {
  contactMechanism: {
    type: string,
    address1: string,
    number: string,
    deletedAt: Date
  };
  party: {}
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
    public fb: FormBuilder
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
  public opened = false;
  public popUpTitle: string = "";
  public errorMessage = {
    extension : dictionary.invalid_file_format.extension,
    maxSize: dictionary.invalid_file_format.max_size,
    invalidPict: dictionary.invalid_pict,
    invalidDocs: dictionary.invalid_file
  };
  public dict = dictionary;

  public imgRestrictions: FileRestrictions = {
    allowedExtensions: ["jpg", "jpeg", "png"],
    maxFileSize: 2097152
  };
  public selectedFile!: Array<any>;
  public uploadedFileContentUrl!: string;
  public uploadedFileId!: string;
  public logoImg!: any;


  public listItems: Array<Item> = [];
  public items: Array<Hydra> = [];

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

  public jenisBadanUsahaItems: Array<Item> = [];

  public isRequired = true;

  public isDisabledKota = true;
  public isDisabledKecamatan = true;
  public isDisabledKelurahan = true;
  public isDisabledKodePos = true;

  public jenis_penyedia_usaha: Array<Hydra> = [];
  public jenis_kegiatan_usaha: Array<Hydra> = [];
  // public organizations: Array<Item> = [];
  public provinces: Array<any> = [];
  public cities: Array<any> = [];
  public districts: Array<any> = [];
  public villages: Array<any> = [];
  public postalCodes: Array<any> = [];
  public contact_mechanism: Array<Address> = [];
  public vendor_info: any;
  public vendor_contact_mechanism: any;
  public selectedOrganization: Array<any> = [];
  public selectedBumnPengampu: Array<any> = [];
  public selectedBadanUsaha: Item = this.listItems[0];
  public selectedJenisKegiatan: Hydra = this.items[0];
  public selectedJenisPenyedia: Hydra = this.items[0];
  public selectedProvince: Hydra = this.items[0];
  public selectedKota: Hydra = this.items[0];
  public selectedKecamatan: Hydra = this.items[0];
  public selectedKelurahan: Hydra = this.items[0];
  public selectedKodepos: Hydra = this.items[0];
  public provinsiId!: string;

  public jenisVendor: any;
  public tipeVendor: any;
  public kategoriVendor: any;
  public pkpStatus = false;

  public defaultItemProvinces: { description: string, id: number } = {description: 'Pilih provinsi', id: 0};
  public defaultItemKota: { description: string, id: number, provinceId: number } = {
    description: 'Pilih kota',
    id: 0,
    provinceId: 0
  };
  public defaultItemKecamatan: { description: string, id: number, kotaId: number } = {
    description: 'Pilih Kecamatan',
    id: 0,
    kotaId: 0
  };
  public defaultItemKelurahan: { description: string, id: number } = {description: 'Pilih Kelurahan', id: 0};
  public defaultItemKodepos: { description: string, id: number } = {description: 'Pilih Kodepos', id: 0};

  public provinsi: Array<{ id: number, description: string }> = [];
  public dataKecamatan: Array<{}> = [];
  public dataResultKota: Array<{ id: number, description: string }> = [];
  public dataResultKecamatan: Array<{ id: number, description: string }> = [];
  public dataResultKelurahan: Array<{ id: number, description: string }> = [];
  public dataResultKodepos: Array<{}> = [];

  public dataPerusahaan: any = {};

  public bidangUsahaKbli: any;
  public orgHimpunan: any;
  public orgPengampu: any;
  public vendorLogoParam!: VendorLogoInterface;
  public vendorID = this.authService.getLocalStorage('vendor_id')!;
  public redirectOnClosePopUp: boolean = false;
  public popUpID = "";

  public formField = {
    nibQuestion: "Apakah Anda memiliki NIB?",
    nib: "Nomor Induk Berusaha (NIB)",
    namaPerusahaan: "Nama Perusahaan",
    inisialPerusahaan: "Inisial Perusahaan",
    jenisBadanUsaha: "Jenis Badan Usaha",
    statusBadanUsaha: "Status Badan Usaha",
    tipeBadanUsaha: "Tipe Badan Usaha",
    jenisKegiatanUsaha: "Jenis Kegiatan Usaha Utama",
    jenisPenyediaUsaha: "Jenis Penyedia Usaha",
    npwpPerusahaan: "NPWP Perusahaan",
    website: "Website Perusahaan",
    email: "Email Perusahaan"
  };
  
  public getDataPerusahaan(): void {
    forkJoin({
      responseVendorData: this.profileInfoService.getVendorInformation(),
      responseHimpunan: this.profileInfoService.getPartyRole("Himpunan"),
      responsePengampu: this.profileInfoService.getPartyRole("Pengampu"),
      responseVendorHimpunan: this.profileInfoService.getVendorsOrganization("Himpunan"),
      responseVendorPengampu: this.profileInfoService.getVendorsOrganization("Pengampu"),
      responseJenisPenyediaUsaha: this.profileInfoService.getJenisPenyediaUsaha(),
      responseJenisKegiatanUsaha: this.profileInfoService.getJenisKegiatanUsaha(),
      responseJenisVendor: this.profileInfoService.getJenisVendor(),
      responseBidangUsaha: this.profileInfoService.getBidangUsaha(),
      responseTipeVendor: this.profileInfoService.getTipeVendor(),
      // responseProvinces: this.profileInfoService.getProvinces(),
    }).subscribe((response) => {
      this.setResponseVendorData(response.responseVendorData);
      this.setHimpunan(response.responseHimpunan);
      this.setPengampu(response.responsePengampu);
      this.setVendorHimpunan(response.responseVendorHimpunan);
      this.setVendorPengampu(response.responseVendorPengampu);
      this.setJenisPenyediaUsaha(response.responseJenisPenyediaUsaha);
      this.setJenisKegiatanUsaha(response.responseJenisKegiatanUsaha);
      this.setJenisVendor(response.responseJenisVendor);
      this.setBidangUsaha(response.responseBidangUsaha);
      this.setTipeVendor(response.responseTipeVendor);
      this.setFormPerusahaan(this.dataPerusahaan); 
    }, () => {
      this.popUpMessage = dictionary.fetch_data_failed + ' Perusahaan';
      this.triggerPopUp();
    });
  }

  ngOnInit(): void {
    this.logoForm = new FormGroup({
      files: new FormControl(this.data.files),
    });

    this.getDataPerusahaan();
  }

  public setResponseVendorData(resp_: any) {
    const resp = resp_.data
    if (resp.logo) {
      const logo = resp.logo
      if (logo){
        this.logoImg = environment.api_base_path.concat('/api/media_objects/').concat(logo.id).concat('/file');
      }
    }

    if (resp.pemilikNIB === undefined && resp.nomorIndukBerusaha === undefined) {
      this.dataPerusahaan.pemilikNIB = null;
    } else {
      this.dataPerusahaan.pemilikNIB = resp.nomorIndukBerusaha ? true : false;
    }
    
    this.dataPerusahaan.namaPerusahaan = resp.name ? resp.name : "";
    this.dataPerusahaan.inisialPerusahaan = resp.altName ? resp.altName : "";
    this.dataPerusahaan.emailPerusahaan = resp.contactMechanism? resp.contactMechanism.emailPerusahaan : "";

    if (resp.statusPerusahaanPkp == null || resp.statusPerusahaanPkp == undefined) {
      this.dataPerusahaan.statusPerusahaanPkp = null;
    } else {
      this.dataPerusahaan.statusPerusahaanPkp = resp.statusPerusahaanPkp ? "true" : "false";
    }

    if (!resp.jenisVendor) {
      this.dataPerusahaan.jenisBadanUsaha = null;
    } else {
      this.dataPerusahaan.jenisBadanUsaha = resp.jenisVendor.id ? resp.jenisVendor.id : null;
    }

    if (!resp.tipeVendor) {
      this.dataPerusahaan.tipeBadanUsaha = null;
    } else {
      this.dataPerusahaan.tipeBadanUsaha = resp.tipeVendor.id ? resp.tipeVendor.id: null
    }

    this.dataPerusahaan.jenisKegiatanUsaha = null;
    if (resp.jenisKegiatanUsaha){
      if (resp.jenisKegiatanUsaha.length > 0) {
        this.dataPerusahaan.jenisKegiatanUsaha = resp.jenisKegiatanUsaha[0].id
      }
    } 
    
    this.dataPerusahaan.jenisPenyediaUsaha = null;
    if (resp.jenisPenyediaUsaha){
      if (resp.jenisPenyediaUsaha.length > 0) {
        this.dataPerusahaan.jenisPenyediaUsaha = resp.jenisPenyediaUsaha[0].id
      }
    }
    
    this.dataPerusahaan.npwp = resp.npwp ? resp.npwp : "";
    this.dataPerusahaan.nib = resp.nomorIndukBerusaha ? resp.nomorIndukBerusaha : "";
    this.dataPerusahaan.web = resp.website ? resp.website : "";
    this.dataPerusahaan.bidangUsaha = resp.bidangUsaha ? resp.bidangUsaha : "";
    this.dataPerusahaan.jumlahKaryawanDomestik = resp.jumlahKaryawanDomestik ? resp.jumlahKaryawanDomestik : 0;
    this.dataPerusahaan.jumlahKaryawanAsing = resp.jumlahKaryawanAsing ? resp.jumlahKaryawanAsing : 0;
  }

  public setResponseContactMechanism(resp: any) {
    this.contact_mechanism = resp["hydra:member"];
    let isFirstAddress = false;
    this.contact_mechanism.forEach((value) => {
      if (value.contactMechanism.number !== undefined) {
        this.dataPerusahaan.noTelepon = value.contactMechanism.number;
      } else {
        this.dataPerusahaan.address = value.contactMechanism;
        this.dataPerusahaan.alamat = value.contactMechanism.address1;

        // get list of provinces
        this.profileInfoService.getProvinces().subscribe(
          (resp) => {
            this.provinces = resp["hydra:member"];

            if (value.contactMechanism.deletedAt === undefined && isFirstAddress === false) {
              
              isFirstAddress = true;

              const index = this.provinces.findIndex(x => x.id === this.dataPerusahaan.address.province.id);
              this.selectedProvince = this.provinces[index];

              this.profileInfoService.getKotaKabupaten(this.dataPerusahaan.address.province.id).subscribe(
                (resp) => {
                  this.cities = resp["hydra:member"];
                  this.dataResultKota = this.cities;
                  this.setFormPerusahaan(this.dataPerusahaan);

                  if (this.dataPerusahaan.address.city !== undefined) {
                    const index = this.cities.findIndex(x => x.toGeoLocation.id === this.dataPerusahaan.address.city.id);
                    this.selectedKota = this.cities[index];

                    this.profileInfoService.getKecamatan(this.dataPerusahaan.address.city.id).subscribe(
                      (resp) => {
                        this.districts = resp["hydra:member"];
                        this.dataResultKecamatan = this.districts;
                        this.setFormPerusahaan(this.dataPerusahaan);
  
                        if (this.dataPerusahaan.address.district) {
                          const index = this.districts.findIndex(x => x.toGeoLocation.id === this.dataPerusahaan.address.district.id);
                          this.selectedKecamatan = this.districts[index];

                          this.profileInfoService.getKelurahan(this.dataPerusahaan.address.district.id).subscribe(
                            (resp) => {
                              this.villages = resp["hydra:member"];
                              this.dataResultKelurahan = this.villages;
                              this.setFormPerusahaan(this.dataPerusahaan);
    
                              if (this.dataPerusahaan.address.village) {
                                const index = this.villages.findIndex(x => x.toGeoLocation.id === this.dataPerusahaan.address.village.id);
                                this.selectedKelurahan = this.villages[index];

                                this.profileInfoService.getKodepos(this.dataPerusahaan.address.village.id).subscribe(
                                  (resp) => {
                                    this.postalCodes = resp["hydra:member"];
                                    this.dataResultKodepos = this.postalCodes;
      
                                    if (this.dataPerusahaan.address.village) {
                                      this.selectedKodepos = this.postalCodes[0];
                                    }
      
                                    this.setFormPerusahaan(this.dataPerusahaan);
      
                                  }
                                );
                              }
    
                            }
    
                          );
                        }
  
                      }
                    );
                  }

                }
              );

            }

          }
        );

      }
    });
    this.setFormPerusahaan(this.dataPerusahaan);
  }

  public setJenisPenyediaUsaha(resp: any) {
    //get jenis penyedia usaha
    this.jenis_penyedia_usaha = resp.data.data;

    if (this.dataPerusahaan.jenisPenyediaUsaha == null) {
      this.selectedJenisPenyedia = this.jenis_penyedia_usaha[-1]
    } else {
      const index = this.jenis_penyedia_usaha.findIndex(x => x.id === this.dataPerusahaan.jenisPenyediaUsaha);
      this.selectedJenisPenyedia = this.jenis_penyedia_usaha[index];
    }
  }

  public setJenisKegiatanUsaha(resp: any) {
    //get jenis kegiatan usaha
    this.jenis_kegiatan_usaha = resp.data.data;
    if (this.dataPerusahaan.jenisKegiatanUsaha == null) {
      this.selectedJenisKegiatan = this.jenis_kegiatan_usaha[-1]
    } else {
      const index = this.jenis_kegiatan_usaha.findIndex(x => x.id === this.dataPerusahaan.jenisKegiatanUsaha);
      this.selectedJenisKegiatan = this.jenis_kegiatan_usaha[index];
    }
  }

  public setJenisVendor(resp: any) {
    //get jenis badan usaha
    this.jenisBadanUsahaItems = resp["hydra:member"];
  }

  public setBidangUsaha(resp: any) {
    //get kbli bidang usaha
    this.bidangUsahaKbli = resp.data.data;
    for (let index = 0; index < this.dataPerusahaan.bidangUsaha.length; index++) {
      const element = this.dataPerusahaan.bidangUsaha[index];
      const indexBadanUsaha = this.bidangUsahaKbli.findIndex((item:any) => item.id === element.id)
      this.dataPerusahaan.bidangUsaha[index] = indexBadanUsaha > -1 ? this.bidangUsahaKbli[indexBadanUsaha] : this.dataPerusahaan.bidangUsaha[index];
    }
  }

  public setTipeVendor(resp: any) {
    //get tipe badan usaha
    this.tipeBadanUsahaItems = resp["hydra:member"];
    if (this.dataPerusahaan.tipeBadanUsaha == null) {
      this.selectedBadanUsaha = this.tipeBadanUsahaItems[-1]
    } else {
      const index = this.tipeBadanUsahaItems.findIndex(x => x.id === this.dataPerusahaan.tipeBadanUsaha);
      this.selectedBadanUsaha = this.tipeBadanUsahaItems[index];
    }
  }

  public itemDisabled(itemArgs: { dataItem: any; index: number }) {
    return !itemArgs.dataItem.leaf;
  }

  public setProvinces(resp: any){
    // get list of provinces
    this.provinsi = resp["hydra:member"];
  }

  public setHimpunan(resp: any) {
    this.orgHimpunan = resp["hydra:member"];
  }

  public setPengampu(resp: any) {
    this.orgPengampu = resp["hydra:member"];
  }

  public setVendorHimpunan(resp: any) {
    this.dataPerusahaan.organisasiHimpunan = resp.data ? resp.data : "";
  }

  public setVendorPengampu(resp: any) {
    this.dataPerusahaan.bumnPengampu = resp.data ? resp.data : "";
  }

  public setFormPerusahaan(data: any): void {
    this.profileInformationFormGroup = this.fb.group({
      pemilikNIB: new FormControl(data.pemilikNIB, Validators.required),
      namaPerusahaan: new FormControl(data.namaPerusahaan, Validators.required),
      inisialPerusahaan: new FormControl(data.inisialPerusahaan, []),
      jenisBadanUsaha: new FormControl(data.jenisBadanUsaha, Validators.required),
      statusBadanUsaha: new FormControl(data.statusPerusahaanPkp, Validators.required),
      tipeBadanUsaha: new FormControl(data.tipeBadanUsaha, Validators.required),
      kategoriBadanUsaha: new FormControl(data.tipeBadanUsaha, []),
      jenisKegiatanUsahaUtama: new FormControl(data.jenisKegiatanUsaha, Validators.required),
      jenisPenyediaUsaha: new FormControl(data.jenisPenyediaUsaha, Validators.required),
      npwpPerusahaan: new FormControl(data.npwp, Validators.required),
      nomorIndukBerusaha: new FormControl(data.nib, []),
      bidangUsaha: new FormControl(data.bidangUsaha, Validators.required),
      bumnPengampu: new FormControl(data.bumnPengampu, Validators.required),
      organisasiHimpunan: new FormControl(data.organisasiHimpunan, []),
      websitePerusahaan: new FormControl(data.web, Validators.required),
      emailPerusahaan: new FormControl(data.emailPerusahaan, [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    });
  }

  public saveImage(value: any, valid: boolean): void {
    this.submitted = true;

    if (!valid) {
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

  handleProvinceChange(value: any) {
    this.selectedProvince = value;
    this.profileInfoService.getKotaKabupaten(value.id).subscribe(
      (resp) => {
        this.dataResultKota = resp["hydra:member"];
      }
    );
  }

  handleKotaChange(value: any) {
    this.profileInfoService.getKecamatan(value.toGeoLocation.id).subscribe(
      (resp) => {
        this.dataResultKecamatan = resp["hydra:member"];
      }
    );

  }

  handleKecamatanChange(value: any) {
    this.profileInfoService.getKelurahan(value.toGeoLocation.id).subscribe(
      (resp) => {
        this.dataResultKelurahan = resp["hydra:member"];
      }
    );
  }

  handleKelurahanChange(value: any) {
    this.profileInfoService.getKodepos(value.toGeoLocation.id).subscribe(
      (resp) => {
        this.dataResultKodepos = resp["hydra:member"];
      }
    );
  }

  upload(): void {
    this.fileService.upload(this.selectedFile[0]).subscribe(
      (res) => {
        this.uploadedFileContentUrl = res.contentUrl; // file url
        this.uploadedFileId = res["@id"];
        this.logoImg = env.api_base_path + res["@id"] + "/file";
        this.saveLogoIdToVendor();
      },
      () => {
        this.popUpMessage = dictionary.select_file_failed;
        this.triggerPopUp();
      }
    );
  }

  triggerPopUp(): void {
    this.eventEmitterService.trigger();
  }

  public submitFormVendor(): void {
    if (this.profileInformationFormGroup.valid && this.logoImg) {
      this.opened = true;
    }
  }

  save() {
    let fileId;
    if (this.uploadedFileId) {
      fileId = this.uploadedFileId.split("/");
      fileId = fileId[fileId.length - 1];
    }
    if (this.profileInformationFormGroup.valid || this.profileInformationFormGroup.value) {
      this.params = {
        pemilikNIB: this.profileInformationFormGroup.value.pemilikNIB,
        name: this.profileInformationFormGroup.value.namaPerusahaan,
        initial: this.profileInformationFormGroup.value.inisialPerusahaan,
        jenisBadanUsaha: this.profileInformationFormGroup.value.jenisBadanUsaha,
        statusBadanUsaha: this.profileInformationFormGroup.value.statusBadanUsaha,
        tipeBadanUsaha: this.profileInformationFormGroup.value.tipeBadanUsaha,
        kategoriBadanUsaha: this.profileInformationFormGroup.value.kategoriBadanUsaha,
        jenisKegiatanUsaha: this.profileInformationFormGroup.value.jenisKegiatanUsahaUtama,
        jenisPenyediaUsaha: this.profileInformationFormGroup.value.jenisPenyediaUsaha,
        npwp: this.profileInformationFormGroup.value.npwpPerusahaan,
        nib: this.profileInformationFormGroup.value.nomorIndukBerusaha,
        bidangUsaha: this.profileInformationFormGroup.value.bidangUsaha,
        oragnisasiHimpunan: this.profileInformationFormGroup.value.organisasiHimpunan,
        bumnPengampu: this.profileInformationFormGroup.value.bumnPengampu,
        website: this.profileInformationFormGroup.value.websitePerusahaan,
        emailPerusahaan: this.profileInformationFormGroup.value.emailPerusahaan,
        file: fileId
      }

      this.profileInformationFormGroup.markAllAsTouched();

      this.profileInfoService.updateProfileInformation(this.params, this.vendorID).subscribe(
        () => {
          this.popUpMessage = dictionary.save_data_success;
          this.triggerPopUp();
          this.getDataPerusahaan();
        },
        () => {
          this.popUpMessage = dictionary.update_data_failed;
          this.triggerPopUp();
          this.close();
        }
      )
    } else {
      this.popUpMessage = dictionary.incomplete_data_company;
      this.triggerPopUp();
    }
  }

  public close() {
    this.opened = false;
  }

  public open() {
    this.opened = true;
  }

  public filterSettings: DropDownFilterSettings = {
    caseSensitive: false,
    operator: "contains",
  }

  saveLogoIdToVendor() {
    if (this.uploadedFileId) {
      this.vendorLogoParam = {
        logoID: this.uploadedFileId
      }

      this.profileInfoService.updateVendorLogo(this.vendorLogoParam, this.vendorID).subscribe(
        () => {
          this.popUpMessage = dictionary.incomplete_data_logo;
          this.redirectOnClosePopUp = false;
          this.popUpID = "popup-failed-save-upload-file-to-database";
          this.triggerPopUp();
        }
      );
    }
  }
}
