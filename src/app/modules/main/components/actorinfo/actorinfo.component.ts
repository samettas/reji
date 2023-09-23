import { Component } from '@angular/core';
import { ActorService } from '../../services/actor.service';
import { ActorModel } from '../../models/actors.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'main-actorinfo',
  templateUrl: './actorinfo.component.html',
  styleUrls: ['./actorinfo.component.scss'],
})
export class ActorinfoComponent {
  actorItems: ActorModel | any;

  constructor(
    private actorService: ActorService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const id =this.route.snapshot.paramMap.get('id') as string
    this.getActor(id);
  }
  async getActor(id: string) {
    const headerData = await this.actorService.getActor(id);
    this.actorItems = headerData;
    console.log(this.actorItems, 'a');
  }
}
