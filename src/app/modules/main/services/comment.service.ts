import { Injectable } from '@angular/core';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private comments: Comment[] = [
    { name: 'Nihat Zaman', comment: 'DENEME DENEME DENEME DENEME DENEME DENEME DENEME DENEME DENEME DENEME DENEME DENEME .', date: '23232' }
    
  ];

  constructor() {}

  getComments(): Comment[] {
    return this.comments;
  }

  // addComment(comment: Comment): void {
  //   this.comments.push(comment);
  // }

  

}
