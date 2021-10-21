import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

import { TextBoxComponent } from "@progress/kendo-angular-inputs";
import { LoginInterface } from 'src/app/core/interfaces/login-interface';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  isLoggedIn: boolean = false;

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedId() === 'true';
    if (this.isLoggedIn) window.location.href = "/";
  }

  @ViewChild("password") public textbox!: TextBoxComponent;

  constructor(private authService: AuthService) {}

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
        this.authService.setToken(resp.access_token)
        window.location.href = "/"
      },
      (error) => { this.isLoggedIn = false }
    );
  }

  clearForm(): void {
    this.form.reset();
  }

}
