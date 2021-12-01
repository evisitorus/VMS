import {ProfilePICService} from "../../../../core/services/profile/profile-pic/profile-pic.service";
import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";
import {TextBoxComponent} from "@progress/kendo-angular-inputs";
import {ProfilePICInterface} from "../../../../core/interfaces/profile/profile-pic-interface";
import {AuthService} from "../../../../core/services/auth.service";
import {FileService} from 'src/app/core/services/file.service';
import {EventEmitterService} from "../../../../core/services/event-emitter.service";
import {FileRestrictions, SelectEvent} from "@progress/kendo-angular-upload";
import {environment} from "../../../../../environments/environment";
import {UserFileInterface} from "../../../../core/interfaces/profile/user-file-interface";

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
  ) {
  }

  public form: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    phoneNumber: new FormControl(),
    oldPassword: new FormControl(),
    newPassword: new FormControl(),
    confirmNewPassword: new FormControl(),
    fileId: new FormControl(),
  });

  public ngAfterViewInit(): void {
    this.oldPasswordTextbox.input.nativeElement.type = "password";
    this.newPasswordTextbox.input.nativeElement.type = "password";
    this.confirmNewPasswordTextbox.input.nativeElement.type = "password";

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
  public popUpMessage: string = "";
  public invalidFileExtension!: boolean;
  public invalidMaxFileSize!: boolean;
  public fileRestrictions: FileRestrictions = {
    allowedExtensions: ["jpg", "jpeg", "png"],
    maxFileSize: 2097152
  };

  public passwordTextbox = true;

  enablePasswordTextbox(){
    this.passwordTextbox = false;
  };

  public opened = false;

  public close(status: any) {
    this.opened = false;
  }

  public open() {
    this.opened = true;
  }

  responseName: string = "";
  responsePhoneNumber: string = "";
  responseEmail: string = "";
  responseFile: string = "";
  isDisabled: boolean = true;

  changeIsDisabled() {
    this.isDisabled = !this.isDisabled;
  }

  save() {
      this.params = {
        name: this.form.value.name,
        email: this.form.value.email,
        phoneNumber: this.form.value.phoneNumber,
        oldPassword: this.form.value.oldPassword,
        newPassword: this.form.value.newPassword,
        confirmNewPassword: this.form.value.confirmNewPassword
      }

    this.form.markAllAsTouched();
    let person_id = this.authService.getLocalStorage('person_id')!;

    if (this.uploadedFileId) {
      this.userFileParam = {
        fileID: this.uploadedFileId
      }

      this.profilePICService.updateUserFile(this.userFileParam, person_id).subscribe(
        (response) => {
          this.responseFile = response.data;
        },
        (error) => {
        }
      );
    }

    this.profilePICService.updateProfilePIC(this.params, person_id).subscribe(
      (response) => {
        location.reload();
          this.responseName = response.data.name;
          this.responsePhoneNumber = response.data.phone_number;
          this.responseEmail = response.data.email;
      },
      (error) => {
        this.popUpMessage = "Gagal memperbarui data, Silakan Coba Lagi!";
        this.triggerPopUp();
      }
    )
    this.changeIsDisabled();
  }

  ngOnInit(): void {
    let person_id = this.authService.getLocalStorage('person_id')!;
    this.profilePICService.getProfilePIC(person_id).subscribe(
      (response) => {
        if (response.data.file_id) {
          this.responseFile = this.responseFile = environment.api_base_path.concat('/api/media_objects/').concat(response.data.file_id).concat('/file');
        } else {
          this.responseFile = "";
        }

        this.responseName = response.data.name;
        this.responsePhoneNumber = response.data.phone_number;
        this.responseEmail = response.data.email;
      },
      (error) => {
      }
    )
  }

  clearForm(): void {
    this.form.reset();
  }

  upload(): void {
    this.fileService.upload(this.lampiranFiles[0]).subscribe(
      (res) => {
        this.uploadedFileContentUrl = res.contentUrl;
        this.uploadedFileId = res["@id"];
        this.responseFile = environment.api_base_path + res["@id"] + "/file";
      },
      (err) => {
        this.popUpMessage = "Gagal memilih file, Silakan Coba Lagi!";
        this.triggerPopUp();
      }
    );
  }

  triggerPopUp(): void {
    this.eventEmitterService.trigger();
  }

  public selectEventHandler(e: SelectEvent): void {
    let errors = e.files[0].validationErrors;
    this.invalidMaxFileSize = !!errors?.includes("invalidMaxFileSize");
    this.invalidFileExtension = !!errors?.includes("invalidFileExtension");
  }
}
