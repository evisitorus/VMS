import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TextBoxComponent } from '@progress/kendo-angular-inputs';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';
import { ProfileUbahSandiService } from 'src/app/core/services/profile/profile-ubah-sandi.service';
import { dictionary } from 'src/app/dictionary/dictionary';

@Component({
  selector: 'app-profile-ubah-sandi',
  templateUrl: './profile-ubah-sandi.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./profile-ubah-sandi.component.css']
})
export class ProfileUbahSandiComponent implements OnInit {

  @ViewChild("password") public textbox!: TextBoxComponent;
  popUpTitle: string = "Ubah Kata Sandi";
  popUpMessage: string = "";

  constructor(
    private service: ProfileUbahSandiService,
    private eventEmitterService: EventEmitterService,
  ) { }

  ngOnInit(): void {
  }

  public form: FormGroup = new FormGroup({
    sandiLama: new FormControl(),
    sandiBaru: new FormControl(),
    retypeSandiBaru: new FormControl(),

  });

  public toggleVisibility(): void {
    const inputEl = this.textbox.input.nativeElement;
    inputEl.type = inputEl.type === "password" ? "text" : "password";
  }

  public ubahPassword() {
    this.form.markAllAsTouched()
    if (this.form.valid) {
      const sandiLama = this.form.value.sandiLama;
      const sandiBaru = this.form.value.sandiBaru;
      const retype_sandiBaru = this.form.value.retypeSandiBaru;
      this.service.getUbahSandi(sandiLama, sandiBaru, retype_sandiBaru).subscribe(
        (resp) => {
          if (resp.status === true) {
            this.popUpMessage = resp.message;
            this.triggerPopUp();
          } else {
            this.popUpMessage = resp;
            this.triggerPopUp();
          }
        },
        (err) => {
          console.log(err);
          if (err.error.status === false) {
            this.popUpMessage = err.error.message;
            this.triggerPopUp();
          } else {
            this.popUpMessage = dictionary.update_data_failed;
            this.triggerPopUp();
          }
        }
      );
    }
  }

  triggerPopUp(): void {
    this.eventEmitterService.trigger();
  }

}
