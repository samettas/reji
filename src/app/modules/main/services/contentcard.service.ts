import { Injectable } from '@angular/core';
import { Contentcard } from '../models/contentcard.model';

@Injectable({
  providedIn: 'root'
})
export class ContentcardService {
  private film: Contentcard[] = [
   {name:'Kurtlar Vadisi Pusu',img: '../../assets/images/pusu.jpg'},
  ];
  constructor() { }
  listcard():Contentcard[]{
    return this.film;
  }
}
