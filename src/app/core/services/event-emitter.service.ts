import { EventEmitter, Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  invokeFunction = new EventEmitter();
  subsVar!: Subscription;

  trigger() {
    this.invokeFunction.emit();
  }
}
