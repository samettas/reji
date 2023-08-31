import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPreviewPage } from './content-preview.page';

describe('ContentPreviewPage', () => {
  let component: ContentPreviewPage;
  let fixture: ComponentFixture<ContentPreviewPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentPreviewPage]
    });
    fixture = TestBed.createComponent(ContentPreviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
