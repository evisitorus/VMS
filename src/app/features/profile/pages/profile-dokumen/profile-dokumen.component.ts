import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FileRestrictions } from '@progress/kendo-angular-upload';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';

@Component({
  selector: 'app-profile-dokumen',
  templateUrl: './profile-dokumen.component.html',
  styleUrls: ['./profile-dokumen.component.css']
})
export class ProfileDokumenComponent implements OnInit {

  public form!: FormGroup;
  public gridData: any[] = [];
  public opened: boolean = false;
  public popUpTitle: string = "Profile Dokumen";
  public popUpMessage: string = "";
  public value: Date = new Date();
  public checked: boolean = false;
  public fileRestrictions: FileRestrictions = {
    allowedExtensions: ["jpg", "jpeg", "png"],
  };
  public lampiranFiles!: Array<any>;

  constructor(
    private eventEmitterService: EventEmitterService
  ){
    this.form = new FormGroup({
      nomorDokumen: new FormControl("", Validators.required),
      namaDokumen: new FormControl("", Validators.required),
      berlakuSampai: new FormControl("", Validators.required)
    });
  }

  ngOnInit(): void {
  }

  public close() {
    this.opened = false;
  }

  public open() {
    this.opened = true;
  }

  public submit() {

  }

  triggerPopUp() {
    this.eventEmitterService.trigger();
  }
}
