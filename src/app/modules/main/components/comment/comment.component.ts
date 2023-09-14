import { Component,OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { CommentModel } from '../../models/comment.model';


@Component({
  selector: 'comment-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit{
  comments: CommentModel|any;
  
  
  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.commentService.listComments('MBKYOM32RtFN7fCUE3j2').subscribe({
      next: (res) => {
        this.comments = res.map(r => r.data()); 
        console.log(this.comments)
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {},
    });
  }
  
  // save(value:any): any {
  //   if (this.comments) {
  //     this.commentService.addComment(this.comments)
  //     console.log(this.comments)
  //   }
    
  // }
  
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
  
  


