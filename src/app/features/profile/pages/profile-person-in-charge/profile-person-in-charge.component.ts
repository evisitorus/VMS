import {ProfilePICService} from "../../../../core/services/profile/profile-pic/profile-pic.service";
import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {TextBoxComponent} from "@progress/kendo-angular-inputs";
import {ProfilePICInterface} from "../../../../core/interfaces/profile/profile-pic-interface";
import {AuthService} from "../../../../core/services/auth.service";
import {FileService} from 'src/app/core/services/file.service';
import {EventEmitterService} from "../../../../core/services/event-emitter.service";
import {FileRestrictions, SelectEvent} from "@progress/kendo-angular-upload";
import {environment} from "../../../../../environments/environment";
import {UserFileInterface} from "../../../../core/interfaces/profile/user-file-interface";
import { dictionary } from "src/app/dictionary/dictionary";
import { ProfileInformasiPerusahaanComponent } from "../profile-informasi-perusahaan/profile-informasi-perusahaan.component";

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

  constructor(private profilePICService: ProfilePICService,
              private authService: AuthService,
              private fileService: FileService,
              private eventEmitterService: EventEmitterService,
              private parent: ProfileInformasiPerusahaanComponent,
  ) {
  }

  responseName: string = "";
  responsePhoneNumber: string = "";
  responseEmail: string = "";
  responseFile: string = "";
  isDisabled: boolean = true;
  popUpTitle: string = "Informasi";
  popUpMessage: string = "";
  redirectOnClosePopUp: boolean = false;
  popUpID = "";

  person_id = this.authService.getLocalStorage('person_id')!;
  disabledWhenError: boolean = false;

  public dict = dictionary;
  public formPIC!: FormGroup;
  public formField = {
    name: "Nama Penanggung Jawab",
    email: "Email Penanggung Jawab",
    phone: "No. Handphone"
  };
  public charLimit = {
    minName: 3,
    maxName: 50,
    minPhone: 7,
    maxPhone: 20
  };

  public setForm(): void {
    this.formPIC = new FormGroup({
      name: new FormControl(this.responseName),
      email: new FormControl(this.responseEmail),
      phoneNumber: new FormControl(this.responsePhoneNumber),
      oldPassword: new FormControl(null),
      newPassword: new FormControl(null),
      confirmNewPassword: new FormControl(null),
      fileId: new FormControl(null),
    });
  }

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

    inputEl.type = inputEl.type === "text" ? "password" : "text";
  }

  public params!: ProfilePICInterface;
  public userFileParam!: UserFileInterface;
  public mediaArray!: Array<any>;
  public lampiranFiles!: Array<any>;
  public uploadedFileContentUrl!: string;
  public uploadedFileId!: string;
  public invalidFileExtension!: boolean;
  public invalidMaxFileSize!: boolean;
  public fileRestrictions: FileRestrictions = {
    allowedExtensions: ["jpg", "jpeg", "png"],
    maxFileSize: 2097152
  };

  public passwordTextbox = true;

  enablePasswordTextbox() {
    this.passwordTextbox = false;
  }

  public opened = false;

  public close() {
    this.opened = false;
  }


  changeIsDisabled() {
    this.isDisabled = !this.isDisabled;
  }

  attention() {
    this.parent.redirectOnClosePopUp = false;
    this.parent.popUpID = "popup-attention";
    this.parent.popUpTitle = "Perhatian";
    this.parent.popUpMessage = dictionary.update_data_notification;
    this.triggerPopUp();
  }

  saveFileIdToUser() {
    if (this.uploadedFileId) {
      this.userFileParam = {
        fileID: this.uploadedFileId
      }

      this.profilePICService.updateUserFile(this.userFileParam, this.person_id).subscribe(
        (error) => {
          this.parent.popUpMessage = error.error.message;
          this.parent.redirectOnClosePopUp = false;
          this.parent.popUpID = "popup-failed-save-upload-file-to-database";
          this.triggerPopUp();
        }
      );
    }
  }

  save() {
    if ("" === this.formPIC.value.oldPassword) {
      this.formPIC.value.oldPassword = null;
    }

    if ("" === this.formPIC.value.newPassword) {
      this.formPIC.value.newPassword = null;
    }

    if ("" === this.formPIC.value.confirmNewPassword) {
      this.formPIC.value.confirmNewPassword = null;
    }

    this.lampiranFiles = [];

    this.params = {
      name: this.formPIC.value.name,
      email: this.formPIC.value.email,
      phoneNumber: this.formPIC.value.phoneNumber,
      oldPassword: this.formPIC.value.oldPassword,
      newPassword: this.formPIC.value.newPassword,
      confirmNewPassword: this.formPIC.value.confirmNewPassword
    }
    
    if (this.formPIC.valid) {
      this.formPIC.markAllAsTouched();

      this.profilePICService.updateProfilePIC(this.params, this.person_id).subscribe(
        (response) => {
          this.changePasswordTextboxEnabled = false;
          this.responseName = response.data.name;
          this.responsePhoneNumber = response.data.phone_number;
          this.responseEmail = response.data.email;
          this.redirectOnClosePopUp = false;
          this.parent.popUpTitle = 'Informasi';
          this.parent.popUpMessage = dictionary.update_data_success;
          this.parent.popUpID = "popup-update-pic-success";
          this.triggerPopUp();
          this.setForm();
        },
        (error) => {
          this.changePasswordTextboxEnabled = false;
          this.redirectOnClosePopUp = false;
          this.parent.popUpMessage = error.error.message;
          this.parent.popUpID = "popup-update-pic-failed";
          this.triggerPopUp();
          this.setForm();
        }
      )
      this.changeIsDisabled();
    } else {
      this.changePasswordTextboxEnabled = false;
      this.parent.redirectOnClosePopUp = false;
      this.parent.popUpTitle = 'Informasi';
      this.parent.popUpMessage = 'Mohon lengkapi data PIC'
      this.parent.popUpID = "popup-please-complete-your-data";
      this.triggerPopUp();
    }
  }

  ngOnInit(): void {
    this.disabledWhenError = true;
    this.setForm();

    this.profilePICService.getProfilePIC(this.person_id).subscribe(
      (response) => {
        if (response.data.file_id) {
          this.responseFile = this.responseFile = environment.api_base_path.concat('/api/media_objects/').concat(response.data.file_id).concat('/file');
        } else {
          this.responseFile = "";
        }

        this.responseName = response.data.name;
        this.responsePhoneNumber = response.data.phone_number;
        this.responseEmail = response.data.email;
        this.setForm();
        this.disabledWhenError = false;
      },
      () => {
        this.disabledWhenError = true;
        this.parent.redirectOnClosePopUp = false;
        this.parent.popUpTitle = 'Informasi';
        this.parent.popUpMessage = 'Gagal menampilkan data PIC';
        this.parent.popUpID = "popup-pic-data-failed-to-load";
        this.triggerPopUp();
      }
    )
  }

  clearForm(): void {
    this.formPIC.reset();
  }

  upload(): void {
    this.fileService.upload(this.lampiranFiles[0]).subscribe(
      (res) => {
        this.uploadedFileContentUrl = res.contentUrl;
        this.uploadedFileId = res["@id"];
        this.responseFile = environment.api_base_path + res["@id"] + "/file";
        this.saveFileIdToUser();
      },
      () => {
        this.parent.popUpMessage = dictionary.invalid_file;
        this.parent.redirectOnClosePopUp = false;
        this.parent.popUpID = "popup-failed-to-upload";
        this.triggerPopUp();
      }
    );
  }

  triggerPopUp(): void {
    this.eventEmitterService.trigger();
  }

  public selectEventHandler(e: SelectEvent): void {
    const errors = e.files[0].validationErrors;
    this.invalidMaxFileSize = !!errors?.includes("invalidMaxFileSize");
    this.invalidFileExtension = !!errors?.includes("invalidFileExtension");
  }

  keyPressAlphaSymbol(event: { keyCode: number; preventDefault: () => void; }) {
    const input = String.fromCharCode(event.keyCode);

    if (/[a-zA-Z\- ']/.test(input)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  keyPressNumbers(event: { which: any; keyCode: any; preventDefault: () => void; }) {
    const charCode = (event.which) ? event.which : event.keyCode;

    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }

  changePasswordTextboxEnabled = false;

  showChangePasswordTextbox() {
    this.changePasswordTextboxEnabled = true;
    this.changeHidePasswordChangeLinkStatus();
  }

  hidePasswordChangeLink = true;

  changeHidePasswordChangeLinkStatus() {
    this.hidePasswordChangeLink = !this.hidePasswordChangeLink;
  }

  perbaruiClicked() {
    this.attention();
    this.changeIsDisabled();
    this.responsePhoneNumber = ('No. Handphone tidak ditemukan' !== this.responsePhoneNumber) ? this.responsePhoneNumber : "";
  }

  public open() {
    if (this.uploadedFileContentUrl === null || this.lampiranFiles === null) {
      this.parent.popUpMessage = dictionary.invalid_file;
      this.parent.popUpID = "popup-check-your-file-again"
      this.triggerPopUp();
    } else if (this.formPIC.valid) {
      this.opened = true;
    }
  }
}
