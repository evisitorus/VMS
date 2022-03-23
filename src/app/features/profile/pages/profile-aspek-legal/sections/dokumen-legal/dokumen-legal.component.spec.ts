import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DokumenLegalComponent } from './dokumen-legal.component';

describe('DokumenLegalComponent', () => {
  let component: DokumenLegalComponent;
  let fixture: ComponentFixture<DokumenLegalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DokumenLegalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DokumenLegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
