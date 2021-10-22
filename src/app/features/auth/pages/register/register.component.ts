import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

import { RegisterInterface } from 'src/app/core/interfaces/register-interface';
import { AuthService } from 'src/app/core/services/auth.service';

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
  // public notelpMask: string = "000000000000000";

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  get f() { return this.registerForm.controls; }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedId() === 'true';
    if (this.isLoggedIn) window.location.href = "/";

    this.registerForm = this.formBuilder.group({
      npwp: ['', [Validators.required]],
      namaPerusahaan: ['', Validators.required],
      namaPic: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      noTelp: ['', [Validators.required,  Validators.maxLength(15), Validators.pattern('[0-9]+')]],
      disclaimer: ['', Validators.requiredTrue]
    });
  }
  
  register(): void {
    this.registerForm.markAllAsTouched();
    let params: RegisterInterface= {...this.registerForm.value};
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
    if (this.registerForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }
}
