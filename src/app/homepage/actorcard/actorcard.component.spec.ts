import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorcardComponent } from './actorcard.component';

describe('ActorcardComponent', () => {
  let component: ActorcardComponent;
  let fixture: ComponentFixture<ActorcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActorcardComponent]
    });
    fixture = TestBed.createComponent(ActorcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
