import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PageChangeEvent } from '@progress/kendo-angular-listview';
import { PageSizeChangeEvent } from '@progress/kendo-angular-pager';
import { Observable } from 'rxjs';
import { CoreModule } from 'src/app/core/core.module';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';
import { TenderService } from 'src/app/core/services/tender.service';
import { SharedModule } from 'src/app/shared/shared.module';

import { CardTenderComponent } from './card-tender.component';

describe('CardTenderComponent', () => {
  let component: CardTenderComponent;
  let fixture: ComponentFixture<CardTenderComponent>;
  let eventEmitterService: EventEmitterService;
  let service: TenderService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTenderComponent ],
      imports: [CoreModule, SharedModule, RouterModule.forRoot([])],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    eventEmitterService = TestBed.inject(EventEmitterService);
    service = TestBed.inject(TenderService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it("test init success", () => {
    let data = {
      status : true
    };

    let obs = new Observable((subscriber) => {
      subscriber.next(data);
      subscriber.complete();
    });

    spyOn(service, "getListTender").and.returnValue(obs);
    component.ngOnInit();
    expect(component).toBeTrue;
    expect(component.getTender).toHaveBeenCalled;
    expect(component.loading).toBeFalse;
  });

  it("test init fail", () => {
    let obs = new Observable((subscriber) => {
      subscriber.error(false);
      subscriber.complete();
    });

    spyOn(service, "getListTender").and.returnValue(obs);
    component.ngOnInit();
    expect(component.popUpMessage).toBe("Gagal menemukan data tender");
  });

  it('test triggerPopUp function', () => {
    spyOn(eventEmitterService, 'trigger');
    component.triggerPopUp();
    expect(eventEmitterService.trigger).toHaveBeenCalled();
  });

  it('changePage', () => {
    let mockEvt!: jasmine.Expected<PageChangeEvent>;
    spyOn(component, 'handlePageChange').and.callThrough();

    component.handlePageChange(mockEvt as any);

    expect(component.handlePageChange).toHaveBeenCalledWith(mockEvt);
  });

  // it('showpager', () => {
  //   spyOn(component, 'showPager');
  //   component.showPager;
    
  // });

});
