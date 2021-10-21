import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

import { TextBoxComponent } from "@progress/kendo-angular-inputs";
import { RegisterInterface } from 'src/app/core/interfaces/register-interface';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isLoggedIn: boolean = false;

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedId() === 'true';
    if (this.isLoggedIn) window.location.href = "/";
  }

  constructor(private authService: AuthService) {}

  public form: FormGroup = new FormGroup({
    email: new FormControl(),
    namaBadanUsaha: new FormControl(),
    npwp: new FormControl(),
    noTelp: new FormControl(),
  });
  
  register(): void {
    this.form.markAllAsTouched();
    let params: RegisterInterface= {...this.form.value};
    // this.authService.login(params).subscribe(
    //   (resp) =>  { 
    //     this.isLoggedIn = true;
    //     this.authService.setLoggedIn(true);
    //     this.authService.setToken(resp.access_token)
    //     window.location.href = "/"
    //   },
    //   (error) => { this.isLoggedIn = false }
    // );
  }

  clearForm(): void {
    this.form.reset();
  }
}
