import { Component } from '@angular/core';
import { MoviepicturesService } from '../../services/moviepictures.service';
import { Moviepictures } from '../../models/moviepictures.model';

@Component({
  selector: 'main-moviepictures',
  templateUrl: './moviepictures.component.html',
  styleUrls: ['./moviepictures.component.scss']
})
export class MoviepicturesComponent {
  moviep: Moviepictures[]=[];

  constructor(private movieservice:MoviepicturesService) { }

    ngOnInit() {
      this.moviep=this.movieservice.listcard()
      }

}
