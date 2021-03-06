import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

import { TextBoxComponent } from "@progress/kendo-angular-inputs";
import { LoginInterface } from 'src/app/core/interfaces/login-interface';
import { AuthService } from 'src/app/core/services/auth.service';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';

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
  popUpMessage: string = "";
  redirectOnClosePopUp: boolean = true;

  constructor(
    private authService: AuthService,
    private eventEmitterService: EventEmitterService
  ) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn() === 'true';
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
    inputEl.type = inputEl.type === "password" ? "text" : "password";
  }

  login(): void {
    this.form.markAllAsTouched();
    let params: LoginInterface= {...this.form.value};
    this.authService.login(params).subscribe(
      (resp) =>  { 
        this.isLoggedIn = true;

        this.authService.setLoggedIn(true);
        this.authService.setToken(resp.data.access_token);
        this.authService.setLocalStorage('person_id', resp.data.person_id);
        this.authService.setLocalStorage('vendor_id', resp.data.vendor_id);
        this.authService.setLocalStorage('vendor_name', resp.data.vendor_name);
        this.authService.setLocalStorage('email', resp.data.email);
        
        let message = resp.message;

        this.popUpMessage = message.substring(0, 15) + resp.data.vendor_name.concat(" ") + message.substring(15, message.length);
        this.redirectOnClosePopUp = true;
        this.triggerPopUp();
      },
      (error) => { 
        this.isLoggedIn = false;
        this.popUpMessage = error.error.message;
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
