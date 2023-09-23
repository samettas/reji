import { Component, OnInit } from '@angular/core';
import { MoviesModel } from '../../models/movies.model';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'main-movieinfo',
  templateUrl: './movieinfo.component.html',
  styleUrls: ['./movieinfo.component.scss']
})
export class MovieinfoComponent  {
  
  movieItems: MoviesModel | any;


  constructor(
    private moService: MoviesService,private route:ActivatedRoute
    
  ) {}

  ngOnInit(): void {
    const id =this.route.snapshot.paramMap.get('id') as string
    this.getMovie(id);
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
