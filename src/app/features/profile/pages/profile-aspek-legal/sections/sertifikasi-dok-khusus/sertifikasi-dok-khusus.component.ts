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

  constructor(
    public parent: ProfileAspekLegalComponent,
  ) { }

  ngOnInit(): void {
  }

}
