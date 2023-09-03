import { Component } from '@angular/core';

@Component({
  selector: 'comment-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  commentItems = [
    {
      name: 'Nihat Zaman',
      comment: ' Deneme Deneme Deneme Deneme Deneme Deneme Deneme Deneme Deneme Deneme Deneme Deneme',
      date: 'March 30, 2021'
    },
    
  ];

} 
