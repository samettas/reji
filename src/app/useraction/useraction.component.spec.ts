import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseractionComponent } from './useraction.component';

describe('UseractionComponent', () => {
  let component: UseractionComponent;
  let fixture: ComponentFixture<UseractionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UseractionComponent]
    });
    fixture = TestBed.createComponent(UseractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
