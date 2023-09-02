import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorCardComponent } from './actor-card.component';

describe('ActorCardComponent', () => {
  let component: ActorCardComponent;
  let fixture: ComponentFixture<ActorCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActorCardComponent]
    });
    fixture = TestBed.createComponent(ActorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
