import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepaswordComponent } from './updatepasword.component';

describe('UpdatepaswordComponent', () => {
  let component: UpdatepaswordComponent;
  let fixture: ComponentFixture<UpdatepaswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatepaswordComponent]
    });
    fixture = TestBed.createComponent(UpdatepaswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
