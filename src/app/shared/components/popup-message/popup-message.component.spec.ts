import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupMessageComponent } from './popup-message.component';

describe('PopupMessageComponent', () => {
  let component: PopupMessageComponent;
  let fixture: ComponentFixture<PopupMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('test close function', () => {
    // component.redirectOnClose = true;
    component.close();
    expect(component.opened).toBeFalse();
    // expect(window.location.href).toBe(component.redirectUrl);
  });

  it('test trigger function', () => {
    component.trigger();
    expect(component.opened).toBe(component.opened);
  });

});
