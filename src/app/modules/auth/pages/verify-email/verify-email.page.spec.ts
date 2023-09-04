import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyEmailPage } from './verify-email.page';

describe('VerifyEmailPage', () => {
  let component: VerifyEmailPage;
  let fixture: ComponentFixture<VerifyEmailPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifyEmailPage]
    });
    fixture = TestBed.createComponent(VerifyEmailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
