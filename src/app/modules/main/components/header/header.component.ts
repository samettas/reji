import { Component } from '@angular/core';

@Component({
  selector: 'main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  HeaderItems = {
    navigationLeft: [
      { label: 'Filmler', link: '#' },
      { label: 'Vizyondaki Filmler', link: '#' },
      { label: 'Pek Yakında', link: '#' },
    ],
    navigationRight: [
      { label: 'Diziler', link: '#' },
      { label: 'TV Dizileri', link: '#' },
      { label: 'Platform Dizileri', link: '#' },
    ],
    buttonItems: [{ label: 'Giriş Yap / Kayıt Ol', link: '/auth/' }],
  };
}

}
