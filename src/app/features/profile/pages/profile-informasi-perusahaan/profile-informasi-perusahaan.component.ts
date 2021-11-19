import {Component, ViewEncapsulation, ViewChild} from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {AutoCompleteComponent} from "@progress/kendo-angular-dropdowns";
import {ChipRemoveEvent} from "@progress/kendo-angular-buttons";
import {DomSanitizer} from "@angular/platform-browser";
import { ProfileInformationService } from "src/app/core/services/profile-information.service";

@Component({
  selector: 'app-profile-informasi-perusahaan',
  templateUrl: './profile-informasi-perusahaan.component.html',
  styleUrls: ['./profile-informasi-perusahaan.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ProfileInformasiPerusahaanComponent {

  public buForm: FormGroup;
  public sbuForm: FormGroup;
  constructor(
    private profileInfoService:ProfileInformationService
  ) {
    this.buForm = new FormGroup({});
    this.sbuForm = new FormGroup({});
  }

  public listItems: Array<string> = ["Item 1", "Item 2", "Item 3"];

  public opened = false;
  public openedSaham = false;

  ngOnInit(): void {
    this.profileInfoService.getVendorInformation().subscribe(
      (resp) => {
        console.log(resp)
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public close() {
    console.log(`Dialog result: ${status}`);
    this.opened = false;
  }

  public open() {
    this.opened = true;
  }

  public closeSaham() {
    console.log(`Dialog result: ${status}`);
    this.openedSaham = false;
  }

  public openSaham() {
    this.openedSaham = true;
  }

}
