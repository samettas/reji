import { Component, OnInit } from '@angular/core';
import { MoviesModel } from '../../models/movies.model';
import { MoviesService } from '../../services/movies.service';


@Component({
  selector: 'main-movieinfo',
  templateUrl: './movieinfo.component.html',
  styleUrls: ['./movieinfo.component.scss']
})
export class MovieinfoComponent  {
  
  movieItems: MoviesModel | any;


  constructor(
    private moService: MoviesService,
    
  ) {}

  ngOnInit(): void {
    this.getMovie('MBKYOM32RtFN7fCUE3j2');
  }
  // async getMovieinfo(id: string) {
    
  //   const movieDatas = await this.moService.getMovieinfo(id);
  //   this.movieItemss = movieDatas;
  //   console.log(this.movieItemss, 'aasd');
  // } 
  
  async getMovie(id: string) {
    //return this.mService.getMovie(id).then(this.movieItems)
    
    const movieData = await this.moService.getMovie(id);
    this.movieItems = movieData;
    console.log(this.movieItems, 'a');
  } 
}
