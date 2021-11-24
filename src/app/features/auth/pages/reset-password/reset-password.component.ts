import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TextBoxComponent } from '@progress/kendo-angular-inputs';
import { ResetPasswordInterface } from 'src/app/core/interfaces/reset-password-interface';
import { AuthService } from 'src/app/core/services/auth.service';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css', '../login/login.component.css']
})
export class ResetPasswordComponent implements OnInit {
  
  @ViewChild("newPassword") public newPass!: TextBoxComponent;
  @ViewChild("retypePassword") public retypePass!: TextBoxComponent;
  
  popUpTitle: string = "Reset Password";
  popUpMessage: string = "";
  redirectOnClosePopUp: boolean = false;

  form!: FormGroup;
  submitted: boolean = false;
  token!: string;
  
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private eventEmitterService: EventEmitterService,
  ){}
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      newPassword: ['', Validators.required],
      retypePassword: ['', Validators.required]
    }, {
      validator: this.MustMatch('newPassword', 'retypePassword')
    });

    this.route.queryParams.subscribe(
      params => {
        this.token = params.token;
      }
    );
  }
    
  public ngAfterViewInit(): void {
    this.newPass.input.nativeElement.type = "password";
    this.retypePass.input.nativeElement.type = "password";
  }
  
  public toggleVisibility(comp: string): void {
    const inputEl = (comp === "newPass") ? this.newPass.input.nativeElement : this.retypePass.input.nativeElement;
    inputEl.type = inputEl.type === "password" ? "text" : "password";
  }
  
  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      
      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }
      
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }
  
  onSubmit() {
    this.form.markAsTouched();
    let param: ResetPasswordInterface = {
      token: this.token,
      new_password: this.form.value.newPassword,
      retype_password: this.form.value.retypePassword
    };
    this.authService.resetPassword(param).subscribe(
      (res) => {
        this.popUpMessage = res.message;
        this.redirectOnClosePopUp = true;
        this.triggerPopUp();
      },
      (err) => {
        this.popUpMessage = err.error.message;
        this.redirectOnClosePopUp = false;
        this.triggerPopUp();
      }
    );
  }

  triggerPopUp() {
    this.eventEmitterService.trigger();
  }
  
}
