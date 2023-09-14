import { Component, OnInit } from '@angular/core';
import { ActorcardService } from '../../services/actorcard.service';
import { Actorcard } from '../../models/actorcard.model';
import { MoviesModel } from '../../models/movies.model';
import { MoviesService } from '../../services/movies.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'main-actorcard',
  templateUrl: './actorcard.component.html',
  styleUrls: ['./actorcard.component.scss']
})
export class ActorcardComponent {
  

   
   actors: Actorcard |any;

  constructor(
    private actorsService: ActorcardService,
    
  ) {}
 
  
  ngOnInit(): void {
    this.actorsService.listActors('MBKYOM32RtFN7fCUE3j2').subscribe({
      next: (res) => {
        this.actors = res.map(r => r.data()); // Veriyi actors değişkenine atar
        console.log(this.actors[0].image);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {},
    });
  }
  
  // actorsSub.subscribe((actorRes)=>{
      //   this.actors=actorRes.map((actor)=>actor.data());
       
      // })


  // async getMovie(id: string) {
  //   //return this.mService.getMovie(id).then(this.movieItems)
  //   const movieData = await this.mService.getMovie(id);
  //   this.movieItemss = movieData;
    
  // } 
  // async getMoviewithactor(ids: string){
  //   const moviesCollection = await this.mService.getMovie(ids);

  //   const actorsCollection = await this.mService.getActor(ids);
  //   const movie = await moviesCollection.doc('MBKYOM32RtFN7fCUE3j2').get();

  //   const query = actorsCollection
  //   .where('id', 'in', movie.data().actorsId);

  //   const results = await query.get();
  // }

  
  
}
