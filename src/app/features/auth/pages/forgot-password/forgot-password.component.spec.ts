import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@progress/kendo-angular-inputs';
import { Observable } from 'rxjs';
import { CoreModule } from 'src/app/core/core.module';
import { AuthService } from 'src/app/core/services/auth.service';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';
import { dictionary } from 'src/app/dictionary/dictionary';

import { ForgotPasswordComponent } from './forgot-password.component';

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;
  let eventEmitterService: EventEmitterService;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotPasswordComponent ],
      imports: [
        CoreModule,
        SharedModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    eventEmitterService = TestBed.inject(EventEmitterService);
    authService = TestBed.inject(AuthService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test triggerPopUp function', () => {
    spyOn(eventEmitterService, 'trigger');
    component.triggerPopUp();
    expect(eventEmitterService.trigger).toHaveBeenCalled();
  });

  it('test sendEmail function success', () => {
    const data = {
      status: true,
      message: "Periksa email Anda untuk mengatur ulang kata sandi Anda. Jika tidak muncul dalam beberapa menit, periksa folder spam Anda.",
    };

    let response = new Observable((subscriber) => {
      subscriber.next(data);
      subscriber.complete();
    });
    
    spyOn(authService, 'forgotPassword').and.returnValue(response);
    
    component.sendEmail();

    expect(component.popUpMessage).toBe(data.message);
  });

  it('test sendEmail function failed', () => {
    const data = {
      error: {
        message: dictionary.send_email_failed,
      }
    };

    let response = new Observable((subscriber) => {
      subscriber.error(data);
      subscriber.complete();
    });
    
    spyOn(authService, 'forgotPassword').and.returnValue(response);
    
    component.sendEmail();

    expect(component.popUpMessage).toBe(data.error.message);
  });

});
