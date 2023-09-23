import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersactionsComponent } from './usersactions.component';

describe('UsersactionsComponent', () => {
  let component: UsersactionsComponent;
  let fixture: ComponentFixture<UsersactionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersactionsComponent]
    });
    fixture = TestBed.createComponent(UsersactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
