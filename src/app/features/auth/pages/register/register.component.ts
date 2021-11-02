import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

import { RegisterInterface } from 'src/app/core/interfaces/register-interface';

import { AuthService } from 'src/app/core/services/auth.service';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';

const messages = {
  default: 'Data tidak boleh kosong. Silahkan klik syarat dan ketentuan serta kebijakan privasi penggunaan aplikasi',
  success: 'Selamat anda telah terdaftar sebagai Vendor PaDi, silahkan cek email anda untuk melakukan aktivasi akun',
  disclaimer: 'Silahkan klik syarat dan ketentuan serta kebijakan privasi penggunaan aplikasi'
};

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({});
  submitted = false;
  isLoggedIn: boolean = false;
  public mask: string = "99.999.999.9-999.999";

  popUpTitle: string = "Informasi Registrasi Akun";
  popUpMessage: string = messages.success;
  redirectOnClosePopUp: boolean = true;

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService,
    private eventEmitterService: EventEmitterService
  ) { }

  get f() { return this.registerForm.controls; }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn() === 'true';
    if (this.isLoggedIn) window.location.href = "/";

    this.registerForm = this.formBuilder.group({
      npwp: ['', [Validators.required]],
      namaPerusahaan: ['', Validators.required],
      namaPic: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      noTelepon: ['', [Validators.required,  Validators.maxLength(15), Validators.pattern('[0-9]+')]],
      disclaimer: ['', Validators.requiredTrue]
    });
  }
  
  register(): void {
    this.registerForm.markAllAsTouched();

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      this.popUpMessage = messages.default;
      this.triggerPopUp();
      this.redirectOnClosePopUp = false;
      return;
    }

    this.validasiForm();

    let params: RegisterInterface= {...this.registerForm.value};
    this.authService.register(params).subscribe(
      (resp) =>  { 
        this.submitted = true;
        this.popUpMessage = resp.message;
        this.triggerPopUp();
        this.redirectOnClosePopUp = true;
      },
      (error) => { 
        if(error.error.message){
          this.popUpMessage = error.error.message;
        }
        this.triggerPopUp();
        this.redirectOnClosePopUp = true;
      }
    );
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }

  triggerPopUp() {
    this.eventEmitterService.trigger();
  }

  validasiForm(){
    if (this.registerForm.invalid) {
      this.popUpMessage = messages.default;
      this.triggerPopUp();
      this.redirectOnClosePopUp = true;
      return;
    }
  }

}
