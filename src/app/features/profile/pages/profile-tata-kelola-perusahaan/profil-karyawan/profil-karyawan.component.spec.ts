import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilKaryawanComponent } from './profil-karyawan.component';

describe('ProfilKaryawanComponent', () => {
  let component: ProfilKaryawanComponent;
  let fixture: ComponentFixture<ProfilKaryawanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilKaryawanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilKaryawanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
