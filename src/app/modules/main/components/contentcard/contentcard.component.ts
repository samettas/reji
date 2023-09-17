import { Component } from '@angular/core';
import { ContentcardService } from '../../services/contentcard.service';
import { Contentcard } from '../../models/contentcard.model';

@Component({
  selector: 'main-contentcard',
  templateUrl: './contentcard.component.html',
  styleUrls: ['./contentcard.component.scss']
})
export class ContentcardComponent {
  contentcard: Contentcard[]=[];

  constructor(private contentcardService:ContentcardService) { }

    ngOnInit() {
      this.contentcard=this.contentcardService.listcard()
      }
}
