import { Component } from '@angular/core';

@Component({
  selector: 'main-actorinfo',
  templateUrl: './actorinfo.component.html',
  styleUrls: ['./actorinfo.component.scss'],
})
export class ActorinfoComponent {
  ActorItems = {
    actor: [
      {
        image: 'Filmler',
        Name: 'Margot Robbie',
        description:
          'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        dogum: '18.08.2000',
        boy: '1.82',
        esi: 'yok',
        kardesleri: 'yok',
        ebeveynleri: 'yok',
      },
    ],
  };
}
