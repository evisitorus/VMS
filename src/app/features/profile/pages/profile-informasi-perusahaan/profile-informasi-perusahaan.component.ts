import {Component, ViewEncapsulation, ViewChild} from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {AutoCompleteComponent} from "@progress/kendo-angular-dropdowns";
import {ChipRemoveEvent} from "@progress/kendo-angular-buttons";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-profile-informasi-perusahaan',
  templateUrl: './profile-informasi-perusahaan.component.html',
  styleUrls: ['./profile-informasi-perusahaan.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ProfileInformasiPerusahaanComponent {

  public buForm: FormGroup;
  public sbuForm: FormGroup;
  constructor(private sanitizer: DomSanitizer) {
    this.buForm = new FormGroup({});
    this.sbuForm = new FormGroup({});
  }

  public listItems: Array<string> = ["Item 1", "Item 2", "Item 3"];

  @ViewChild("contactslist") public list: AutoCompleteComponent | undefined;

  public contacts: Array<{ label: string; iconClass: string }> = [
    {label: "Pedro Afonso", iconClass: "k-chip-avatar pedro"},
    {label: "Maria Shore", iconClass: "k-chip-avatar maria"},
    {label: "Thomas Hardy", iconClass: "k-chip-avatar thomas"},
    {label: "Christina Berg", iconClass: "k-chip-avatar christina"},
    {label: "Paula Wilson", iconClass: "k-chip-avatar paula"},
  ];

  public selectedContacts: Array<any> = [this.contacts[1]];

  public valueChange(contact: string): void {
    if (contact === "") {
      return;
    }

    const contactData = this.contacts.find((c) => c.label === contact);

    if (!this.selectedContacts.includes(contactData)) {
      this.selectedContacts.push(contactData);
    }

    // @ts-ignore
    this.list.reset();
  }

  public onRemove(e: ChipRemoveEvent): void {
    console.log("Remove event arguments: ", e);
    const index = this.selectedContacts
      .map((c) => c.label)
      .indexOf(e.sender.label);
    this.selectedContacts.splice(index, 1);
  }

  public opened = false;
  public openedSaham = false;

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

  public mediaCards: Array<any> = [
    {
      imageSrc:
        "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/black_sea.jpg",
      actionButtons: [],
    },
  ];
}
