import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProfileAspekLegalComponent } from '../../profile-aspek-legal.component';

@Component({
  selector: 'app-sertifikasi-dok-khusus',
  templateUrl: './sertifikasi-dok-khusus.component.html',
  styleUrls: ['./sertifikasi-dok-khusus.component.css']
})
export class SertifikasiDokKhususComponent implements OnInit {

  public form!: FormGroup;
  public gridData: any[] = [];
  public opened: boolean = false;
  public isNewData: boolean = true;

  public popUpTitle: string = "Profile Dokumen";
  public popUpMessage: string = "";

  constructor(
    public parent: ProfileAspekLegalComponent,
  ) { }

  ngOnInit(): void {
  }

  public open(): void {
    this.opened = true;
  }

  public close(): void {
    this.opened = false;
    this.resetForm();
    this.isNewData = true;
  }

  public resetForm(): void {
    // this.data.id = "";
    // this.data.nomorDokumen = "";
    // this.data.namaDokumen = "";
    // this.data.berlakuDari = "";
    // this.data.berlakuSampai = "";
    // this.data.lampiran = "";
    // this.setForm();
  }

}
