import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css', '../login/login.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  popUpTitle: string = "Reset Password";
  popUpMessage: string = "";
  redirectOnClosePopUp: boolean = true;

  constructor(
    private eventEmitterService: EventEmitterService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  public form: FormGroup = new FormGroup({
    email: new FormControl()
  });

  sendEmail() {
    this.form.markAsTouched();
    let email = this.form.value.email;
    this.authService.forgotPassword(email).subscribe(
      (resp) => {
        this.popUpMessage = resp.message;
        this.triggerPopUp();
      },
      (error) => {
        this.popUpMessage = error.error.message;
        this.triggerPopUp();
      }
    );
  }

  triggerPopUp() {
    this.eventEmitterService.trigger();
  }

}
