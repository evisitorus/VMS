import { CommonModule } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { InputsModule, SharedModule, TextBoxComponent } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { Observable } from 'rxjs';
import { CoreModule } from 'src/app/core/core.module';
import { AuthService } from 'src/app/core/services/auth.service';
import { ProfileService } from 'src/app/core/services/profile.service';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';

import { PemegangSahamComponent } from './pemegang-saham.component';

describe('PemegangSahamComponent', () => {
  let component: PemegangSahamComponent;
  let fixture: ComponentFixture<PemegangSahamComponent>;
  let eventEmitterService: EventEmitterService;
  let profileService: ProfileService;

  const messages = {
    default: 'Data tidak boleh kosong.',
    success: 'Sukses'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PemegangSahamComponent ],
      imports: [
        CommonModule,
        // AuthRoutingModule,
        SharedModule,
        CoreModule,
        
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        DateInputsModule,
        InputsModule,
        LayoutModule,
        LabelModule,
        ButtonsModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PemegangSahamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    eventEmitterService = TestBed.inject(EventEmitterService);
    profileService = TestBed.inject(ProfileService);
  });

  it('test triggerPopUp function', () => {
    spyOn(eventEmitterService, 'trigger');
    component.triggerPopUp();
    expect(eventEmitterService.trigger).toHaveBeenCalled();
  });


  it('test clearForm function', () => {
    spyOn(component, 'close');
    component.close();
    expect(component.close).toHaveBeenCalled();
  });


  it('test clearForm function', () => {
    spyOn(component, 'open');
    component.open();
    expect(component.open).toHaveBeenCalled();
  });

  it('test clearForm function', () => {
    spyOn(component, 'openSaham');
    component.openSaham();
    expect(component.openSaham).toHaveBeenCalled();
  });

  it('test clearForm function', () => {
    spyOn(component, 'closeSaham');
    component.closeSaham();
    expect(component.closeSaham).toHaveBeenCalled();
  });

  it('test add pemegang saham basic function', () => {
    spyOn(component.pemegangSahamFormGroup, 'markAllAsTouched');
    component.submitPemegangSaham();
    expect(component.pemegangSahamFormGroup.markAllAsTouched).toHaveBeenCalled();
  });

  it('test add pemegang saham success', () => {
    const response = {
      status: true,
      message: messages.success
    };

    let obs = new Observable((subscriber) => {
        subscriber.next(response);
        subscriber.complete();
    });

    spyOn(profileService, 'addPemegangSaham').and.returnValue(obs);
    spyOn(component, 'triggerPopUp');

    component.submitPemegangSaham();
    
    expect(component.popUpMessage).toBe(response.message);
    expect(component.redirectOnClosePopUp).toBe(true);
    expect(component.triggerPopUp).toHaveBeenCalled();
  });

  it('test add pemegang saham failed', () => {
    const response = {
      ok: false,
      status: 400,
      error: {
        message: messages.default,
        status: false
      }
    };

    let obs = new Observable((subscriber) => {
        subscriber.error(response.error.message);
        subscriber.complete();
    });

    spyOn(profileService, 'addPemegangSaham').and.returnValue(obs);
    spyOn(component, 'triggerPopUp');

    component.submitPemegangSaham();
    
    expect(component.popUpMessage).toBe(response.error.message);
    expect(component.redirectOnClosePopUp).toBe(true);
    expect(component.triggerPopUp).toHaveBeenCalled();
  });
});
