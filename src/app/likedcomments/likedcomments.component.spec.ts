import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedcommentsComponent } from './likedcomments.component';

describe('LikedcommentsComponent', () => {
  let component: LikedcommentsComponent;
  let fixture: ComponentFixture<LikedcommentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LikedcommentsComponent]
    });
    fixture = TestBed.createComponent(LikedcommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
