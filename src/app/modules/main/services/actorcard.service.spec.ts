import { TestBed } from '@angular/core/testing';

import { ActorcardService } from './actorcard.service';

describe('ActorcardService', () => {
  let service: ActorcardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActorcardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
