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
// import { AuthRoutingModule } from '../../../auth-routing.module';

import { ProfileRiwayatPekerjaanComponent } from './profile-riwayat-pekerjaan.component';
import { PropertyBindingType } from '@angular/compiler';

describe('ProfileRiwayatPekerjaanComponent', () => {
  let component: ProfileRiwayatPekerjaanComponent;
  let fixture: ComponentFixture<ProfileRiwayatPekerjaanComponent>;
  let authService: AuthService;
  let eventEmitterService: EventEmitterService;
  let profileService: ProfileService;

  const messages = {
    default: 'Data tidak boleh kosong. Silahkan klik syarat dan ketentuan serta kebijakan privasi penggunaan aplikasi',
    success: 'Selamat anda telah terdaftar sebagai Vendor PaDi, silahkan cek email anda untuk melakukan aktivasi akun',
    disclaimer: 'Silahkan klik syarat dan ketentuan serta kebijakan privasi penggunaan aplikasi'
  };


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileRiwayatPekerjaanComponent ],
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
    fixture = TestBed.createComponent(ProfileRiwayatPekerjaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    authService = TestBed.inject(AuthService);
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

  it('test add pekerjaan basic function', () => {
    spyOn(component.pekerjaanForm, 'markAllAsTouched');
    component.submit();
    expect(component.pekerjaanForm.markAllAsTouched).toHaveBeenCalled();
  });


  it('test add pekerjaan success', () => {
    const response = {
      status: true,
      message: messages.success
    };

    let obs = new Observable((subscriber) => {
        subscriber.next(response);
        subscriber.complete();
    });

    spyOn(profileService, 'addPekerjaan').and.returnValue(obs);
    spyOn(component, 'triggerPopUp');

    component.submit();
    
    expect(component.popUpMessage).toBe(response.message);
    expect(component.redirectOnClosePopUp).toBe(true);
    expect(component.triggerPopUp).toHaveBeenCalled();
  });

  it('test add pekerjaan failed', () => {
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

    spyOn(profileService, 'addPekerjaan').and.returnValue(obs);
    spyOn(component, 'triggerPopUp');

    component.submit();
    
    expect(component.popUpMessage).toBe(response.error.message);
    expect(component.redirectOnClosePopUp).toBe(true);
    expect(component.triggerPopUp).toHaveBeenCalled();
  });


  it('test get pekerjaan success', () => {
    const response = ['hydra:member'];

    let obs = new Observable((subscriber) => {
        subscriber.next(response);
        subscriber.complete();
    });

    spyOn(profileService, 'getPekerjaan').and.returnValue(obs);

    component.getPekerjaan();
    
  });

  it('test get pekerjaan failed', () => {
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

    spyOn(profileService, 'getPekerjaan').and.returnValue(obs);
    spyOn(component, 'triggerPopUp');

    component.getPekerjaan();
    
    expect(component.popUpMessage).toBe(response.error.message);
    expect(component.redirectOnClosePopUp).toBe(true);
    expect(component.triggerPopUp).toHaveBeenCalled();
  });
});
