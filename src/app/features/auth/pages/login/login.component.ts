import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

import { TextBoxComponent } from "@progress/kendo-angular-inputs";
import { LoginInterface } from 'src/app/core/interfaces/login-interface';
import { AuthService } from 'src/app/core/services/auth.service';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';

const messages = {
  success: 'Selamat Datang "PT. Abadi Jaya Sentosa Selalu" di Vendor Management System (VMS) PaDi',
  wrong_email: 'Email tidak terdaftar, silahkan inputkan email benar atau lakukan registrasi jika anda belum memiliki akun',
  wrong_password: 'Password yang anda inputkan salah, silahkan ulangi!", #maximum input wrong password 3x',
  locked_account: 'Akun anda terkunci, silahkan hubungi Admin di admin@vms-padi.co.id untuk melakukan recovery akun',
  reset_password: 'Silahkan klik reset password untuk mengatur password baru anda',
  unidentified: 'User tidak dikenali, silahkan inputkan email dan password yang benar atau lakukan registrasi jika anda belum memiliki akun !'
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  @ViewChild("password") public textbox!: TextBoxComponent;

  isLoggedIn: boolean = false;
  popUpTitle: string = "Informasi Login";
  popUpMessage: string = messages.success;
  redirectOnClosePopUp: boolean = true;

  constructor(
    private authService: AuthService,
    private eventEmitterService: EventEmitterService
  ) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedId() === 'true';
    if (this.isLoggedIn) window.location.href = "/";
  }

  public form: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });
  
  public ngAfterViewInit(): void {
    this.textbox.input.nativeElement.type = "password";
  }

  public toggleVisibility(): void {
    const inputEl = this.textbox.input.nativeElement;
    inputEl.type = inputEl.typ === "password" ? "text" : "password";
  }

  login(): void {
    this.form.markAllAsTouched();
    let params: LoginInterface= {...this.form.value};
    this.authService.login(params).subscribe(
      (resp) =>  { 
        this.isLoggedIn = true;
        this.authService.setLoggedIn(true);
        this.authService.setToken(resp.access_token);
        this.redirectOnClosePopUp = true;
        this.triggerPopUp();
      },
      (error) => { 
        this.isLoggedIn = false;
        this.popUpMessage = error.statusText;
        this.redirectOnClosePopUp = false;
        this.triggerPopUp();
      }
    );
  }

  clearForm(): void {
    this.form.reset();
  }

  triggerPopUp() {
    this.eventEmitterService.trigger();
  }

}
