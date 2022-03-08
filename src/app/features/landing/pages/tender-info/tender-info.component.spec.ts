import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { CoreModule } from 'src/app/core/core.module';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';
import { TenderService } from 'src/app/core/services/tender.service';
import { dictionary } from 'src/app/dictionary/dictionary';
import { SharedModule } from 'src/app/shared/shared.module';

import { TenderInfoComponent } from './tender-info.component';

describe('TenderInfoComponent', () => {
  let component: TenderInfoComponent;
  let fixture: ComponentFixture<TenderInfoComponent>;
  let event: EventEmitterService;
  let service: TenderService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenderInfoComponent ],
      imports: [CoreModule, SharedModule, RouterModule.forRoot([])],
      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenderInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    event = TestBed.inject(EventEmitterService);
    service = TestBed.inject(TenderService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("test init success", () => {
    let data = {
      tender : true
    };

    let obs = new Observable((subscriber) => {
      subscriber.next(data);
      subscriber.complete();
    });

    spyOn(service, "getDetailTender").and.returnValue(obs);
    component.ngOnInit();
    expect(component.data).toBeTrue;
  });

  it("test init fail", () => {
    let obs = new Observable((subscriber) => {
      subscriber.error(false);
      subscriber.complete();
    });

    spyOn(service, "getDetailTender").and.returnValue(obs);
    component.ngOnInit();
    expect(component.popUpMessage).toBe(dictionary.fetch_data_tender_failed);
  });

});
