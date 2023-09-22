import { Injectable, inject } from '@angular/core';
import { Contentcard } from '../models/contentcard.model';
import { Firestore, collection, collectionSnapshots, limit, query, where } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContentcardService {
  
  constructor(private firestore: Firestore = inject(Firestore)) { }
  
   listActors(id:string, offset:number=0, step:number=6){
    
      const actorsReferance=collection(this.firestore,'movies');

      const actorsQuery=query(actorsReferance,where('actorIDs','array-contains',id),limit(step));

      return collectionSnapshots(actorsQuery);

  }
}
