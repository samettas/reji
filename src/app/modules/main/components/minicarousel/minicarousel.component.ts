import { Component } from '@angular/core';
import { MoviesModel } from '../../models/movies.model';
import { MiniCarouselService } from '../../services/mini-carousel.service';

@Component({
  selector: 'main-minicarousel',
  templateUrl: './minicarousel.component.html',
  styleUrls: ['./minicarousel.component.scss']
})
export class MinicarouselComponent {
  movieItem: MoviesModel |any;

  constructor(private miniCarouselService : MiniCarouselService){}
  
  ngOnInit(): void {
    
    this.getCarousel();
  }

  async getCarousel() {
    try {
      this.movieItem = await this.miniCarouselService.getRandomMovies(4);
      console.log(this.movieItem);
    } catch (error) {
      console.error('Error getting preview:', error);
    }
  }
}


