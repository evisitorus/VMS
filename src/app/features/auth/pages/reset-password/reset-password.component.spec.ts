import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from '@progress/kendo-angular-inputs';
import { Observable } from 'rxjs';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { AuthService } from 'src/app/core/services/auth.service';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';
import { AuthModule } from '../../auth.module';

import { ResetPasswordComponent } from './reset-password.component';

describe('ResetPasswordComponent', () => {
  let component: ResetPasswordComponent;
  let fixture: ComponentFixture<ResetPasswordComponent>;
  let eventEmitterService: EventEmitterService;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetPasswordComponent ],
      imports: [
        CoreModule,
        SharedModule,
        AuthModule,
        AppRoutingModule
      ],
      providers: []
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    eventEmitterService = TestBed.inject(EventEmitterService);
    authService = TestBed.inject(AuthService);
  });

  it('test triggerPopUp funtion', () => {
    spyOn(eventEmitterService, 'trigger');
    component.triggerPopUp();
    expect(eventEmitterService.trigger).toHaveBeenCalled();
  });

  it('test toggleVisibility function', () => {
    component.toggleVisibility('newPass');
    expect(component.newPass.input.nativeElement.type).toBe('text');
    component.toggleVisibility('newPass');
    expect(component.newPass.input.nativeElement.type).toBe('password');

    component.toggleVisibility('retypePass');
    expect(component.retypePass.input.nativeElement.type).toBe('text');
    component.toggleVisibility('retypePass');
    expect(component.retypePass.input.nativeElement.type).toBe('password');
  });

  it('test onSubmit function success', () => {
    const data = {
      status: true,
      message: "Password has been updated",
    };

    let res = new Observable((subscriber) => {
        subscriber.next(data);
        subscriber.complete();
    });

    console.log(component.form.value);

    spyOn(authService, 'resetPassword').and.returnValue(res);

    component.onSubmit();

    expect(component.popUpMessage).toBe(data.message);
    expect(component.redirectOnClosePopUp).toBeTrue();
  });

  it('test onSubmit function failed', () => {
    const data = {
      status: true,
      error: {
        message: "Update Password Failed",
      }
    };

    let res = new Observable((subscriber) => {
        subscriber.error(data);
        subscriber.complete();
    });

    spyOn(authService, 'resetPassword').and.returnValue(res);
    spyOn(component, 'triggerPopUp');

    component.onSubmit();

    expect(component.popUpMessage).toBe(data.error.message);
    expect(component.redirectOnClosePopUp).toBeFalse();
    expect(component.triggerPopUp).toHaveBeenCalled();
  });

  it('test MustMatch function', () => {
    let formGroup: FormGroup;
    let formBuilder: FormBuilder = new FormBuilder;

    formGroup = formBuilder.group({
      form1: ['', Validators.required],
      form2: ['', Validators.required]
    },{
      validator: component.MustMatch('form1', 'form2')
    });
  });

});
