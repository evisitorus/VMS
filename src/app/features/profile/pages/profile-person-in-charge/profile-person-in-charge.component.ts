import {ProfilePICService} from "../../../../core/services/profile/profile-pic/profile-pic.service";
import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";
import {TextBoxComponent} from "@progress/kendo-angular-inputs";
import {ProfilePICInterface} from "../../../../core/interfaces/profile/profile-pic-interface";

@Component({
  selector: 'app-profile-person-in-charge',
  templateUrl: './profile-person-in-charge.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./profile-person-in-charge.component.css'],
})

export class ProfilePersonInChargeComponent implements OnInit {
  @ViewChild("oldPassword") public oldPasswordTextbox!: TextBoxComponent;
  @ViewChild("newPassword") public newPasswordTextbox!: TextBoxComponent;
  @ViewChild("confirmNewPassword") public confirmNewPasswordTextbox!: TextBoxComponent;

  constructor(private profilePICService: ProfilePICService) {
  }

  public form: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    phoneNumber: new FormControl(),
    oldPassword: new FormControl(),
    newPassword: new FormControl(),
    confirmNewPassword: new FormControl(),
  });

  public toggleVisibility(name: string): void {
    let inputEl;

    switch (name) {
      case "oldPassword":
        inputEl = this.oldPasswordTextbox.input.nativeElement;
        break;
      case "newPassword":
        inputEl = this.newPasswordTextbox.input.nativeElement;
        break;
      case "confirmNewPassword":
        inputEl = this.confirmNewPasswordTextbox.input.nativeElement;
        break;
      default:
        break;
    }

    console.log(inputEl.type)
    inputEl.type = inputEl.type === "text" ? "password" : "text";
  }

  responseName: string = "";
  responsePhoneNumber: string = "";
  responseEmail: string = "";
  isDisabled: boolean = true;

  changeIsDisabled() {
    this.isDisabled = !this.isDisabled;
  }

  save() {
      this.form.markAllAsTouched();
    let params: ProfilePICInterface= {...this.form.value};
    this.profilePICService.updateProfilePIC(params).subscribe(
      (response) => {
        this.responseName = response.data.name;
        this.responsePhoneNumber = response.data.phone_number;
        this.responseEmail = response.data.email;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    )
    this.changeIsDisabled();
  }

  ngOnInit(): void {
    this.profilePICService.getProfilePIC().subscribe(
      (response) => {
        this.responseName = response.data.name;
        this.responsePhoneNumber = response.data.phone_number;
        this.responseEmail = response.data.email;
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
