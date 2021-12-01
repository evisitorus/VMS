import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPegawaiComponent } from './data-pegawai.component';

describe('DataPegawaiComponent', () => {
  let component: DataPegawaiComponent;
  let fixture: ComponentFixture<DataPegawaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataPegawaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPegawaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
