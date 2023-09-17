import { Injectable } from '@angular/core';
import { Footer } from '../models/footer.model';

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  private footer:Footer[]=[
    {info:'TEST TEST TEST',logo:'../../assets/images/2503508.png'},
  ]
  constructor() { }

  datafooter():Footer[]{
    return this.footer;
  }
}
