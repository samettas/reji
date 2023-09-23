import { Injectable, inject } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { Firestore, collection, getDocs, orderBy, query } from '@angular/fire/firestore';
import { MoviesModel } from '../models/movies.model';

@Injectable({
  providedIn: 'root'
})
export class MiniCarouselService {

  constructor(private fs: Firestore = inject(Firestore)) { }

  async getCarousel(): Promise<MoviesModel[]> {
    const querySnapshot = await getDocs(collection(this.fs, "movies"));
    const movieItems: MoviesModel[] = [];
    querySnapshot.forEach((doc) => {
      movieItems.push(doc.data() as MoviesModel);
      console.log(doc.id, " => ", doc.data());
  
    });
    return movieItems;
    
  }

  async getRandomMovies(count: number): Promise<MoviesModel[]> {
    const moviesQuery = query(collection(this.fs, "movies"), orderBy('movieID'));
    const querySnapshot = await getDocs(moviesQuery);
    const movieItems: MoviesModel[] = [];

    querySnapshot.forEach((doc) => {
      if (movieItems.length < count) {
        movieItems.push(doc.data() as MoviesModel);
      }
    });

    return movieItems;
  }
}
