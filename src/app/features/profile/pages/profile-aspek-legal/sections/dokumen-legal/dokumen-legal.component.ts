import { Component, OnInit } from '@angular/core';
import { FileRestrictions } from '@progress/kendo-angular-upload';
import { ProfileAspekLegalService } from 'src/app/core/services/profile/profile-aspek-legal.service';
import { dictionary } from 'src/app/dictionary/dictionary';
import { ProfileAspekLegalComponent } from '../../profile-aspek-legal.component';

@Component({
  selector: 'app-dokumen-legal',
  templateUrl: './dokumen-legal.component.html',
  styleUrls: ['./dokumen-legal.component.css']
})
export class DokumenLegalComponent implements OnInit {

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

  constructor(
    public parent: ProfileAspekLegalComponent,
    private profileAspekLegalService: ProfileAspekLegalService,
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
          switch (name) {
            case 'Company Profile':
              datum.fileName = data.companyProfile;
              break;
            case 'Akta Pendirian':
              datum.fileName = data.aktaPendirian;
              break;
            case 'SIUP / Surat Izin Berusaha':
              datum.fileName = data.siup;
              break;
            case 'NPWP Perusahaan':
              datum.fileName = data.npwpPerusahaan;
              break;
            case 'NIB / TDP':
              datum.fileName = data.nibTdp;
              break;
            case 'IDP / SITU':
              datum.fileName = data.idpSitu;
              break;
            case 'Akta Perubahan':
              datum.fileName = data.aktaPerubahan;
              break;
            case 'SKP Menteri':
              datum.fileName = data.skpMenteri;
              break;
            case 'Sert. Anti Penyuapan':
              datum.fileName = data.sertifikatAntiPenyuapan;
              break;
            case 'Surat Keterangan Non PKP':
              datum.fileName = data.suratKeteranganNonPkp;
              break;
            case 'Surat Pengukuhan PKP':
              datum.fileName = data.suratPengukuhanPkp;
              break;
          };
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

  public uploadForm() {
    const file: any = [
      'Company Profile',
      'Akta Pendirian',
      'SIUP / Surat Izin Berusaha',
      'NPWP Perusahaan',
      'NIB / TDP',
      'IDP / SITU',
      'Akta Perubahan',
      'SKP Menteri',
      'Sert. Anti Penyuapan',
      'Surat Keterangan Non PKP',
      'Surat Pengukuhan PKP'
    ];

    let params = {

    }

    // this.profileAspekLegalService.addAspekLegal().subscribe(
    //   () => {
    //     this.parent.popUpMessage = dictionary.save_data_success;
    //     this.parent.triggerPopUp();
    //     this.fetchData();
    //   },
    //   (err) => {
    //     this.parent.popUpMessage = err.error.message;
    //     this.parent.triggerPopUp();
    //   }
    // );


  }
}
