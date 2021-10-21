import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

import { TextBoxComponent } from "@progress/kendo-angular-inputs";
import { RegisterInterface } from 'src/app/core/interfaces/register-interface';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // registerForm: FormGroup;
  submitted = false;
  isLoggedIn: boolean = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedId() === 'true';
    if (this.isLoggedIn) window.location.href = "/";


    this.form = this.formBuilder.group({
      namaBadanUsaha: ['', Validators.required],
      npwp: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      namaPic: ['', Validators.required],
      noTelp: ['', [Validators.required,  Validators.maxLength(15)]]
    });
  }

  public form: FormGroup = new FormGroup({
    namaBadanUsaha: new FormControl(),
    npwp: new FormControl(),
    email: new FormControl(),
    namaPic: new FormControl(),
    noTelp: new FormControl(),
  });

  get f() { return this.form.controls; }
  
  register(): void {
    this.form.markAllAsTouched();
    let params: RegisterInterface= {...this.form.value};
    this.authService.register(params).subscribe(
      (resp) =>  { 
        this.submitted = true;
        window.location.href = "/"
      },
      (error) => { this.submitted = false }
    );
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.form.reset();
  }
}
