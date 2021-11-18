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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
