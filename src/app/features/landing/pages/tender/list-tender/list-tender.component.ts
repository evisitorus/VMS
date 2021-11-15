import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { CardComponent } from "@progress/kendo-angular-layout";
import { PagerSettings } from "@progress/kendo-angular-listview";


import { TenderService } from 'src/app/core/services/tender.service';
import { tenders } from './tender';

@Component({
  selector: 'app-list-tender',
  templateUrl: './list-tender.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./list-tender.component.css']
})
export class ListTenderComponent implements OnInit {

  public dataTenders: any = [];
  public tenders = tenders;
  public avatarSrc= "";
  constructor(
    private tenderService: TenderService
  ) { }

  ngOnInit(): void {
    this.dataTenders = this.getListTender();
    // this.dataTenders = tenders

    console.log(this.dataTenders);

    this.pageSize = 123;

    tenders.data.tenders.forEach(tender => {
      if(tender.cparent.id == 95){
        this.avatarSrc = "./assets/images/pln.png";
      } else if (tender.cparent.id == 88) {
        this.avatarSrc = "./assets/images/pnm.png";
      }

      
    });
  }

  // public avatarSrc =
  // "https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg";
  // public logoSrc = "./assets/images/pln.png";

  public pagerSettings: PagerSettings = {
    previousNext: true,
    pageSizeValues: false,
    buttonCount: 9,
  };
  public pageSize = 16;

  getListTender(){
    this.tenderService.getListTender().subscribe(
      (resp) =>  { 
        this.dataTenders = resp.data.tender;
        
        return resp.data.tenders
      },
      (error) => { 
        console.log("error");
        console.log(error);
      }
    )
  };

  public getAvatar(bumn: number): string {
      return `./assets/images/${bumn}.png`;
  }

  public getImageUrl(contactId: number): string {
    return `https://www.telerik.com/kendo-angular-ui-develop/components/listview/assets/contacts/${contactId}.png`;
}

public getMessagesText(messagesCount: number): string {
    return `${messagesCount} new message${ messagesCount > 1 ? 's' : '' }`;
}

}
