import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css', '../login/login.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  popUpTitle: string = "Informasi Login";
  popUpMessage: string = "";
  redirectOnClosePopUp: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  public form: FormGroup = new FormGroup({
    email: new FormControl()
  });

  resetPassword() {

  }

}
