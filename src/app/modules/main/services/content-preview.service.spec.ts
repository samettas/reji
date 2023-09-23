import { TestBed } from '@angular/core/testing';

import { ContentPreviewService } from './content-preview.service';

describe('ContentPreviewService', () => {
  let service: ContentPreviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentPreviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
