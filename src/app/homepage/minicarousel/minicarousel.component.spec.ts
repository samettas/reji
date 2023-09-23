import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinicarouselComponent } from './minicarousel.component';

describe('MinicarouselComponent', () => {
  let component: MinicarouselComponent;
  let fixture: ComponentFixture<MinicarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinicarouselComponent]
    });
    fixture = TestBed.createComponent(MinicarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
