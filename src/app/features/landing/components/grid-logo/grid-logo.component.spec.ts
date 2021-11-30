import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridLogoComponent } from './grid-logo.component';

describe('GridLogoComponent', () => {
  let component: GridLogoComponent;
  let fixture: ComponentFixture<GridLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
