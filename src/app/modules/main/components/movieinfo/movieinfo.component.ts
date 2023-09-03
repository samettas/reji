import { Component, OnInit } from '@angular/core';
import { MovieService } from './service/movie.service';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'main-movieinfo',
  templateUrl: './movieinfo.component.html',
  styleUrls: ['./movieinfo.component.scss']
})
export class MovieinfoComponent {

  movies: Movie[] = [
    {
      
      "id": 1,
      "title": "Greenland",
      "overview": "BİLGİ BİLGİ BİLGİ BİLGİ",
      "release_date": "2010-07-16"
  }
  
  ];
  

  constructor(private movieService: MovieService) { }
  /*
  ngOnInit(): any {
    this.movieService.getMovies().subscribe(data => {
      this.movies = data;

      
    });
  }
  */

}