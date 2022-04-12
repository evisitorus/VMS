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
  public dokData : any = {};
  public isDokLegalEmpty: boolean = false;

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
        mandatory: data[key]['isMandatory'],
        type: data[key]['@id']
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
      'NPWP Perusahaan': data.npwpPerusahaan,
      'NIB / TDP': data.nibTdp,
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
    this.dokData = dataItem;
    this.opened = true;
    this.cekDokumenLegal(this.dokData.name);
  }

  public close() {
    this.opened = false;
    this.isDokLegalEmpty = false;
    this.uploadedFileContentUrl = "";
    this.uploadedFileId = "";
    this.lampiranFiles = [];
  }

  public upload(): void {

    if (this.lampiranFiles !== null) {
      this.dokLegalName = this.lampiranFiles[0].name;
      this.fileService.upload(this.lampiranFiles[0]).subscribe(
        (res) => {
          this.uploadedFileContentUrl = res.contentUrl;
          this.uploadedFileId = res["@id"];
          this.uploadDokLegal();
        },
        (err) => {
          this.parent.popUpMessage = err.error.message;
          this.parent.triggerPopUp();
        }
      );
    }
  }

  public cekDokumenLegal(name: string) {
    const dokumen = this.gridData;
    dokumen.forEach(dok => {
      if (dok.name === name) {
        if (dok.file === null) this.isDokLegalEmpty = true;
      }
    });

  }

  public uploadDokLegal() {
    let params = {
      id: this.dokData.file.id,
      namaDokumen: this.dokLegalName,
      file: this.uploadedFileId,
      documentType: this.dokData.type,
      attachmentFilePath: this.uploadedFileContentUrl
    };

    if (this.isDokLegalEmpty) {
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
    } else { 
      this.profileAspekLegalService.updateDokLegal(params).subscribe(
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
    }

  }

  public download(fileId: string, filename: string) {
    this.fileService.download(fileId).subscribe(
      (res) => {
        let mime = this.fileService.getMimeType(filename);
        let blob = new Blob([res], { type: mime });
        let url = window.URL.createObjectURL(blob);
        window.open(url);
      },
      (error) => {
        this.parent.popUpID = "popup-failed-download";
        this.parent.popUpMessage = dictionary.download_file_failed;
        this.parent.triggerPopUp();
      }
    );
  }
}
