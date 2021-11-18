import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ListViewDataResult } from '@progress/kendo-angular-listview';

import { tenders } from './tender';

import { TenderService } from 'src/app/core/services/tender.service';
/**
 * Remote binding simulation.
 */
@Injectable()
export class ProductsService {

    public dataTenders: any;

    constructor(
        private tenderService: TenderService
      ) { }


    getTender(options: { skip?: number, take?: number, page?:number, dataTender?:{} } = {}): Observable<ListViewDataResult> {
        const skip = options.skip || 0;
        const take = options.take || tenders.data.meta.total;
        const delayTime = 1000;

        console.log(options.dataTender);

        return of({
            data: tenders.data.tenders.slice(skip, skip + take).map(item => ({ ...item })),
            total: tenders.data.meta.total
        }).pipe(delay(delayTime)); // simulate remote binding delay
    }


}