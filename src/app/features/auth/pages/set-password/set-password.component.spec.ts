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

import { SetPasswordComponent } from './set-password.component';

describe('SetPasswordComponent', () => {
  let component: SetPasswordComponent;
  let fixture: ComponentFixture<SetPasswordComponent>;
  let eventEmitterService: EventEmitterService;

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
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    eventEmitterService = TestBed.inject(EventEmitterService);
  });

  // it('test triggerPopUp function', () => {
  //   spyOn(eventEmitterService, 'trigger');
  //   component.triggerPopUp();
  //   expect(eventEmitterService.trigger).toHaveBeenCalled();
  // });

  // it('test clearForm function', () => {
  //   spyOn(component.formSetPassword, 'reset');
  //   component.clearForm();
  //   expect(component.formSetPassword.reset).toHaveBeenCalled();
  // });

  // it('test toggleVisibility function', () => {
  //   component.toggleVisibility();
  //   expect(component.textbox.input.nativeElement.type).toBe('text');
  //   component.toggleVisibility();
  //   expect(component.textbox.input.nativeElement.type).toBe('password');
  // });

  // it('test toggleVisibilityConfirm function', () => {
  //   component.toggleVisibilityConfirm();
  //   expect(component.textbox.input.nativeElement.type).toBe('text');
  //   component.toggleVisibilityConfirm();
  //   expect(component.textbox.input.nativeElement.type).toBe('password');
  // });

});
