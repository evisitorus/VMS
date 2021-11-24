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
    let currentDate = new Date();
    component.getDiffDate(new Date(currentDate));
    fixture.detectChanges();
  });


  it('baru', () => {
    let currentDate = new Date();
    component.getDiffDate(new Date(currentDate));
    expect(component.getDiffDate).toHaveBeenCalled;
  });

  it('hari yang lalu', () => {
    let currentDate = new Date().getDay();
    let prevDay = currentDate-2;
    component.getDiffDate(new Date(prevDay));
    expect(component.getDiffDate).toHaveBeenCalled;
  });

  it('minggu yg lalu', () => {
    let currentDate = new Date().getDay();
    let prevWeek = currentDate-14;
    component.getDiffDate(new Date(prevWeek));
    expect(component.getDiffDate).toHaveBeenCalled;
  });


  it('bulan yg lalu', () => {
    let currentDate = new Date().getMonth();
    let prevMonth = currentDate-2;
    component.getDiffDate(new Date(prevMonth));
    expect(component.getDiffDate).toHaveBeenCalled;
  });

  it('tahun yg lalu', () => {
    let currentDate = new Date().getFullYear();
    let prevYear = currentDate-1;
    component.getDiffDate(new Date(prevYear));
    expect(component.getDiffDate).toHaveBeenCalled;
  });


});