import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataBindingDirective } from '@progress/kendo-angular-grid';
import { FileRestrictions } from '@progress/kendo-angular-upload';
import { FileService } from 'src/app/core/services/file.service';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';
import { ProfileKaryawanInterface } from 'src/app/core/interfaces/profile-karyawan.interface';
import { ProfileInformationService } from 'src/app/core/services/profile/profile-information.service';
import { ApiRoutes } from "src/app/core/services/api/api-routes";

interface Item {
  name: string;
  id: number;
}

const messages = {
  default: 'Data tidak boleh kosong.',
  success: 'Sukses'
};

@Component({
  selector: 'app-profil-karyawan',
  templateUrl: './profil-karyawan.component.html',
  styleUrls: ['./profil-karyawan.component.css']
})
export class ProfilKaryawanComponent implements OnInit {

  public dataKaryawan = [
    {
      "nik": "848e6002",
      "namaPegawai": "Sig Jeannel",
      "tipeKaryawan": {
        id: 1,
        name: "Tenaga Ahli"
      },
      "jabatan": "Human Resources Assistant III",
      "bidangPekerjaan": "HR",
      "resume": "https://www.kdp.org/resources/pdf/careercenter/Compiling_a_Curriculum_Vitae.pdf"
    },
    {
      "nik": "19d18d40",
      "namaPegawai": "Shelden Greyes",
      "tipeKaryawan": {
        id: 2,
        name: "Tenaga Terampil"
      },
      "jabatan": "Operator",
      "bidangPekerjaan": "Engineering",
      "resume": "https://www.kdp.org/resources/pdf/careercenter/Compiling_a_Curriculum_Vitae.pdf"
    },
    {
      "nik": "bebdc6eb",
      "namaPegawai": "Megen Cody",
      "tipeKaryawan": {
        id: 2,
        name: "Tenaga Administrasi"
      },
      "jabatan": "Operator",
      "bidangPekerjaan": "Engineering",
      "resume": "https://www.kdp.org/resources/pdf/careercenter/Compiling_a_Curriculum_Vitae.pdf"
    },
    {
      "nik": "38b08b88",
      "namaPegawai": "Clevey Thursfield",
      "tipeKaryawan": {
        id: 2,
        name: "Tenaga Terampil"
      },
      "jabatan": "VP Quality Control",
      "bidangPekerjaan": "Engineering",
      "resume": "https://www.kdp.org/resources/pdf/careercenter/Compiling_a_Curriculum_Vitae.pdf"
    }
  ];

  public gridDataPegawai: any = {};
  // public gridView!: any[];

  popUpTitle: string = "Informasi Pemegang Saham";
  popUpMessage: string = messages.default;
  redirectOnClosePopUp: boolean = true;

  public tipeSource: Array<Item> = [];
  public bidangSource: Array<Item> = [];

  public pegawaiFormGroup!: FormGroup;

  public opened = false;

  public submitted = false;
  public selectedFile!: Array<any>;
  public uploadedFileContentUrl!: string;
  public uploadedFileId!: string;

  public fileRestrictions: FileRestrictions = {
    allowedExtensions: ["pdf", "doc", "docx"],
    maxFileSize: 20971520 //20 MB
  };

  public data: any = {
    nik: "",
    firstNameKaryawan: "",
    lastNameKaryawan: "",
    tipeKaryawan: "",
    jabatan: "",
    bidangPekerjaan: "",
    resume: ""
  };

  public bidangTemp: Array<Item> = [];

  constructor(
    private fileService: FileService,
    private profileInformationService: ProfileInformationService,
    private eventEmitterService: EventEmitterService,
  ) {
    //extract from 0
    this.bidangTemp = this.bidangSource.slice(0);
  }

  ngOnInit(): void {
    // this.gridView = this.gridData;
    // this.gridData = this.dataKaryawan;
    this.fetchData();

  }

  public fetchData(): void {
    this.setForm();
    this.profileInformationService.getTipeKaryawan().subscribe(
      (resp) => {
        this.tipeSource = resp['hydra:member'];
      },
      (error) => {
        console.log(error);
      }
    );

    this.profileInformationService.getBidangKaryawan().subscribe(
      (resp) => {
        this.bidangSource = resp['hydra:member'];
      },
      (error) => {
        console.log(error);
      }
    );

    this.profileInformationService.getKaryawan().subscribe(
      (response) => {
        this.gridDataPegawai = response.data;
      },
      () => {
        this.popUpMessage = "Gagal mendapatkan data";
        this.triggerPopUp();
      }
    );


  }

