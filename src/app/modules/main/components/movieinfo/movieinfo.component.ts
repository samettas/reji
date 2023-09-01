import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'main-movieinfo',
  templateUrl: './movieinfo.component.html',
  styleUrls: ['./movieinfo.component.scss']
})
export class MovieinfoComponent implements OnInit{

  movies: Movie[] = [];
  currentMovieIndex: number = 0;

  constructor(private movieService: MovieService) { }

  ngOnInit(): any {
    this.movieService.getMovies().subscribe(data => {
      this.movies = data;

      
    });
  }
  
  showNextMovie(): void {
    if (this.currentMovieIndex < this.movies.length - 1) {
      this.currentMovieIndex++;
    }
  }

  showPreviousMovie(): void {
    if (this.currentMovieIndex > 0) {
      this.currentMovieIndex--;
    }
  }

}