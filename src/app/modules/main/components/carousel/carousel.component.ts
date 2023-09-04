import { Component } from '@angular/core';

@Component({
  selector: 'main-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  carouselItems = {
    images: [
      {
        src: 'https://i.hbrcdn.com/haber/2023/07/16/oppenheimer-filmi-konusu-nedir-oppenheimer-filmi-16121915_4358_amp.jpg',
      },
      {
        src: 'https://i.hbrcdn.com/haber/2023/07/16/oppenheimer-filmi-konusu-nedir-oppenheimer-filmi-16121915_4358_amp.jpg',
      },
      {
        src: 'https://i.hbrcdn.com/haber/2023/07/16/oppenheimer-filmi-konusu-nedir-oppenheimer-filmi-16121915_4358_amp.jpg',
      },
      {
        src: 'https://i.hbrcdn.com/haber/2023/07/16/oppenheimer-filmi-konusu-nedir-oppenheimer-filmi-16121915_4358_amp.jpg',
      },
      {
        src: 'https://i.hbrcdn.com/haber/2023/07/16/oppenheimer-filmi-konusu-nedir-oppenheimer-filmi-16121915_4358_amp.jpg',
      },
    ],
    serieslist: [
      { label: 'Aksiyon', link: '#' },
      { label: 'Komedi', link: '#' },
      { label: 'Drama', link: '#' },
      { label: 'Bilim Kurgu', link: '#' },
      { label: 'Korku', link: '#' },
      { label: 'Romantik', link: '#' },
      { label: 'Macera', link: '#' },
      { label: 'Fantastik', link: '#' },
      { label: 'Animasyon', link: '#' },
      { label: 'Belgesel', link: '#' },
      { label: 'Gerilim', link: '#' },
      { label: 'Suc', link: '#' },
      { label: 'Muzikal', link: '#' },
      { label: 'Drama', link: '#' },
    ],
    movieslist: [
      { label: 'Aksiyon', link: '#' },
      { label: 'Komedi', link: '#' },
      { label: 'Drama', link: '#' },
      { label: 'Bilim Kurgu', link: '#' },
      { label: 'Korku', link: '#' },
      { label: 'Romantik', link: '#' },
      { label: 'Macera', link: '#' },
      { label: 'Fantastik', link: '#' },
      { label: 'Animasyon', link: '#' },
      { label: 'Belgesel', link: '#' },
      { label: 'Gerilim', link: '#' },
      { label: 'Suc', link: '#' },
      { label: 'Muzikal', link: '#' },
      { label: 'Drama', link: '#' },
    ],
  };
}
