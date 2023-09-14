import { Injectable,inject } from '@angular/core';
import { Actorcard } from '../models/actorcard.model';
import { Firestore,query,collectionSnapshots,collection,where,limit, startAt} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ActorcardService {
  
  private actor: Actorcard[] = [
  ];
  
  constructor(private firestore: Firestore = inject(Firestore)) { }
  
  // listcard():Actorcard[]{
  //   return this.actor.map(actor => {
  //     return {
  //       name: actor.name,
  //       img: actor.img,
  //     };
  //   });
  // }
   listActors(movieIDs:string, offset:number=0, step:number=6){
    
      const actorsReferance=collection(this.firestore,'actors');
      const actorsQuery=query(actorsReferance,where('moviesIDs','array-contains',movieIDs),limit(step));

      return collectionSnapshots(actorsQuery);

  }
}
