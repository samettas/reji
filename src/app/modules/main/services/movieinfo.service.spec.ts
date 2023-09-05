import { TestBed } from '@angular/core/testing';

import { MovieinfoService } from './movieinfo.service';

describe('MovieinfoService', () => {
  let service: MovieinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
