import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';
import { dictionary } from 'src/app/dictionary/dictionary';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css', '../login/login.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  popUpTitle: string = "Reset Password";
  popUpMessage: string = "";
  redirectOnClosePopUp: boolean = true;
  dictionary: any = dictionary;
  labelName: any = {
    alamatEmail: "Alamat Email"
  }
  constructor(
    private eventEmitterService: EventEmitterService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  public form: FormGroup = new FormGroup({
    email: new FormControl( null, [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])
  });

  sendEmail() {
    this.form.markAsTouched();
    const email = this.form.value.email;
    if (this.form.valid){
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
  }

  triggerPopUp() {
    this.eventEmitterService.trigger();
  }

}
