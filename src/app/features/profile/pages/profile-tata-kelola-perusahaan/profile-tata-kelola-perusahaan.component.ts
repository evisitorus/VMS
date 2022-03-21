import { Component, OnInit } from '@angular/core';
import {EventEmitterService} from "../../../../core/services/event-emitter.service";

@Component({
  selector: 'app-profile-tata-kelola-perusahaan',
  templateUrl: './profile-tata-kelola-perusahaan.component.html',
  styleUrls: ['./profile-tata-kelola-perusahaan.component.css']
})
export class ProfileTataKelolaPerusahaanComponent implements OnInit {

  popUpTitle: string = "";
  popUpMessage: string = "";
  redirectOnClosePopUp: boolean = false;
  constructor(
    private eventEmitterService: EventEmitterService,
  ) { }

  ngOnInit(): void {
  }

  triggerPopUp(): void {
    this.eventEmitterService.trigger();
  }

}
