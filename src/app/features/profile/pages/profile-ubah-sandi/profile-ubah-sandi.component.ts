import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TextBoxComponent } from '@progress/kendo-angular-inputs';

@Component({
  selector: 'app-profile-ubah-sandi',
  templateUrl: './profile-ubah-sandi.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./profile-ubah-sandi.component.css']
})
export class ProfileUbahSandiComponent implements OnInit {

  @ViewChild("password") public textbox!: TextBoxComponent;
  popUpTitle: string = "";
  popUpMessage: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public form: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  public toggleVisibility(): void {
    const inputEl = this.textbox.input.nativeElement;
    inputEl.type = inputEl.type === "password" ? "text" : "password";
  }

}
