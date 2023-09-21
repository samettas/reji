import { Injectable, inject } from '@angular/core';
import { Firestore, collection, doc, getDoc, getDocs } from '@angular/fire/firestore';
import { MoviesModel } from '../models/movies.model';

@Injectable({
  providedIn: 'root'
})
export class ContentPreviewService {

  constructor(private fs: Firestore = inject(Firestore)) { }

//   async getPreview() {
//     const querySnapshot = await getDocs(collection(this.fs, "movies"));
//     querySnapshot.forEach((doc) => {
//     console.log(doc.id, " => ", doc.data());

// });
//   }
async getPreview(): Promise<MoviesModel[]> {
  const querySnapshot = await getDocs(collection(this.fs, "movies"));
  const movieItems: MoviesModel[] = [];
  querySnapshot.forEach((doc) => {
    movieItems.push(doc.data() as MoviesModel);
    // console.log(doc.id, " => ", doc.data());

  });
  return movieItems;
  
}


  
}

