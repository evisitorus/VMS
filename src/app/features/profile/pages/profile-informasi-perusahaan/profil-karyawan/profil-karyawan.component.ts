import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataBindingDirective } from '@progress/kendo-angular-grid';
import { FileRestrictions } from '@progress/kendo-angular-upload';
import { FileService } from 'src/app/core/services/file.service';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';
import { ProfileKaryawanInterface } from 'src/app/core/interfaces/profile-karyawan.interface';
import { ProfileInformationService } from 'src/app/core/services/profile/profile-information.service';

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
      "nik": "848e6002-8a92-447d-951b-1ffd5e695578",
      "namaPegawai": "Sig Jeannel",
      "tipeKaryawan": 1,
      "jabatan": "Human Resources Assistant III",
      "bidangPekerjaan": "HR"
    },
    {
      "nik": "19d18d40-0e64-4837-9420-92130a0ed253",
      "namaPegawai": "Shelden Greyes",
      "tipeKaryawan": 2,
      "jabatan": "Operator",
      "bidangPekerjaan": "Engineering"
    },
    {
      "nik": "bebdc6eb",
      "namaPegawai": "Megen Cody",
      "tipeKaryawan": 3,
      "jabatan": "Operator",
      "bidangPekerjaan": "Engineering"
    },
    {
      "nik": "38b08b88",
      "namaPegawai": "Clevey Thursfield",
      "tipeKaryawan": 2,
      "jabatan": "VP Quality Control",
      "bidangPekerjaan": "Engineering"
    }
  ];
  
  public gridData: any = {};
  // public gridView!: any[];

  popUpTitle: string = "Informasi Pemegang Saham";
  popUpMessage: string = messages.default;
  redirectOnClosePopUp: boolean = true;

  public tipeKaryawan: Array<Item> = [];
  public bidangPekerjaan: Array<Item> = [];

  public pegawaiFormGroup! :FormGroup;
  
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
    namaPegawai: "",
    tipeKaryawan: "",
    jabatan: "",
    bidangPekerjaan: "",
    resume: ""
  };

  constructor(
    private fileService: FileService,
    private profileInformationService: ProfileInformationService,
    private eventEmitterService: EventEmitterService,
  ) { 
    this.setForm();
  }

  ngOnInit(): void {
    // this.gridView = this.gridData;
    this.gridData = this.dataKaryawan;

    this.profileInformationService.getTipeKaryawan().subscribe(
      (resp) => {
        this.tipeKaryawan = resp['hydra:member'];
      },
      (error) => {
        console.log(error);
      }
    );

    this.profileInformationService.getBidangKaryawan().subscribe(
      (resp) => {
        this.bidangPekerjaan = resp['hydra:member'];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public setForm(): void {
    this.pegawaiFormGroup = new FormGroup({
      nik: new FormControl(this.data.nik,Validators.required),
      namaPegawai: new FormControl(this.data.namaPegawai,Validators.required),
      tipeKaryawan: new FormControl(this.data.tipeKaryawan.name,Validators.required),
      jabatan: new FormControl(this.data.jabatan, Validators.required),
      bidangPekerjaan: new FormControl(this.data.bidangPekerjaan, Validators.required)
    });
  }

  public submitProfilKaryawan(): void {
    this.pegawaiFormGroup.markAllAsTouched();
    
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

  // public fetchData(): void {
  //   this.profileInformationService.getProfilKaryawan().subscribe(
  //     (response) => {
  //       this.gridData = response['hydra:member'];
  //       this.gridData = this.mapData(this.gridData);
  //     },
  //     () => {
  //       this.popUpMessage = "Gagal mendapatkan data";
  //       this.triggerPopUp();
  //     }
  //   );
  // }

  public addToTableFe():void{
    let temp:any = {
      nik: this.pegawaiFormGroup.value.nik,
      namaPegawai: this.pegawaiFormGroup.value.namaPegawai,
      tipeKaryawan: this.pegawaiFormGroup.value.tipeKaryawan,
      jabatan:this.pegawaiFormGroup.value.jabatan,
      bidangPekerjaan:this.pegawaiFormGroup.value.bidangPekerjaan,
      // file: this.uploadedFileId,
      // attachmentFilePath: this.uploadedFileContentUrl
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
    console.log(`Dialog result: ${status}`);
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
        let url= window.URL.createObjectURL(blob);
        window.open(url);
      },
      () => {
        this.popUpMessage = "Gagal mengunduh file, Silakan Coba Lagi!";
        this.triggerPopUp();
      }
    );
  }

  triggerPopUp():void  {
    this.eventEmitterService.trigger();
  }

}
