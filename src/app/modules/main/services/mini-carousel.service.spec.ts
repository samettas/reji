import { TestBed } from '@angular/core/testing';

import { MiniCarouselService } from './mini-carousel.service';

describe('MiniCarouselService', () => {
  let service: MiniCarouselService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiniCarouselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
