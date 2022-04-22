import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SertifikasiDokKhususComponent } from './sertifikasi-dok-khusus.component';

describe('SertifikasiDokKhususComponent', () => {
  let component: SertifikasiDokKhususComponent;
  let fixture: ComponentFixture<SertifikasiDokKhususComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SertifikasiDokKhususComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SertifikasiDokKhususComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
