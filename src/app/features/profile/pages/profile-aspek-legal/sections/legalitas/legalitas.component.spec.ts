import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalitasComponent } from './legalitas.component';

describe('LegalitasComponent', () => {
  let component: LegalitasComponent;
  let fixture: ComponentFixture<LegalitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
