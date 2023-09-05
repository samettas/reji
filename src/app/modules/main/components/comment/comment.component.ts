import { Component,OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';


@Component({
  selector: 'comment-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit{
  comments: any[] = [];

  
  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.comments=this.commentService.getComments();
  }
  
  // async add(name: string) {
  //   name = name.trim();
  //   if (!name) { return; }
  
  //   this.commentService.addcomment({ name:name,id:Date.now() } as Hero)
  //     .then(hero => {
        
  //     })
  //     .catch(error => {
  //       console.error('Hata:', error); 
  //     });
  // }
  
  }
  
  


