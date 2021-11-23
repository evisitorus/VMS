import { Component, OnInit, ViewChild } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

import { TextBoxComponent } from "@progress/kendo-angular-inputs";
import { SetPasswordInterface } from 'src/app/core/interfaces/setPassword-interface';
import { AuthService } from 'src/app/core/services/auth.service';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';

import { MustMatch } from './must-match.validator';

const messages = {
  success: '\r\n Selamat anda telah melakukan aktivasi akun, silahkan masuk ke halaman VMS untuk melengkapi profil anda',
  default: 'Periksa kembali data Anda.',
  wrongPattern: 'Maaf, password anda tidak sesuai. Silahkan ulangi input password!'
};

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})

export class SetPasswordComponent implements OnInit {

  @ViewChild("password") public textbox!: TextBoxComponent;
  @ViewChild("confirmPassword") public textbox1!: TextBoxComponent;

  formSetPassword = new FormGroup({
    password: new FormControl(),
    confirmPassword: new FormControl(),
    token: new FormControl(),
  });

  submitted = false;
  isLoggedIn: boolean = false;
  popUpTitle: string = "Informasi Registrasi Akun";
  redirectOnClosePopUp: boolean = true;
  popUpMessage: string = messages.success;
  token: any;
  tokenExpired: boolean = false;
  public minlength = 8;
  public maxlength = 15;
  public charachtersCount = 0;
  public counter = `${this.charachtersCount}/${this.maxlength}`;

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService,
    private eventEmitterService: EventEmitterService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //call backend to check istokenexpired
    this.isTokenExpired();

    // Note: Below 'queryParams' can be replaced with 'params' depending on your requirements
    this.activatedRoute.queryParams.subscribe(params => {
        this.token = params['token'];
      });

    this.formSetPassword = this.formBuilder.group({
        password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('[ A-Za-z0-9/!_@./#&+-]*')]],
        confirmPassword: ['', Validators.required],
        token: [this.token]
    }, {
        validator: MustMatch('password', 'confirmPassword')
    });
  }

  public ngAfterViewInit(): void {
    this.textbox.input.nativeElement.type = "password";
    this.textbox1.input.nativeElement.type = "password";
  }

  public toggleVisibility(): void {
    const inputEl = this.textbox.input.nativeElement;
    inputEl.type = inputEl.type === "password" ? "text" : "password";
  }

  public toggleVisibilityConfirm(): void {
    const inputEl = this.textbox1.input.nativeElement;
    inputEl.type = inputEl.type === "password" ? "text" : "password";
  }

  clearForm(): void {
    this.formSetPassword.reset();
  }

  triggerPopUp() {
    this.eventEmitterService.trigger();
  }

  public onValueChange(ev: any): void {
    this.charachtersCount = ev.length;
    this.counter = `${this.charachtersCount}/${this.maxlength}`;
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

    let params: SetPasswordInterface= {...this.formSetPassword.value};

    this.authService.setPassword(params).subscribe(
      (resp) =>  { 
        this.submitted = true;
        this.popUpMessage = resp.message;
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

  
  isTokenExpired(): void {
    this.authService.isTokenExpired(this.token).subscribe(
      (resp) =>  { 
        this.popUpMessage = resp.message;
        this.triggerPopUp();
        this.redirectOnClosePopUp = true;
        this.tokenExpired = resp;
      },
      (error) => { 
        this.popUpMessage = error.error.message;
        this.redirectOnClosePopUp = false;
        this.triggerPopUp();
      }
    );
  }

}
