import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';
import { TenderService } from 'src/app/core/services/tender.service';
import { dictionary } from 'src/app/dictionary/dictionary';

@Component({
  selector: 'app-tender-info',
  templateUrl: './tender-info.component.html',
  styleUrls: ['./tender-info.component.css']
})
export class TenderInfoComponent implements OnInit {

  public data: any = {};
  public popUpTitle: string = "Info Tender";
  public popUpMessage: string = "";
  
  id!: string | null;

  constructor(
    private tenderService: TenderService,
    private route: ActivatedRoute,
    private eventEmitterService: EventEmitterService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.tenderService.getDetailTender(this.id!).subscribe(
      (res) => {
        this.data = res.data.tender;
      },
      () => {
        this.popUpMessage = dictionary.fetch_data_tender_failed;
        this.triggerPopUp();
      }
    );
  }

  triggerPopUp() {
    this.eventEmitterService.trigger();
  }

}
