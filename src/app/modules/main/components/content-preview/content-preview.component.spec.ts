import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPreviewComponent } from './content-preview.component';

describe('ContentPreviewComponent', () => {
  let component: ContentPreviewComponent;
  let fixture: ComponentFixture<ContentPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentPreviewComponent]
    });
    fixture = TestBed.createComponent(ContentPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
