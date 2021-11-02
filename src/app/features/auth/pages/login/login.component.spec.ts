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

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let eventEmitterService: EventEmitterService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
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
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    authService = TestBed.inject(AuthService);
    eventEmitterService = TestBed.inject(EventEmitterService);
  });

  it('test clearForm function', () => {
    spyOn(component.form, 'reset');
    component.clearForm();
    expect(component.form.reset).toHaveBeenCalled();
  });

  it('test triggerPopUp function', () => {
    spyOn(eventEmitterService, 'trigger');
    component.triggerPopUp();
    expect(eventEmitterService.trigger).toHaveBeenCalled();
  });

  it('test toggleVisibility function', () => {
    component.toggleVisibility();
    expect(component.textbox.input.nativeElement.type).toBe('text');
    component.toggleVisibility();
    expect(component.textbox.input.nativeElement.type).toBe('password');
  });

  it('test login basic function', () => {
    spyOn(component.form, 'markAllAsTouched');
    component.login();
    expect(component.form.markAllAsTouched).toHaveBeenCalled();
  });

  it('test login success', () => {
    const response = {
      status: true,
      message: "Success",
      data: {
        access_token: "sampletoken"
      }
    };

    let obs = new Observable((subscriber) => {
        subscriber.next(response);
        subscriber.complete();
    });

    spyOn(authService, 'login').and.returnValue(obs);
    spyOn(authService, 'setLoggedIn');
    spyOn(authService, 'setToken');
    spyOn(component, 'triggerPopUp');

    component.login();
    
    expect(component.isLoggedIn).toBe(true);
    expect(authService.setLoggedIn).toHaveBeenCalled();
    expect(authService.setToken).toHaveBeenCalled();
    expect(component.popUpMessage).toBe(response.message);
    expect(component.redirectOnClosePopUp).toBe(true);
    expect(component.triggerPopUp).toHaveBeenCalled();
  });

  it('test login failed', () => {
    const response = {
      ok: false,
      status: 401,
      statusText: "Unauthorized",
      error: {
        message: "Email tidak terdaftar, silahkan inputkan email benar atau lakukan registrasi jika anda belum memiliki akun.",
        status: false
      }
    };

    let obs = new Observable((subscriber) => {
        subscriber.error(response);
        subscriber.complete();
    });

    spyOn(authService, 'login').and.returnValue(obs);
    spyOn(authService, 'setLoggedIn');
    spyOn(authService, 'setToken');
    spyOn(component, 'triggerPopUp');

    component.login();
    
    expect(component.isLoggedIn).toBe(false);
    expect(component.popUpMessage).toBe(response.error.message);
    expect(component.redirectOnClosePopUp).toBe(false);
    expect(component.triggerPopUp).toHaveBeenCalled();
  });

});
