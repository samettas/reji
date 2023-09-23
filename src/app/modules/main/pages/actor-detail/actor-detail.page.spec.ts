import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorDetailPage } from './actor-detail.page';

describe('ActorDetailPage', () => {
  let component: ActorDetailPage;
  let fixture: ComponentFixture<ActorDetailPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActorDetailPage]
    });
    fixture = TestBed.createComponent(ActorDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
