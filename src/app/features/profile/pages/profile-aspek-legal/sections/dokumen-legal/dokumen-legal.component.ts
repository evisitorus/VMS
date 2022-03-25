import { Component, OnInit } from '@angular/core';
import { FileRestrictions } from '@progress/kendo-angular-upload';
import { FileService } from 'src/app/core/services/file.service';
import { ProfileAspekLegalService } from 'src/app/core/services/profile/profile-aspek-legal.service';
import { dictionary } from 'src/app/dictionary/dictionary';
import { ProfileAspekLegalComponent } from '../../profile-aspek-legal.component';

@Component({
  selector: 'app-dokumen-legal',
  templateUrl: './dokumen-legal.component.html',
  styleUrls: ['./dokumen-legal.component.css']
})
export class DokumenLegalComponent implements OnInit {

  public opened = false;
  public gridData: any[] = [];
  public checkboxOnly = false;
  public mode = "multiple";
  private messages = {
    failed: "Gagal menemukan data dokumen",
  };
  public fileRestrictions: FileRestrictions = {
    allowedExtensions: ["jpg", "jpeg", "png", "pdf"],
    maxFileSize: 2097152
  };
  public lampiranFiles!: Array<any>;
  public uploadedFileContentUrl!: string;
  public uploadedFileId!: string;
  public invalidFileExtension!: boolean;
  public invalidMaxFileSize!: boolean;
  public dokLegalName!: string;

  constructor(
    public parent: ProfileAspekLegalComponent,
    private profileAspekLegalService: ProfileAspekLegalService,
    private fileService: FileService,
  ) { }

  ngOnInit(): void {
    this.fetchData();
  }

  public getAspekLegal(grid_data: any[]) {
    let data: any = {};

    this.profileAspekLegalService.getAspekLegal().subscribe(
      (response) => {
        //saving response data to temp array
        data.companyProfile = response.companyProfile;
        data.aktaPendirian = response.aktaPendirian;
        data.siup = response.siup;
        data.npwpPerusahaan = response.npwpPerusahaan;
        data.nibTdp = response.nibTdp;
        data.idpSitu = response.idpSitu;
        data.aktaPerubahan = response.aktaPerubahan;
        data.skpMenteri = response.skpMenteri;
        data.sertifikatAntiPenyuapan = response.sertifikatAntiPenyuapan;
        data.suratKeteranganNonPkp = response.suratKeteranganNonPkp;
        data.suratPengukuhanPkp = response.suratPengukuhanPkp;

        grid_data.forEach(datum => {
          let name = datum.name;
          datum.file = this.getDataType(name,data);
        });

        this.gridData = grid_data;
      },
      (err) => {
        this.parent.popUpMessage = err.error.message;
        this.parent.triggerPopUp();
      }
    );
  }

  public fetchData(): void {
    this.profileAspekLegalService.getDocType().subscribe(
      (response) => {
        let responseData = response['hydra:member'];
        let tempData = this.mapData(responseData);
        this.getAspekLegal(tempData);
      },
      (err) => {
        this.parent.popUpMessage = err.error.message;
        this.parent.triggerPopUp();
      }
    );
  }

  public mapData(data: any[]): any[] {
    let mappedData: any[] = [];
    const amount_to_remove = 2;
    for (const key in data) {
      mappedData[key] = {
        id: data[key]['id'],
        name: data[key]['name'],
        mandatory: data[key]['isMandatory']
      };
    }

    // get data only unit PKP
    mappedData.splice(mappedData.length - amount_to_remove, amount_to_remove);

    return mappedData;
  }

  public getDataType(doc_type: any, data: any) {
    let file: any = {
      'Company Profile': data.companyProfile,
      'Akta Pendirian': data.aktaPendirian,
      'SIUP / Surat Izin Berusaha': data.siup,
      'NPWP Perusahaan': data.npwp,
      'NIB / TDP': data.nib,
      'IDP / SITU': data.idpSitu,
      'Akta Perubahan': data.aktaPerubahan,
      'SKP Menteri': data.skpMenteri,
      'Sert. Anti Penyuapan': data.sertifikatAntiPenyuapan,
      'Surat Keterangan Non PKP': data.suratKeteranganNonPkp,
      'Surat Pengukuhan PKP': data.suratPengukuhanPkp
    };

    return file[doc_type];
  }

  public openFileDialog(dataItem: any) {
    this.dokLegalName = dataItem.name;
    this.opened = true;
  }

  public close() {
    this.opened = false;
  }

  public upload(): void {

    let file: any = {
      'Company Profile': "companyProfile",
      'Akta Pendirian': "aktaPendirian",
      'SIUP / Surat Izin Berusaha': "siup",
      'NPWP Perusahaan': "npwp",
      'NIB / TDP': "nib",
      'IDP / SITU': "idpSitu",
      'Akta Perubahan': "aktaPerubahan",
      'SKP Menteri': "skpMenteri",
      'Sert. Anti Penyuapan': "sertifikatAntiPenyuapan",
      'Surat Keterangan Non PKP': "suratKeteranganNonPkp",
      'Surat Pengukuhan PKP': "suratPengukuhanPkp"
    };

    if (this.lampiranFiles !== null) {
      this.fileService.upload(this.lampiranFiles[0]).subscribe(
        (res) => {
          console.log(res)
          this.uploadedFileContentUrl = res.contentUrl;
          this.uploadedFileId = res["@id"];
          let docName = file[this.dokLegalName];
          let params = {
            [docName]:res.contentUrl
          };
        
          // this.uploadDokLegal(res.contentUrl);
          this.profileAspekLegalService.addDokLegal(params).subscribe(
            () => {
              this.parent.popUpMessage = dictionary.save_data_success;
              this.parent.triggerPopUp();
              this.fetchData();
            },
            (err) => {
              this.parent.popUpMessage = err.error.message;
              this.parent.triggerPopUp();
            }
          );
        },
        (err) => {
          this.parent.popUpMessage = err.error.message;
          this.parent.triggerPopUp();
        }
      );
    }
  }

  // public uploadDokLegal(file: any) {
  //   let docName = this.dokLegalName;
  //   console.log(docName)
  //   //endpointnya media_object
  //   let params = {
  //     docName: this.getDataType(docName,file)
  //   }
  //   console.log(params)

  //   this.profileAspekLegalService.addDokLegal(params).subscribe(
  //     () => {
  //       this.parent.popUpMessage = dictionary.save_data_success;
  //       this.parent.triggerPopUp();
  //       this.fetchData();
  //     },
  //     (err) => {
  //       this.parent.popUpMessage = err.error.message;
  //       this.parent.triggerPopUp();
  //     }
  //   );


  // }
}
