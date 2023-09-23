import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootPage } from './root.page';

describe('RootPage', () => {
  let component: RootPage;
  let fixture: ComponentFixture<RootPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RootPage]
    });
    fixture = TestBed.createComponent(RootPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
