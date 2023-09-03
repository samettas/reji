import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorinfoComponent } from './actorinfo.component';

describe('ActorinfoComponent', () => {
  let component: ActorinfoComponent;
  let fixture: ComponentFixture<ActorinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActorinfoComponent]
    });
    fixture = TestBed.createComponent(ActorinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
