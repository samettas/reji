import { Component } from '@angular/core';

@Component({
  selector: 'main-movieinfo',
  templateUrl: './movieinfo.component.html',
  styleUrls: ['./movieinfo.component.scss']
})
export class MovieinfoComponent {
  
  movies= [
    {
      
      "id": 1,
      "title": "Greenland",
      "overview": "BİLGİ BİLGİ BİLGİ BİLGİ",
      "release_date": "2010-07-16"
  }
  
  ];
  


}
