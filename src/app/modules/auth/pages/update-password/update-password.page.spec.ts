import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePasswordPage } from './update-password.page';

describe('UpdatePasswordPage', () => {
  let component: UpdatePasswordPage;
  let fixture: ComponentFixture<UpdatePasswordPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePasswordPage]
    });
    fixture = TestBed.createComponent(UpdatePasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
