import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { MoviesModel } from '../../models/movies.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'main-moviepictures',
  templateUrl: './moviepictures.component.html',
  styleUrls: ['./moviepictures.component.scss']
})
export class MoviepicturesComponent implements OnInit {
  
  movieItems: MoviesModel | any;


  constructor(
    private mService: MoviesService,private route:ActivatedRoute
    
  ) {}

  ngOnInit(): void {
    const id =this.route.snapshot.paramMap.get('id') as string
    this.getMovie(id);
  }
  async getMovie(id: string) {
    //return this.mService.getMovie(id).then(this.movieItems)
    const movieData = await this.mService.getMovie(id);
    this.movieItems = movieData;
    console.log(this.movieItems, 'a');
  } 
}
