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

import { RegisterComponent } from './register.component';


describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let authService: AuthService;
  let eventEmitterService: EventEmitterService;



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
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
    fixture = TestBed.createComponent(RegisterComponent);
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


  it('test onReset function', () => {
    spyOn(component.registerForm, 'reset');
    component.onReset();
    expect(component.registerForm.reset).toHaveBeenCalled();
  });

  it('test register basic function', () => {
    spyOn(component.registerForm, 'markAllAsTouched');
    component.register();
    expect(component.registerForm.markAllAsTouched).toHaveBeenCalled();
  });


  it('test register success', () => {
    const response = {
      status: true,
      message: "Registrasi sukses & email aktivasi terkirim",
      data: {
        namaPerusahaan: "PT. Abadi Jaya Sentosa Selalu"
      }
    };

    let obs = new Observable((subscriber) => {
        subscriber.next(response);
        subscriber.complete();
    });

    spyOn(authService, 'register').and.returnValue(obs);
    spyOn(component, 'triggerPopUp');

    component.register();
    
    expect(component.submitted).toBe(true);
    expect(component.popUpMessage).toBe(response.message);
    expect(component.redirectOnClosePopUp).toBe(true);
    expect(component.triggerPopUp).toHaveBeenCalled();
  });

  it('test register failed', () => {
    const response = {
      ok: false,
      status: 400,
      error: {
        message: "Pastikan semua data terisi & sesuai format",
        status: false
      }
    };

    let obs = new Observable((subscriber) => {
        subscriber.error(response);
        subscriber.complete();
    });

    spyOn(authService, 'register').and.returnValue(obs);
    spyOn(component, 'triggerPopUp');

    component.register();
    
    expect(component.isLoggedIn).toBe(false);
    expect(component.popUpMessage).toBe(response.error.message);
    expect(component.redirectOnClosePopUp).toBe(false);
    expect(component.triggerPopUp).toHaveBeenCalled();
  });

});
