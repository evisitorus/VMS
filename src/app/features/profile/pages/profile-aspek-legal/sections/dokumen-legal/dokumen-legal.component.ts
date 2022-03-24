import { Component, OnInit } from '@angular/core';
import { FileRestrictions } from '@progress/kendo-angular-upload';
import { ProfileAspekLegalService } from 'src/app/core/services/profile/profile-aspek-legal.service';
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

  public fetchData(): void {
    this.profileAspekLegalService.getDocType().subscribe(
      (response) => {
        this.gridData = response['hydra:member'];
        this.gridData = this.mapData(this.gridData);

      },
      (err) => {
        this.parent.popUpMessage = err.error.message;
        this.parent.triggerPopUp();
      }
    );
  }

  public mapData(data: any[]): any[] {
    let mappedData: any[] = [];
    let amount_to_remove = 2;
    for (const key in data) {
      mappedData[key] = {
        id: data[key]['id'],
        name: data[key]['name'],
        mandatory: data[key]['isMandatory']
      };
    }

    // get data only unit PKP
    mappedData.splice(mappedData.length - amount_to_remove,amount_to_remove);
    
    return mappedData;
  }

}
