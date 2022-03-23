import { Component, OnInit } from '@angular/core';
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
  constructor(
    public parent: ProfileAspekLegalComponent
  ) { }

  ngOnInit(): void {
  }

}
