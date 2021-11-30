import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { CoreModule } from '../core.module';
import { ApiService } from './api/api.service';

import { TenderService } from './tender.service';

describe('TenderService', () => {
  let service: TenderService;
  let apiService: ApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CoreModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TenderService);
    apiService = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test getDetailTender function', () => {
    let res = new Observable((subscriber) => {
      subscriber.next(true);
      subscriber.complete();
    });
    
    spyOn(apiService, "sendRequest").and.returnValue(res);

    let id: string = "23";
    service.getDetailTender(id).subscribe(
      (res) => {
        expect(res).toBe(true);
      }
    );
  });

});
