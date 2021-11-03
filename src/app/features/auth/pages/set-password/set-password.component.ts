import { Component, OnInit, ViewChild } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

import { TextBoxComponent } from "@progress/kendo-angular-inputs";
import { SetPasswordInterface } from 'src/app/core/interfaces/setPassword-interface';
import { AuthService } from 'src/app/core/services/auth.service';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';

import { MustMatch } from './_helpers/must-match.validator';

const messages = {
  success: '\r\n Selamat akun anda sudah aktif di Vendor Management System (VMS) PaDi. Silakan Login',
  default: 'Field tidak boleh kosong.',
};

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})

export class SetPasswordComponent implements OnInit {

  @ViewChild("password") public textbox!: TextBoxComponent;
  @ViewChild("confirmPassword") public textbox1!: TextBoxComponent;

  submitted = false;
  isLoggedIn: boolean = false;
  // formSetPassword = new FormGroup({});
  popUpTitle: string = "Informasi Registrasi Akun";
  redirectOnClosePopUp: boolean = true;
  popUpMessage: string = messages.success;

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService,
    private eventEmitterService: EventEmitterService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Note: Below 'queryParams' can be replaced with 'params' depending on your requirements
    this.activatedRoute.queryParams.subscribe(params => {
        const token = params['token'];
        console.log(token);
        this.formSetPassword.controls['token'].setValue(token);
      });

      this.formSetPassword = this.formBuilder.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
    }, {
        validator: MustMatch('password', 'confirmPassword')
    });
  }

  formSetPassword = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.pattern('[0-9]+')]),
    confirmPassword: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.pattern('[0-9]+')]),
    token: new FormControl(),
  });

  public ngAfterViewInit(): void {
    this.textbox.input.nativeElement.type = "password";
    this.textbox1.input.nativeElement.type = "password";
  }

  public toggleVisibility(): void {
    const inputEl = this.textbox.input.nativeElement;
    inputEl.type = inputEl.typ === "password" ? "text" : "password";
    const inputEl1 = this.textbox1.input.nativeElement;
    inputEl1.type = inputEl1.typ === "password" ? "text" : "password";
  }

  clearForm(): void {
    this.formSetPassword.reset();
  }

  triggerPopUp() {
    this.eventEmitterService.trigger();
  }

  activate(): void {
    this.formSetPassword.markAllAsTouched();

    // stop here if form is invalid
    if (this.formSetPassword.invalid) {
      this.popUpMessage = messages.default;
      this.triggerPopUp();
      this.redirectOnClosePopUp = false;
      return;
    }

    // this.validasiForm();

    let params: SetPasswordInterface= {...this.formSetPassword.value};

    this.authService.setPassword(params).subscribe(
      (resp) =>  { 
        this.submitted = true;
        this.popUpMessage = resp.message + messages.success;
        this.triggerPopUp();
        this.redirectOnClosePopUp = true;
      },
      (error) => { 
        this.isLoggedIn = false;
        this.popUpMessage = error.error.message;
        this.redirectOnClosePopUp = false;
        this.triggerPopUp();
      }
    );
  }

  validasiForm(){
    if (this.formSetPassword.invalid) {
      this.popUpMessage = messages.default;
      this.triggerPopUp();
      this.redirectOnClosePopUp = true;
      return;
    }
  }

}
