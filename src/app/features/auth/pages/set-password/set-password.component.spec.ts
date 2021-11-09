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
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';
import { AuthRoutingModule } from '../../auth-routing.module';
import { RouterTestingModule } from "@angular/router/testing";

import { SetPasswordComponent } from './set-password.component';

describe('SetPasswordComponent', () => {
  let component: SetPasswordComponent;
  let fixture: ComponentFixture<SetPasswordComponent>;
  let eventEmitterService: EventEmitterService;
  let authService: AuthService;

  const messages = {
    success: '\r\n Selamat anda telah melakukan aktivasi akun, silahkan masuk ke halaman VMS untuk melengkapi profil anda',
    default: 'Periksa kembali data Anda.',
    wrongPattern: 'Maaf, password anda tidak sesuai. Silahkan ulangi input password!'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetPasswordComponent ],
      imports: [
        CommonModule,
        AuthRoutingModule,
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
        RouterTestingModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    authService = TestBed.inject(AuthService);
    eventEmitterService = TestBed.inject(EventEmitterService);

  });

  it('test triggerPopUp function', () => {
    spyOn(eventEmitterService, 'trigger');
    component.triggerPopUp();
    expect(eventEmitterService.trigger).toHaveBeenCalled();
  });

  it('test clearForm function', () => {
    spyOn(component.formSetPassword, 'reset');
    component.clearForm();
    expect(component.formSetPassword.reset).toHaveBeenCalled();
  });

  it('test toggleVisibility function', () => {
    expect(component.textbox.input.nativeElement.type).toBe('password');
    component.toggleVisibility();
    expect(component.textbox.input.nativeElement.type).toBe('text');
  });

  it('test toggleVisibilityConfirm function', () => {
    expect(component.textbox1.input.nativeElement.type).toBe('password');
    component.toggleVisibilityConfirm();
    expect(component.textbox1.input.nativeElement.type).toBe('text');
  });

  it('test activate basic function', () => {
    spyOn(component.formSetPassword, 'markAllAsTouched');
    component.activate();
    expect(component.formSetPassword.markAllAsTouched).toHaveBeenCalled();
  });


  it('test activate success', () => {
    const response = {
      status: true,
      message: messages.success
    };

    const regFormValid = {};

    let obs = new Observable((subscriber) => {
        subscriber.next(response);
        subscriber.complete();
    });

    spyOn(authService, 'setPassword').and.returnValue(obs);
    spyOn(component, 'triggerPopUp');

    component.activate();
    
    expect(component.submitted).toBe(true);
    expect(component.popUpMessage).toBe(response.message);
    expect(component.redirectOnClosePopUp).toBe(true);
    expect(component.triggerPopUp).toHaveBeenCalled();
  });


  it('test setPassword failed', () => {
    const response = {
      ok: false,
      status: 400,
      error: {
        message: messages.default,
        status: false
      }
    };

    let obs = new Observable((subscriber) => {
        subscriber.error(response);
        subscriber.complete();
    });

    spyOn(authService, 'setPassword').and.returnValue(obs);
    spyOn(component, 'triggerPopUp');

    component.activate();
    
    expect(component.popUpMessage).toBe(response.error.message);
    expect(component.redirectOnClosePopUp).toBe(false);
    expect(component.triggerPopUp).toHaveBeenCalled();
  });


});
