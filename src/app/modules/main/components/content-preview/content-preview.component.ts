import { Component, OnInit } from '@angular/core';
import { Preview } from '../../models/preview.model';

@Component({
  selector: 'app-content-preview',
  templateUrl: './content-preview.component.html',
  styleUrls: ['./content-preview.component.scss']
})

export class ContentPreviewComponent implements OnInit {
  
  generateEmptyArray(score:number,solid:boolean){
    return solid ? new Array(score) : new Array(5-score);
  }
  constructor() { }
  ngOnInit(): void {

  }
  title = "Movie List"
  movies: Preview[] = [
    { name: "Shawshank Redemption", year: 1994, duration: "2h 22m", score: 4 , imageUrl:"../../../../../assets/images/shawshank-redemption.jpg"},
    { name: "The Godfather", year: 1972, duration: "2h 55m", score: 4 , imageUrl:"../../../../../assets/images/TheGodfather.jpeg" },
    { name: "The Dark Knight", year: 2008, duration: "2h 32m", score: 4, imageUrl:"../../../../../assets/images/TheDarkKnight.jpg" },
    { name: "The Godfather Part II", year: 1974, duration: "3h 22m", score: 4, imageUrl:"../../../../../assets/images/TheGodfatherPartII.jpg" },
    { name: "12 Angry Men", year: 1957, duration: "1h 36m", score: 4, imageUrl:"../../../../../assets/images/12AngryMen.jpg" },
    { name: "Schindler's List", year: 1993, duration: "3h 15m", score: 3, imageUrl:"../../../../../assets/images/Schindler'sList.jpg" }
  ]
}
