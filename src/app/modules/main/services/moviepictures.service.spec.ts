import { TestBed } from '@angular/core/testing';

import { MoviepicturesService } from './moviepictures.service';

describe('MoviepicturesService', () => {
  let service: MoviepicturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviepicturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
