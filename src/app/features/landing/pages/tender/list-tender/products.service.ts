import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import { ListViewDataResult } from "@progress/kendo-angular-listview";

import { tenders } from "./tender";

/**
 * Remote binding simulation.
 */
@Injectable()
export class ProductsService {
  public get(
    options: { skip?: number; take?: number } = {}
  ): Observable<ListViewDataResult> {
    const skip = options.skip || 0;
    const take = options.take || tenders.data.meta.total;
    const delayTime = 1000;

    return of({
      data: tenders.data.tenders.slice(skip, skip + take).map((item) => ({ ...item })),
      total: tenders.data.meta.total,
    }).pipe(delay(delayTime)); // simulate remote binding delay
  }
}