import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilPimpinanDanPengurusComponent } from './profil-pimpinan-dan-pengurus.component';

describe('ProfilPimpinanDanPengurusComponent', () => {
  let component: ProfilPimpinanDanPengurusComponent;
  let fixture: ComponentFixture<ProfilPimpinanDanPengurusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilPimpinanDanPengurusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilPimpinanDanPengurusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
