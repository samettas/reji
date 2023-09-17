
import { Injectable, Query, inject } from '@angular/core';
import { Firestore, collection, collectionSnapshots, where,query,doc,getDoc } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private fs: Firestore = inject(Firestore)) {}

  async getMovie(id: string) {
    const docRef = doc(this.fs, 'movies', id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return console.log('No such document!');
    }
  }
  
  // async getMovieinfo(id: string) {
  //   const docRefs = doc(this.fs, 'movies', id);
  //   const docSnaps = await getDoc(docRefs);
    
  //   if (docSnaps.exists()) {
  //     return docSnaps.data();
  //   } else {
  //     return console.log('No such document!');
  //   }
  // }
  
  // async getActor(id :string){
  //   const docRefs = doc(this.fs, 'actors', id);
  //   const docSnaps = await getDoc(docRefs);
    
  //   if (docSnaps.exists()) {
  //     return docSnaps.data();
  //   } else {
  //     return console.log('No such document!');
  //   }
  // }

  
  
}
