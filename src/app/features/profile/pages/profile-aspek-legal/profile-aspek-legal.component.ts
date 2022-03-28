import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';
import { FileService } from 'src/app/core/services/file.service';

@Component({
  selector: 'app-profile-aspek-legal',
  templateUrl: './profile-aspek-legal.component.html',
  styleUrls: ['./profile-aspek-legal.component.css']
})
export class ProfileAspekLegalComponent implements OnInit {

  private messages = {
    success: "Berhasil menyimpan data",
    failed: "Gagal menyimpan data",
    failed_verification_data: "Gagal menemukan data tipe verifikasi",
    failed_relationship_data: "Gagal menemukan data relasi verifikasi",
    failed_status_vendor: "Gagal menemukan data status verifikasi",
    download_failed: "Gagal mengunduh file",
    reverification: "Vendor tidak dapat diverifikasi. Vendor hanya dapat diverifikasi setelah mengajukan verifikasi kelengkapan"
  };

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
    // let ids;
    // let longId = fileId.split("/");
    // if (longId.length > 0) {
    //   ids = longId[longId.length - 1];
    // } else {
    //   ids = fileId;
    // }
    let ids = fileId;

    this.fileService.download(ids).subscribe(
      (res) => {
        let mime = this.fileService.getMimeType(filename);
        let blob = new Blob([res], { type: mime });
        let url= window.URL.createObjectURL(blob);
        window.open(url,"","width=500,height=600")
      },
      () => {
        // this.notification.show(this.messages.download_failed, "error");
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
        this.popUpMessage = "Gagal memilih file, Silakan Coba Lagi!";
        this.triggerPopUp();
      }
    );
  }

}
