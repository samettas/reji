import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviepicturesComponent } from './moviepictures.component';

describe('MoviepicturesComponent', () => {
  let component: MoviepicturesComponent;
  let fixture: ComponentFixture<MoviepicturesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviepicturesComponent]
    });
    fixture = TestBed.createComponent(MoviepicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
