import { Component } from '@angular/core';
import { ContentcardService } from '../../services/contentcard.service';
import { Contentcard } from '../../models/contentcard.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'main-contentcard',
  templateUrl: './contentcard.component.html',
  styleUrls: ['./contentcard.component.scss']
})
export class ContentcardComponent {
  contentcard: Contentcard[]=[];

  constructor(private contentcardService:ContentcardService,private route:ActivatedRoute) { }

    ngOnInit() {

      const id =this.route.snapshot.paramMap.get('id') as string

      this.contentcardService.listActors(id).subscribe({
      next: (res) => {

        this.contentcard = res.map(r => r.data()); 
        
       console.log(this.contentcard)
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {},
    });
      }
}
