import { Component } from '@angular/core';
import { CarouselModel } from '../../models/carousel.model';
import { CarouselService } from '../../services/carousel.service';

@Component({
  selector: 'main-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  carouselItem: CarouselModel | any;

  constructor(private carouselService: CarouselService) {}

  ngOnInit(): void {
    this.getCarousel();
  }

  async getCarousel() {
    const headerData = await this.carouselService.getCarousel();
    this.carouselItem = headerData;
    console.log(this.carouselItem);
  }
}
