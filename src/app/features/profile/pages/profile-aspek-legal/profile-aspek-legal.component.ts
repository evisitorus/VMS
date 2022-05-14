import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';
import { FileService } from 'src/app/core/services/file.service';
import { dictionary } from 'src/app/dictionary/dictionary';

@Component({
  selector: 'app-profile-aspek-legal',
  templateUrl: './profile-aspek-legal.component.html',
  styleUrls: ['./profile-aspek-legal.component.css']
})
export class ProfileAspekLegalComponent implements OnInit {

  public popUpID = "";
  public popUpTitle: string = "";
  public selectedFile!: Array<any>;
  public uploadedFileContentUrl!: string;
  public uploadedFileId!: string;
  public popUpMessage: string = "";

  constructor(
    private fileService: FileService,
    private eventEmitterService: EventEmitterService,
  ) { }

  ngOnInit(): void {
  }

  public download(fileId: string, filename: string) {
    const ids = fileId;

    this.fileService.download(ids).subscribe(
      (res) => {
        const mime = this.fileService.getMimeType(filename);
        const blob = new Blob([res], { type: mime });
        const url= window.URL.createObjectURL(blob);
        window.open(url,"","width=500,height=600")
      },
      () => {
        this.popUpID = "popup-download-file-failed";
        this.popUpMessage = dictionary.download_file_failed;
        this.triggerPopUp();
      }
    );
  }

  public convertDateFormat(date: any){
    const offset = date.getTimezoneOffset();
    date = new Date(date.getTime() - (offset*60*1000));
    return date.toISOString();
  }

  public triggerPopUp(): void {
    this.eventEmitterService.trigger();
  }

  public upload(): void {
    this.fileService.upload(this.selectedFile[0]).subscribe(
      (res) => {
        this.uploadedFileContentUrl = res.contentUrl; // file url
        this.uploadedFileId = res["@id"]; //vendor :resume_id

      },
      (error) => {
        this.popUpID = "popup-upload-file-failed";
        this.popUpMessage = dictionary.select_file_failed;
        this.triggerPopUp();
      }
    );
  }

}
