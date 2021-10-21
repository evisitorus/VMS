import { Component, Input, OnInit } from '@angular/core';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';

@Component({
  selector: 'app-popup-message',
  templateUrl: './popup-message.component.html',
  styleUrls: ['./popup-message.component.css']
})
export class PopupMessageComponent implements OnInit {

  @Input() message!: string;
  @Input() title!: string;
  @Input() noButton: boolean = false;
  @Input() yesButton: boolean = false;

  @Input() redirectOnClose: boolean = false;
  @Input() redirectUrl!: string;

  constructor(private eventEmitterService: EventEmitterService) { }

  ngOnInit(): void {
    if (this.eventEmitterService.subsVar == undefined) {
      this.eventEmitterService.subsVar = this.eventEmitterService.invokeFunction.subscribe(
        () => { this.trigger() }
      );
    }
  }

  public opened = false;

  public close() {
    this.opened = false;
    if (this.redirectOnClose) {
      window.location.href = this.redirectUrl;
    }
  }

  public trigger() {
    this.opened = !this.opened;
  }

}
