import { Injectable } from '@angular/core';
import { Moviepictures } from '../models/moviepictures.model';

@Injectable({
  providedIn: 'root'
})
export class MoviepicturesService {

  private filmpictures: Moviepictures[] = [
    {img: '../../assets/images/kareler.png'},
   ];
   constructor() { }

   listcard():Moviepictures[]{
     return this.filmpictures;
   }
}
