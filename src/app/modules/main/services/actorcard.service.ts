import { Injectable } from '@angular/core';
import { Actorcard } from '../models/actorcard.model';

@Injectable({
  providedIn: 'root'
})
export class ActorcardService {

  private actor: Actorcard[] = [
   {name:'Nihat Zaman',img: '../../assets/images/oyuncu.jpg'},
  ];
  constructor() { }
  
  listcard():Actorcard[]{
    return this.actor.map(actor => {
      return {
        name: actor.name,
        img: actor.img,
      };
    });
  }
}
