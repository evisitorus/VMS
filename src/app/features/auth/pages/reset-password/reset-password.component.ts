import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TextBoxComponent } from '@progress/kendo-angular-inputs';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css', '../login/login.component.css']
})
export class ResetPasswordComponent implements OnInit {
  
  @ViewChild("newPassword") public newPass!: TextBoxComponent;
  @ViewChild("retypePassword") public retypePass!: TextBoxComponent;
  
  form!: FormGroup;
  submitted: boolean = false;
  
  constructor(private formBuilder: FormBuilder) {}
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      newPassword: ['', Validators.required],
      retypePassword: ['', Validators.required]
    }, {
      validator: this.MustMatch('newPassword', 'retypePassword')
    });
  }
    
  public ngAfterViewInit(): void {
    this.newPass.input.nativeElement.type = "password";
    this.retypePass.input.nativeElement.type = "password";
  }
  
  public toggleVisibility(comp: string): void {
    const inputEl = (comp === "newPass") ? this.newPass.input.nativeElement : this.retypePass.input.nativeElement;
    inputEl.type = inputEl.type === "password" ? "text" : "password";
  }
  
  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      
      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }
      
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }
  
  onSubmit() {
    this.form.markAsTouched();
  }
  
}
