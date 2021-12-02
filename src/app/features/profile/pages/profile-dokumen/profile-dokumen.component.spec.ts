import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';

import { ProfileDokumenComponent } from './profile-dokumen.component';

describe('ProfileDokumenComponent', () => {
  let component: ProfileDokumenComponent;
  let fixture: ComponentFixture<ProfileDokumenComponent>;
  let event: EventEmitterService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileDokumenComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDokumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    event = TestBed.inject(EventEmitterService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test close function', () => {
    component.close();
    expect(component.opened).toBeFalsy;
  });

  it('test open function', () => {
    component.open();
    expect(component.opened).toBeTruthy;
  });

  it('test trigger function', () => {
    spyOn(event, 'trigger');
    component.triggerPopUp();
    expect(event.trigger).toHaveBeenCalled;
  });

  it('test submit function', () => {
    component.submit();
  });

});
