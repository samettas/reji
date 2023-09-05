import { TestBed } from '@angular/core/testing';

import { ContentcardService } from './contentcard.service';

describe('ContentcardService', () => {
  let service: ContentcardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentcardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
