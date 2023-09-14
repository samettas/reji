import { Component } from '@angular/core';
import { SidebarMovie,CommentItem } from '../../models/sidebar.model';

@Component({
  selector: 'main-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent   {
  constructor() {}
  title="Sidebar Movie List"
  movies: SidebarMovie[] = [
    { name: "Shawshank Redemption", imageUrl:"../../../../../assets/images/shawshank-redemption.jpg"},
    { name: "The Godfather", imageUrl:"../../../../../assets/images/TheGodfather.jpeg" },
    { name: "The Dark Knight",  imageUrl:"../../../../../assets/images/TheDarkKnight.jpg" },
    { name: "The Godfather Part II",  imageUrl:"../../../../../assets/images/TheGodfatherPartII.jpg" },
    { name: "12 Angry Men", imageUrl:"../../../../../assets/images/12AngryMen.jpg" },
  ]
  comments: CommentItem[] = [
    { comment: "1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", imageUrl:"../../../../../assets/images/profile.png"},
    { comment: "2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", imageUrl:"../../../../../assets/images/profile.png"},
    { comment: "3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", imageUrl:"../../../../../assets/images/profile.png"},
    { comment: "4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", imageUrl:"../../../../../assets/images/profile.png"},
    { comment: "5Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", imageUrl:"../../../../../assets/images/profile.png"}
  ]
  
}
