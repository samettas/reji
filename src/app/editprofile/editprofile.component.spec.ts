import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprofileComponent } from './editprofile.component';

describe('EditprofileComponent', () => {
  let component: EditprofileComponent;
  let fixture: ComponentFixture<EditprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditprofileComponent]
    });
    fixture = TestBed.createComponent(EditprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
