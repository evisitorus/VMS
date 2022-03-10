import { Component, Injectable, ViewEncapsulation } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { FileRestrictions } from "@progress/kendo-angular-upload";
import { forkJoin, from } from "rxjs";
import { ApiRoutes } from "src/app/core/services/api/api-routes";
import { EventEmitterService } from "src/app/core/services/event-emitter.service";
import { FileService } from "src/app/core/services/file.service";
import { ProfileInformationService } from "src/app/core/services/profile-information.service";
import { environment as env, environment } from "src/environments/environment";
import { ProfileInformationInterface } from "../../../../core/interfaces/profile/profile-information-interface";
import { AuthService } from "../../../../core/services/auth.service";
import { ProfileDashboardService } from "src/app/core/services/profile-dashboard.service";
import { ProfileAddressService } from 'src/app/core/services/profile/profile-address.service';
import { DialogCloseResult, DialogRef, DialogService } from "@progress/kendo-angular-dialog";
import { DropDownFilterSettings } from "@progress/kendo-angular-dropdowns";
import { VendorLogoInterface } from "../../../../core/interfaces/profile/vendor-logo-interface";
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
    private profileDashboardService: ProfileDashboardService,
    public fb: FormBuilder,
    private addressService: ProfileAddressService,
    private dialogService: DialogService
  ) {
  }

  public params!: ProfileInformationInterface;
  public profileInformationFormGroup!: FormGroup;
  public isAdaNib = false;

  public logoForm: FormGroup = undefined!;
  public data: any = {
    files: [],
  };
  public submitted = false;
  public popUpMessage: string = "";
  public opened = false;
  public popUpTitle: string = "";

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

  public defaultItemProvinces: { description: string, id: number } = { description: 'Pilih provinsi', id: 0 };
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
  public defaultItemKelurahan: { description: string, id: number } = { description: 'Pilih Kelurahan', id: 0 };
  public defaultItemKodepos: { description: string, id: number } = { description: 'Pilih Kodepos', id: 0 };

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

  public getDataPerusahaan(): void {
    forkJoin({
      responseVendorData: this.profileDashboardService.getVendor(),
      responseHimpunan: this.profileInfoService.getPartyRole("Himpunan"),
      responsePengampu: this.profileInfoService.getPartyRole("Pengampu"),
      responseVendorHimpunan: this.profileInfoService.getVendorsOrganization("Himpunan"),
      responseVendorPengampu: this.profileInfoService.getVendorsOrganization("Pengampu"),
      responseContactMechanism: this.profileInfoService.getContactMechanism(),
      responseJenisPenyediaUsaha: this.profileInfoService.getJenisPenyediaUsaha(),
      responseJenisKegiatanUsaha: this.profileInfoService.getJenisKegiatanUsaha(),
      responseJenisVendor: this.profileInfoService.getJenisVendor(),
      responseBidangUsaha: this.profileInfoService.getBidangUsaha(),
      responseTipeVendor: this.profileInfoService.getTipeVendor(),
      responseProvinces: this.profileInfoService.getProvinces(),
    }).subscribe((response) => {
      this.setResponseVendorData(response.responseVendorData);
      this.setHimpunan(response.responseHimpunan);
      this.setPengampu(response.responsePengampu);
      this.setVendorHimpunan(response.responseVendorHimpunan);
      this.setVendorPengampu(response.responseVendorPengampu);
      this.setResponseContactMechanism(response.responseContactMechanism);
      this.setJenisPenyediaUsaha(response.responseJenisPenyediaUsaha);
      this.setJenisKegiatanUsaha(response.responseJenisKegiatanUsaha);
      this.setJenisVendor(response.responseJenisVendor);
      this.setBidangUsaha(response.responseBidangUsaha);
      this.setTipeVendor(response.responseTipeVendor);
      this.setProvinces(response.responseProvinces);
    });
  }

  // ngDoCheck(): void {
  //   console.log(this.profileInformationFormGroup.value.isAdaNib)
  // }

  ngOnInit(): void {
    this.logoForm = new FormGroup({
      files: new FormControl(this.data.files),
    });

    this.getDataPerusahaan();
    localStorage.getItem('disableEditData') === 'yes' ? this.logoForm.disable() : null;
  }

  public setResponseVendorData(resp: any) {
    if (resp.logo) {
      this.logoImg = environment.api_base_path + resp.logo.concat('/file');
    }

    this.dataPerusahaan.namaPerusahaan = resp.name ? resp.name : "";
    this.dataPerusahaan.inisialPerusahaan = resp.altName ? resp.altName : "";

    if (resp.statusPerusahaanPkp === undefined) {
      this.dataPerusahaan.statusPerusahaanPkp = null;
    } else {
      this.dataPerusahaan.statusPerusahaanPkp = resp.statusPerusahaanPkp ? "true" : "false";
    }

    if (resp.jenisVendor === undefined) {
      this.dataPerusahaan.jenisBadanUsaha = null;
    } else {
      this.dataPerusahaan.jenisBadanUsaha = resp.jenisVendor.id;
    }

    if (resp.tipeVendor === undefined) {
      this.dataPerusahaan.tipeBadanUsaha = null;
    } else {
      this.dataPerusahaan.tipeBadanUsaha = resp.tipeVendor.id
    }

    if (resp.jenisKegiatanUsaha.length === 0) {
      this.dataPerusahaan.jenisKegiatanUsaha = null;
    } else {
      this.dataPerusahaan.jenisKegiatanUsaha = resp.jenisKegiatanUsaha[0].id
    }

    if (resp.jenisPenyediaUsaha.length === 0) {
      this.dataPerusahaan.jenisPenyediaUsaha = null;
    } else {
      this.dataPerusahaan.jenisPenyediaUsaha = resp.jenisPenyediaUsaha[0].id
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

                                  },
                                  (error) => {
                                    console.log(error);
                                  }
                                );
                              }

                            },
                            (error) => {
                              console.log(error);
                            }

                          );
                        }

                      },
                      (error) => {
                        console.log(error);
                      }
                    );
                  }

                },
                (error) => {
                  console.log(error);
                }
              );

            }

          },
          (error) => {
            console.log(error);
          }
        );

      }
    });
    this.setFormPerusahaan(this.dataPerusahaan);
  }

  public setJenisPenyediaUsaha(resp: any) {
    //get jenis penyedia usaha
    this.jenis_penyedia_usaha = resp["hydra:member"];

    if (this.dataPerusahaan.jenisPenyediaUsaha == null) {
      this.selectedJenisPenyedia = this.jenis_penyedia_usaha[-1]
    } else {
      const index = this.jenis_penyedia_usaha.findIndex(x => x.id === this.dataPerusahaan.jenisPenyediaUsaha);
      this.selectedJenisPenyedia = this.jenis_penyedia_usaha[index];
    }
  }

  public setJenisKegiatanUsaha(resp: any) {
    //get jenis kegiatan usaha
    this.jenis_kegiatan_usaha = resp["hydra:member"];
    if (this.dataPerusahaan.jenisKegiatanUsaha == null) {
      this.selectedJenisKegiatan = this.jenis_kegiatan_usaha[-1]
    } else {
      const index = this.jenis_kegiatan_usaha.findIndex(x => x.id === this.dataPerusahaan.jenisKegiatanUsaha);
      this.selectedJenisKegiatan = this.jenis_kegiatan_usaha[index];
    }
  }

  // public setOrganizations(resp: any) {
  //   //get list of organizations
  //   this.organizations = resp["hydra:member"];
  // }

  public setJenisVendor(resp: any) {
    //get jenis badan usaha
    this.jenisBadanUsahaItems = resp["hydra:member"];
  }

  public setBidangUsaha(resp: any) {
    //get kbli bidang usaha
    this.bidangUsahaKbli = resp["hydra:member"];
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

  public setProvinces(resp: any) {
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
    console.log(resp.data);
    this.dataPerusahaan.bumnPengampu = resp.data ? resp.data : "";
    console.log(this.dataPerusahaan.bumnPengampu);
  }

  public setFormPerusahaan(data: any): void {
    this.profileInformationFormGroup = this.fb.group({
      namaPerusahaan: new FormControl(data.namaPerusahaan, Validators.required),
      inisialPerusahaan: new FormControl(data.inisialPerusahaan, []),
      jenisBadanUsaha: new FormControl(data.jenisBadanUsaha, Validators.required),
      statusBadanUsaha: new FormControl(data.statusPerusahaanPkp, Validators.required),
      tipeBadanUsaha: new FormControl(data.tipeBadanUsaha, Validators.required),
      kategoriBadanUsaha: new FormControl(data.tipeBadanUsaha, []),
      jenisKegiatanUsahaUtama: new FormControl(data.jenisKegiatanUsaha, Validators.required),
      jenisPenyediaUsaha: new FormControl(data.jenisPenyediaUsaha, Validators.required),
      npwpPerusahaan: new FormControl(data.npwp, Validators.required),
      nomorIndukBerusaha: new FormControl(data.nib, Validators.required),
      bidangUsaha: new FormControl(data.bidangUsaha, Validators.required),
      bumnPengampu: new FormControl(data.bumnPengampu, Validators.required),
      organisasiHimpunan: new FormControl(data.organisasiHimpunan, []),
      websitePerusahaan: new FormControl(data.web, Validators.required),
      noTeleponPerusahaan: new FormControl(data.noTelepon, Validators.required),
      alamatPerusahaan: new FormControl(data.alamat, Validators.required),
      provinsi: new FormControl(this.selectedProvince, Validators.required),
      kota: new FormControl(this.selectedKota, Validators.required),
      kecamatan: new FormControl(this.selectedKecamatan, Validators.required),
      kelurahan: new FormControl(this.selectedKelurahan, Validators.required),
      kodePos: new FormControl(this.selectedKodepos, Validators.required),
      isAdaNib: new FormControl(true, Validators.required),
    });
    localStorage.getItem('disableEditData') === 'yes' ? this.profileInformationFormGroup.disable() : null;
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

  handleProvinceChange(value: any) {
    this.selectedProvince = value;
    this.profileInfoService.getKotaKabupaten(value.id).subscribe(
      (resp) => {
        this.dataResultKota = resp["hydra:member"];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  handleKotaChange(value: any) {
    this.profileInfoService.getKecamatan(value.toGeoLocation.id).subscribe(
      (resp) => {
        this.dataResultKecamatan = resp["hydra:member"];
      },
      (error) => {
        console.log(error);
      }
    );

  }

  handleKecamatanChange(value: any) {
    this.profileInfoService.getKelurahan(value.toGeoLocation.id).subscribe(
      (resp) => {
        this.dataResultKelurahan = resp["hydra:member"];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  handleKelurahanChange(value: any) {
    this.profileInfoService.getKodepos(value.toGeoLocation.id).subscribe(
      (resp) => {
        this.dataResultKodepos = resp["hydra:member"];
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
        this.logoImg = env.api_base_path + res["@id"] + "/file";
        this.saveLogoIdToVendor();
      },
      (error) => {
        this.popUpMessage = dictionary.select_file_failed;
        this.triggerPopUp();
        console.log(error);
      }
    );
  }

  triggerPopUp(): void {
    this.eventEmitterService.trigger();
  }

  public submitFormVendor(): void {
    if (this.profileInformationFormGroup.valid && this.logoImg) {
      const dialog: DialogRef = this.dialogService.open({
        title: "Konfirmasi",
        content: "Simpan profil perusahaan ?",
        actions: [{ text: "Yes", primary: true }, { text: "No" }],
        width: 450,
        height: 200,
        minWidth: 250,
      });

      dialog.result.subscribe((result) => {
        if (!(result instanceof DialogCloseResult) && result.text === "Yes") {
          this.save();
        }
      });
    }
  }

  save() {
    let fileId;
    if (this.uploadedFileId) {
      fileId = this.uploadedFileId.split("/");
      fileId = fileId[fileId.length - 1];
    }

    if (this.profileInformationFormGroup.valid) {
      this.params = {
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
        phoneNumber: this.profileInformationFormGroup.value.noTeleponPerusahaan,
        alamatPerusahaan: this.profileInformationFormGroup.value.alamatPerusahaan,
        provinsi: this.profileInformationFormGroup.value.provinsi,
        kota: this.profileInformationFormGroup.value.kota,
        kecamatan: this.profileInformationFormGroup.value.kecamatan,
        keluarahan: this.profileInformationFormGroup.value.kelurahan,
        kodePos: this.profileInformationFormGroup.value.kodePos,
        file: fileId
      }

      this.profileInformationFormGroup.markAllAsTouched();

      this.profileInfoService.updateProfileInformation(this.params, this.vendorID).subscribe(
        () => {
          this.popUpMessage = dictionary.save_data_success;
          this.triggerPopUp();
          location.reload();
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
        },
        (error) => {
          this.popUpMessage = dictionary.incomplete_data_logo;
          this.redirectOnClosePopUp = false;
          this.popUpID = "popup-failed-save-upload-file-to-database";
          this.triggerPopUp();
        }
      );
    }
  }


  public setIsAdaNib(b: boolean) {
    if (b) {
      this.profileInformationFormGroup.patchValue({ nomorIndukBerusaha: this.dataPerusahaan.nib })
      this.profileInformationFormGroup.controls['nomorIndukBerusaha'].enable();
    } else {
      this.profileInformationFormGroup.patchValue({ nomorIndukBerusaha: '' })
      this.profileInformationFormGroup.controls['nomorIndukBerusaha'].disable();
    }
  }

  public cekStatusVendor() {
    this.profileInfoService.cekStatusVendor().subscribe(
      (resp) => {
        if (resp.data.is_verifying) {
          this.profileInformationFormGroup.disable();
        }
      },
      (error) => {
        this.popUpMessage = dictionary.incomplete_data_logo;
        this.redirectOnClosePopUp = false;
        this.popUpID = "popup-failed-save-upload-file-to-database";
        this.triggerPopUp();
      }
    );
  }
}
