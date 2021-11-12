import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTenderComponent } from './card-tender.component';

describe('CardTenderComponent', () => {
  let component: CardTenderComponent;
  let fixture: ComponentFixture<CardTenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
