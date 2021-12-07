import {Component, Injectable, ViewEncapsulation} from "@angular/core";
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import {FileRestrictions} from "@progress/kendo-angular-upload";
import { from } from "rxjs";
import {ApiRoutes} from "src/app/core/services/api/api-routes";
import {EventEmitterService} from "src/app/core/services/event-emitter.service";
import {FileService} from "src/app/core/services/file.service";
import {ProfileInformationService} from "src/app/core/services/profile-information.service";
import {environment as env, environment} from "src/environments/environment";
import {ProfileInformationInterface} from "../../../../core/interfaces/profile/profile-information-interface";
import {AuthService} from "../../../../core/services/auth.service";
import {ProfileDashboardService} from "src/app/core/services/profile-dashboard.service";
import { ProfileAddressService } from 'src/app/core/services/profile/profile-address.service';

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
    type : string,
    address1 : string,
    number : string
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
    private profileDashboardService : ProfileDashboardService,
    public fb: FormBuilder,
    private addressService: ProfileAddressService,
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

  public isRequired = true;

  public isDisabledKota = true;
  public isDisabledKecamatan = true;
  public isDisabledKelurahan = true;
  public isDisabledKodePos = true;

  public jenis_penyedia_usaha: Array<Hydra> = [];
  public jenis_kegiatan_usaha: Array<Hydra> = [];
  public organizations: Array<Item> = [];
  public provinces: Array<any> = [];
  public cities: Array<any> = [];
  public districts: Array<any> = [];
  public villages: Array<any> = [];
  public postalCodes: Array<any> = [];
  public contact_mechanism: Array<Address> = [];

  public vendor_info: any;
  public total_karyawan: any;
  public karyawan_lokal: any;
  public karyawan_asing:any;
  public vendor_contact_mechanism: any;

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
  public defaultItemKota:{ description: string, id: number, provinceId: number } = { description: 'Pilih kota', id: 0 , provinceId: 0};
  public defaultItemKecamatan: { description: string, id: number, kotaId: number} = { description: 'Pilih Kecamatan', id: 0, kotaId: 0 };
  public defaultItemKelurahan: { description: string, id: number } = { description: 'Pilih Kelurahan', id: 0 };
  public defaultItemKodepos: { description: string, id: number } = { description: 'Pilih Kodepos', id: 0 };

  public provinsi: Array<{id: number, description: string}> = [];
  public dataKecamatan: Array<{}> = [];
  public dataResultKota: Array<{id: number, description: string}> = [];
  public dataResultKecamatan: Array<{id: number, description: string}> = [];
  public dataResultKelurahan: Array<{id: number, description: string}> = [];
  public dataResultKodepos: Array<{}> = [];

  public dataPerusahaan: any = {};

  public getDataPerusahaan(): void{
    this.profileDashboardService.getVendor().subscribe(
      (resp) => {

        if (resp.logo) {
          this.logoImg = environment.api_base_path + resp.logo.concat('/file');
        }

        this.dataPerusahaan.namaPerusahaan = resp.name ? resp.name : "";
        this.dataPerusahaan.inisialPerusahaan = resp.altName ? resp.altName : "";

        if(resp.statusPerusahaanPkp === undefined){
          this.dataPerusahaan.statusPerusahaanPkp = null;
        } else {
          this.dataPerusahaan.statusPerusahaanPkp = resp.statusPerusahaanPkp ? "true" : "false";
        }

        if(resp.jenisVendor === undefined){
          this.dataPerusahaan.jenisBadanUsaha = null;
        } else {
          this.dataPerusahaan.jenisBadanUsaha = resp.jenisVendor.description == "PT" ? "1" : resp.jenisVendor.description == "CV" ? "2" : "3";
        }
        
        if(resp.tipeVendor === undefined){
          this.dataPerusahaan.tipeBadanUsaha = null;
        } else {
          this.dataPerusahaan.tipeBadanUsaha = resp.tipeVendor.id
        }

        if(resp.jenisKegiatanUsaha.length === 0){
          this.dataPerusahaan.jenisKegiatanUsaha = null;
        } else {
          this.dataPerusahaan.jenisKegiatanUsaha = resp.jenisKegiatanUsaha[0].id
        }

        if(resp.jenisPenyediaUsaha.length === 0){
          this.dataPerusahaan.jenisPenyediaUsaha = null;
        } else {
          this.dataPerusahaan.jenisPenyediaUsaha = resp.jenisPenyediaUsaha[0].id
        }
        this.dataPerusahaan.npwp = resp.npwp ? resp.npwp : "";
        this.dataPerusahaan.nib = resp.nomorIndukBerusaha ? resp.nomorIndukBerusaha : "";
        this.dataPerusahaan.bumnPengampu = resp.bumnPengampu ? resp.bumnPengampu : "";
        this.dataPerusahaan.organisasiHimpunan = resp.organisasiHimpunan ? resp.organisasiHimpunan : "";
        this.dataPerusahaan.web = resp.website ? resp.website : "";
        this.dataPerusahaan.jumlahKaryawanDomestik = resp.jumlahKaryawanDomestik ? resp.jumlahKaryawanDomestik : "";
        this.dataPerusahaan.jumlahKaryawanAsing = resp.jumlahKaryawanAsing ? resp.jumlahKaryawanAsing : "";
        this.dataPerusahaan.bidangUsaha = resp.bidangUsaha ? resp.bidangUsaha : "";

        //get jenis penyedia usaha
        this.profileInfoService.getJenisPenyediaUsaha().subscribe(
          (resp) => {
            this.jenis_penyedia_usaha = resp["hydra:member"];

            if(this.dataPerusahaan.jenisPenyediaUsaha == null){
              this.selectedJenisPenyedia = this.jenis_penyedia_usaha[-1]
            } else {
              const index = this.jenis_penyedia_usaha.findIndex(x => x.id === this.dataPerusahaan.jenisPenyediaUsaha);
              this.selectedJenisPenyedia = this.jenis_penyedia_usaha[index];
            }
          },
          (error) => {
            console.log(error);
          }
        );

        //get jenis kegiatan usaha
        this.profileInfoService.getJenisKegiatanUsaha().subscribe(
          (resp) => {
            this.jenis_kegiatan_usaha = resp["hydra:member"];
            if(this.dataPerusahaan.jenisKegiatanUsaha == null){
              this.selectedJenisKegiatan = this.jenis_kegiatan_usaha[-1]
            } else {
              const index = this.jenis_kegiatan_usaha.findIndex(x => x.id === this.dataPerusahaan.jenisKegiatanUsaha);
              this.selectedJenisKegiatan = this.jenis_kegiatan_usaha[index];
            }
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

        //get tipe badan usaha
        this.profileInfoService.getTipeVendor().subscribe(
          (resp) => {
            this.tipeBadanUsahaItems = resp["hydra:member"];
            if(this.dataPerusahaan.tipeBadanUsaha == null){
              this.selectedBadanUsaha = this.tipeBadanUsahaItems[-1]
            } else {
              const index = this.tipeBadanUsahaItems.findIndex(x => x.id === this.dataPerusahaan.tipeBadanUsaha);
              this.selectedBadanUsaha = this.tipeBadanUsahaItems[index];
            }
          },
          (error) => {
            console.log(error);
          }
        );

      },
      (error) => {
        console.log(console.log(error));
      }
    );

    //get contact mechanism
    this.profileInfoService.getContactMechanism().subscribe(
      (resp) => {
        this.contact_mechanism = resp["hydra:member"];

        this.contact_mechanism.forEach( (value) => {
          if(value.contactMechanism.number){
            this.dataPerusahaan.noTelepon = value.contactMechanism.number;
          } else {
            this.dataPerusahaan.alamat = value.contactMechanism.address1;
            this.dataPerusahaan.address = value.contactMechanism;

            // get list of provinces
            this.profileInfoService.getProvinces().subscribe(
              (resp) => {
                this.provinces = resp["hydra:member"];      
                const index = this.provinces.findIndex(x => x.id === this.dataPerusahaan.address.province.id);
                // this.defaultItemProvinces.description = this.provinces[index].description;  
                this.selectedProvince = this.provinces[index];  

                this.profileInfoService.getKotaKabupaten(this.dataPerusahaan.address.province.id).subscribe(
                  (resp) => {
                    this.cities = resp["hydra:member"];
                    const index = this.cities.findIndex(x => x.toGeoLocation.id === this.dataPerusahaan.address.city.id);
                    // this.defaultItemKota.description = this.cities[index].description;  
                    this.dataResultKota = this.cities;
                    this.selectedKota = this.cities[index];  

                    this.profileInfoService.getKecamatan(this.dataPerusahaan.address.city.id).subscribe(
                      (resp) => {
                        this.districts = resp["hydra:member"];
                        const index = this.districts.findIndex(x => x.toGeoLocation.id === this.dataPerusahaan.address.district.id);
                        // this.defaultItemKecamatan.description  = this.districts[index].description;
                        this.dataResultKecamatan = this.districts;
                        this.selectedKecamatan = this.districts[index];  

                        this.profileInfoService.getKelurahan(this.dataPerusahaan.address.district.id).subscribe(
                          (resp) => {                            
                            this.villages = resp["hydra:member"];
                            const index = this.villages.findIndex(x => x.toGeoLocation.id === this.dataPerusahaan.address.village.id);
                            // this.defaultItemKecamatan.description  = this.villages[index].description;
                            this.dataResultKelurahan = this.villages;
                            this.selectedKelurahan = this.villages[index];  
                            
                            this.profileInfoService.getKodepos(this.dataPerusahaan.address.village.id).subscribe(
                              (resp) => {
                                this.postalCodes = resp["hydra:member"];
                                this.dataResultKodepos = this.postalCodes;
                                this.selectedKodepos = this.postalCodes[0];
                                
                                this.setFormPerusahaan(this.dataPerusahaan);

                              },
                              (error) => {
                                console.log(error);
                              }
                            );

                          },
                          (error) => {
                            console.log(error);
                          }

                        );

                      },
                      (error) => {
                        console.log(error);
                      }
                    );
                    
                  },
                  (error) => {
                    console.log(error);
                  }
                );

              },
              (error) => {
                console.log(error);
              }
            );            

          }

        }); 

      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.logoForm = new FormGroup({
      files: new FormControl(this.data.files),
    });

    this.getDataPerusahaan();
  }

  public setFormPerusahaan(data:any): void {
    this.profileInformationFormGroup = this.fb.group({
      namaPerusahaan: new FormControl(data.namaPerusahaan, Validators.required),
      inisialPerusahaan: new FormControl(data.inisialPerusahaan, []),
      jenisBadanUsaha: new FormControl(data.jenisBadanUsaha, Validators.required),
      statusBadanUsaha: new FormControl(data.statusPerusahaanPkp , Validators.required),
      tipeBadanUsaha: new FormControl(data.tipeBadanUsahaName, Validators.required),
      kategoriBadanUsaha: new FormControl(data.tipeBadanUsaha, Validators.required),
      jenisKegiatanUsahaUtama: new FormControl(data.jenisKegiatanUsahaUtamaDesctiption, Validators.required),
      jenisPenyediaUsaha: new FormControl(data.jenisPenyediaUsaha, Validators.required),
      npwpPerusahaan: new FormControl(data.npwp, Validators.required),
      nomorIndukBerusaha: new FormControl(data.nib, Validators.required),
      bidangUsaha: new FormControl(data.bidangUsaha, Validators.required),
      bumnPengampu: new FormControl(data.bumnPengampu, Validators.required),
      organisasiHimpunan: new FormControl(data.organisasiHimpunan, []),
      websitePerusahaan: new FormControl(data.web, Validators.required),
      jumlahKaryawanTotal: new FormControl(data.jumlahKaryawanDomestik + data.jumlahKaryawanAsing, Validators.required),
      jumlahKaryawanLokal: new FormControl(data.jumlahKaryawanDomestik, Validators.required),
      jumlahKaryawanAsing: new FormControl(data.jumlahKaryawanAsing, Validators.required),
      noTeleponPerusahaan: new FormControl(data.noTelepon, Validators.required),
      alamatPerusahaan: new FormControl(data.alamat, Validators.required),
      provinsi: new FormControl(this.selectedProvince, Validators.required),
      kota: new FormControl(this.selectedKota, Validators.required),
      kecamatan: new FormControl(this.selectedKecamatan, Validators.required),
      kelurahan: new FormControl(this.selectedKelurahan, Validators.required),
      kodePos: new FormControl(this.selectedKodepos, Validators.required),
      // pinGeoLoc: new FormControl(null, []),
    });

    this.karyawan_lokal = data.jumlahKaryawanDomestik;
    this.karyawan_asing = data.jumlahKaryawanAsing;
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

  handleKecamatanChange(value:any) {
    this.profileInfoService.getKelurahan(value.toGeoLocation.id).subscribe(
      (resp) => {
        this.dataResultKelurahan = resp["hydra:member"];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  handleKelurahanChange(value:any) {
    this.profileInfoService.getKodepos(value.toGeoLocation.id).subscribe(
      (resp) => {
        this.dataResultKodepos = resp["hydra:member"];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  handleKaryawanLokalChange(value:any){
    this.karyawan_lokal = value;
    this.total_karyawan = this.karyawan_lokal + this.karyawan_asing;
  }

  handleKaryawanAsingChange(value:any){
    this.karyawan_asing = value;
    this.total_karyawan = this.karyawan_lokal + this.karyawan_asing;
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
    console.log(this.profileInformationFormGroup.value)
    this.profileInformationFormGroup.markAllAsTouched();
    if (this.profileInformationFormGroup.valid) {
      this.params = {
        name: this.profileInformationFormGroup.value.namaPerusahaan,
        initial:this.profileInformationFormGroup.value.inisialPerusahaan,
        jenisBadanUsaha:this.profileInformationFormGroup.value.jenisBadanUsaha,
        statusBadanUsaha: this.profileInformationFormGroup.value.statusBadanUsaha,
        tipeBadanUsaha: this.profileInformationFormGroup.value.tipeBadanUsaha,
        kategoriBadanUsaha:this.profileInformationFormGroup.value.kategoriBadanUsaha,
        jenisKegiatanUsaha:this.profileInformationFormGroup.value.jenisKegiatanUsahaUtama,
        jenisPenyediaUsaha:this.profileInformationFormGroup.value.jenisPenyediaUsaha.id,
        npwp: this.profileInformationFormGroup.value.npwpPerusahaan,
        nib:this.profileInformationFormGroup.value.nomorIndukBerusaha,
        bidangUsaha:this.profileInformationFormGroup.value.bidangUsaha,
        oragnisasiHimpunan:this.profileInformationFormGroup.value.organisasiHimpunan,
        bumnPengampu:this.profileInformationFormGroup.value.bumnPengampu,
        website:this.profileInformationFormGroup.value.websitePerusahaan,
        jumlahKaryawanTotal:this.profileInformationFormGroup.value.jumlahKaryawanTotal,
        jumlahKaryawanLokal:this.profileInformationFormGroup.value.jumlahKaryawanLokal,
        jumlahKaryawanAsing:this.profileInformationFormGroup.value.jumlahKaryawanAsing,
        phoneNumber:this.profileInformationFormGroup.value.noTeleponPerusahaan,
        alamatPerusahaan: this.profileInformationFormGroup.value.alamatPerusahaan,
        provinsi: this.profileInformationFormGroup.value.provinsi,
        kota: this.profileInformationFormGroup.value.kota,
        kecamatan: this.profileInformationFormGroup.value.kecamatan,
        keluarahan: this.profileInformationFormGroup.value.kelurahan,
        kodePos: this.profileInformationFormGroup.value.kodePos
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
