import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { TextBoxComponent } from "@progress/kendo-angular-inputs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild("password") public textbox!: TextBoxComponent;
  
  public ngAfterViewInit(): void {
    this.textbox.input.nativeElement.type = "password";
  }

  public toggleVisibility(): void {
    const inputEl = this.textbox.input.nativeElement;
    inputEl.type = inputEl.typ === "password" ? "text" : "password";
  }

  public form: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    loggedin: new FormControl()
  });

  login(): void {
    this.form.markAllAsTouched();
  }

  clearForm(): void {
    this.form.reset();
  }

}
