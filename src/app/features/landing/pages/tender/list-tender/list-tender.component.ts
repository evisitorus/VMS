import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { TenderService } from 'src/app/core/services/tender.service';
import { tenders } from './tender';
import { contacts } from './contact';

@Component({
  selector: 'app-list-tender',
  templateUrl: './list-tender.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./list-tender.component.css']
})
export class ListTenderComponent implements OnInit {

  public dataTenders: any = [];
  public contacts: any[] = contacts;
  public tenders = tenders;

  constructor(
    private tenderService: TenderService,
  ) { }

  ngOnInit(): void {
    // this.dataTenders = this.getListTender();
    this.dataTenders = tenders

    console.log(this.dataTenders);
  }
  public avatarSrc =
  "https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg";

  getListTender(){
    this.tenderService.getListTender().subscribe(
      (resp) =>  { 
        // this.gridData = resp['hydra:member'];
        // return this.gridData;
        return resp.data.tenders
      },
      (error) => { 
        console.log(error);
      }
    )
  };


  public getImageUrl(contactId: number): string {
    return `https://www.telerik.com/kendo-angular-ui-develop/components/listview/assets/contacts/${contactId}.png`;
}

public getMessagesText(messagesCount: number): string {
    return `${messagesCount} new message${ messagesCount > 1 ? 's' : '' }`;
}

  // @Input() public contact: {
  //   id: number;
  //   name: string;
  //   email: string;
  //   messagesCount: number;
  // };

  // @Input() public borderTop: boolean;


}
