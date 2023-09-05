import { Component, OnInit } from '@angular/core';
import { ActorcardService } from '../../services/actorcard.service';
import { Actorcard } from '../../models/actorcard.model';

@Component({
  selector: 'main-actorcard',
  templateUrl: './actorcard.component.html',
  styleUrls: ['./actorcard.component.scss']
})
export class ActorcardComponent implements OnInit{
  images: Actorcard[] = [];


  constructor(private actorcardService:ActorcardService) { }

  ngOnInit() {
    this.images=this.actorcardService.listcard()
    }
  
}
