import { TestBed } from '@angular/core/testing';

import { EventEmitterService } from './event-emitter.service';

describe('EventEmitterService', () => {
  let service: EventEmitterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventEmitterService);
  });

  it('test trigger function', () => {
    spyOn(service.invokeFunction, 'emit');
    service.trigger();
    expect(service.invokeFunction.emit).toHaveBeenCalled();;
  });
});
