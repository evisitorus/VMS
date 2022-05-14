import { Component } from '@angular/core';
import {EventEmitterService} from "../../../../core/services/event-emitter.service";

@Component({
  selector: 'app-profile-tata-kelola-perusahaan',
  templateUrl: './profile-tata-kelola-perusahaan.component.html',
  styleUrls: ['./profile-tata-kelola-perusahaan.component.css']
})
export class ProfileTataKelolaPerusahaanComponent{

  popUpTitle: string = "";
  popUpMessage: string = "";
  redirectOnClosePopUp: boolean = false;
  constructor(
    private eventEmitterService: EventEmitterService,
  ) { }

  triggerPopUp(): void {
    this.eventEmitterService.trigger();
  }

}
