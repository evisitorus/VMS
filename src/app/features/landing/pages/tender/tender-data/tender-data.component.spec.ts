import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderDataComponent } from './tender-data.component';

describe('TenderDataComponent', () => {
  let component: TenderDataComponent;
  let fixture: ComponentFixture<TenderDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenderDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenderDataComponent);
    component = fixture.componentInstance;
    let today = "2021-11-17 00:26:00";
    component.getDiffDate(new Date(today));
    fixture.detectChanges();
  });


  it('should do xyz if inputProperty is abc', () => {
    let today = "2021-11-17 00:26:00";
    component.getDiffDate(new Date(today));
    expect(component.getDiffDate).toHaveBeenCalled;
  });
  
});