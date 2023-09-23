import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorinfocardComponent } from './actorinfocard.component';

describe('ActorinfocardComponent', () => {
  let component: ActorinfocardComponent;
  let fixture: ComponentFixture<ActorinfocardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActorinfocardComponent]
    });
    fixture = TestBed.createComponent(ActorinfocardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
