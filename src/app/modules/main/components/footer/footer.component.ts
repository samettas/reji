import { Component } from '@angular/core';
import { FooterService } from '../../services/footer.service';
import { Footer } from '../../models/footer.model';

@Component({
  selector: 'main-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  
  footerItem: Footer |any;

  constructor(private footerService: FooterService) {}

  ngOnInit(): void {
    this.getFooter();
  }

  async getFooter() {
    const headerData = await this.footerService.getFooter();
    this.footerItem = headerData;
    console.log(this.footerItem);
  }
}
