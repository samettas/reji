import { Component,OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { CommentModel } from '../../models/comment.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'comment-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit{
  comments: CommentModel|any;
  
  
  constructor(private commentService: CommentService,private route:ActivatedRoute) {}
  
 
  ngOnInit(): void {
    const id =this.route.snapshot.paramMap.get('id') as string
    this.listComment(id);
    
  }
  async listComment(id:string){
    try {
      const headerData = await this.commentService.listComments(id)
        this.comments=headerData;
        return this.comments;
    } catch (error) {
      console.error(error); 
    }
  }
  
  
  
  }
  
  