  public setForm(): void {
    this.pegawaiFormGroup = new FormGroup({
      nik: new FormControl(null, Validators.required),
      firstNameKaryawan: new FormControl(null, Validators.required),
      lastNameKaryawan: new FormControl(null, Validators.required),
      tipeKaryawan: new FormControl(null, Validators.required),
      jabatan: new FormControl(null, Validators.required),
      bidangPekerjaan: new FormControl(null, Validators.required)
    });
  }

  public submitProfilKaryawan(): void {
    this.pegawaiFormGroup.markAllAsTouched();

  }

  // add new bidang value based on user input
  public filter!: string;
  public selectedBidang!: Item ;
  public addNewBidang(): void {

    this.profileInformationService.postBidangKaryawan(this.filter).subscribe(
      (res) => {
        //add new value into temp array and backend
        this.bidangSource.push({
          name: this.filter,
          id: 0,
        });
        //make new added value the selected value
        this.selectedBidang = this.bidangSource[this.bidangSource.length-1];
        this.popUpMessage = "Berhasil menambahkan bidang pekerjaan ke database";
        this.triggerPopUp();
      },
      (error) => {
        this.popUpMessage = "Gagal menambahkan bidang pekerjaan";
        this.triggerPopUp();
      });


    this.handleFilter(this.filter);

  }

  // searching handler
  public handleFilter(value: any) {
    this.filter = value;
    this.bidangTemp = this.bidangSource.filter(
      (s) => s.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
  }

  // public mapData(data: any[]): any[] {
  //   let mappedData:any[] = [];
  //   for (const key in data) {
  //     mappedData[key] = {
  //       nik: data[key]['nik'],
  //       namaDokumen: data[key]['namaDokumen'],
  //       berlakuDari: formatDate(data[key]['submitDate'], "dd-MM-YYYY", "en-US"),
  //       berlakuSampai: formatDate(data[key]['berlakuSampai'], "dd-MM-YYYY", "en-US"),
  //       lampiran: data[key]['attachmentFilePath'],
  //       file: data[key]['file'],
  //       id: data[key]['id']
  //     };
  //   }
  //   return mappedData;
  // }

  public addToTableFe(): void {
    let temp: any = {
      nik: this.pegawaiFormGroup.value.nik,
      namaPegawai: this.pegawaiFormGroup.value.namaPegawai,
      tipeKaryawan: this.pegawaiFormGroup.value.tipeKaryawan,
      jabatan: this.pegawaiFormGroup.value.jabatan,
      bidangPekerjaan: this.pegawaiFormGroup.value.bidangPekerjaan.name,
      // file: this.uploadedFileId,
      resume: ApiRoutes.api_base_url + this.uploadedFileContentUrl
    }
    this.popUpMessage = "Berhasil menyimpan data";
    this.triggerPopUp();
    this.dataKaryawan.push(temp);
  }

  // public save(): void {
  //   let params: ProfileKaryawanInterface = {
  //     nik: this.pegawaiFormGroup.value.nik,
  //     namaPegawai: this.pegawaiFormGroup.value.namaPegawai,
  //     tipeKaryawan: this.pegawaiFormGroup.value.tipeKaryawan,
  //     jabatan:this.pegawaiFormGroup.value.jabatan,
  //     bidang:this.pegawaiFormGroup.value.bidangPekerjaan,
  //     file: this.uploadedFileId,
  //     attachmentFilePath: this.uploadedFileContentUrl
  //   };

  //   this.profileInformationService.addProfilKaryawan(params).subscribe(
  //     () => {
  //       this.popUpMessage = "Berhasil menyimpan data";
  //       this.triggerPopUp();
  //       // this.fetchData();
  //       this.close();
  //     },
  //     () => {
  //       this.popUpMessage = "Gagal menyimpan data";
  //       this.triggerPopUp();
  //       this.close();
  //     }
  //   );
  // }

  public close() {
    this.opened = false;
  }

  public open() {
    this.opened = true;
  }

  public upload(): void {
    console.log(this.selectedFile);
    this.fileService.upload(this.selectedFile[0]).subscribe(
      (res) => {
        this.uploadedFileContentUrl = res.contentUrl; // file url
        this.uploadedFileId = res["@id"]; //vendor :logo_id
      },
      (error) => {
        this.popUpMessage = "Gagal memilih file, Silakan Coba Lagi!";
        this.triggerPopUp();
        console.log(error);
      }
    );
  }

  public download(fileId: string, filename: string) {
    this.fileService.download(fileId).subscribe(
      (res) => {
        let mime = this.fileService.getMimeType(filename);
        let blob = new Blob([res], { type: mime });
        let url = window.URL.createObjectURL(blob);
        window.open(url);
      },
      () => {
        this.popUpMessage = "Gagal mengunduh file, Silakan Coba Lagi!";
        this.triggerPopUp();
      }
    );
  }

  triggerPopUp(): void {
    this.eventEmitterService.trigger();
  }

}
