import { Component } from '@angular/core';
import { HeaderModel } from '../../models/header.model';
import { HeaderService } from '../../services/header.service';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  headerItem: HeaderModel | any;

  constructor(private headerService: HeaderService, public auth: AuthService) {}

  ngOnInit(): void {
    this.getHeader();
  }

  async getHeader() {
    const headerData = await this.headerService.getHeader();
    this.headerItem = headerData;
    console.log(this.headerItem);
  }
}
