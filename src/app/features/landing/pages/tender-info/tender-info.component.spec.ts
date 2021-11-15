import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderInfoComponent } from './tender-info.component';

describe('TenderInfoComponent', () => {
  let component: TenderInfoComponent;
  let fixture: ComponentFixture<TenderInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenderInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenderInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
