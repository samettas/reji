import { Component } from '@angular/core';
import { FooterService } from '../../services/footer.service';
import { Footer } from '../../models/footer.model';

@Component({
  selector: 'main-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footerr:Footer[]=[];

  constructor(private footerservice:FooterService){}

  ngOnInit() {
    this.footerr=this.footerservice.datafooter()
    }

}
