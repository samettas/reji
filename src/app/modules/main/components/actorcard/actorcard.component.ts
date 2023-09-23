import { Component, OnInit } from '@angular/core';
import { ActorcardService } from '../../services/actorcard.service';
import { Actorcard } from '../../models/actorcard.model';
import { MoviesModel } from '../../models/movies.model';
import { MoviesService } from '../../services/movies.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'main-actorcard',
  templateUrl: './actorcard.component.html',
  styleUrls: ['./actorcard.component.scss']
})
export class ActorcardComponent {
  

   
   actors: Actorcard|any;

  constructor(
    private actorsService: ActorcardService,private route :ActivatedRoute
    
  ) {}
 
  
  ngOnInit(): void {
    const id =this.route.snapshot.paramMap.get('id') as string

    this.actorsService.listActors(id).subscribe({
      next: (res) => {
        this.actors = res.map(r => r.data()); // Veriyi actors değişkenine atar
       console.log(this.actors)
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {},
    });
  }
  
  
  
  
}
