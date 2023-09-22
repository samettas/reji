import { Component, inject } from '@angular/core';
import { CommentItem, SidebarModel } from '../../models/sidebar.model';
import { Firestore } from 'firebase/firestore';
import { SidebarService } from '../../services/sidebar.service';
import { CommentService } from '../../services/comment.service';
import { CommentModel } from '../../models/comment.model';

@Component({
  selector: 'main-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent   {
  movieItem: SidebarModel | any;
  commentItem : CommentModel | any;
  constructor(private sidebarService : SidebarService, private commentService : CommentService ) {}
  ngOnInit(): void {
    this.getSidebar();
    this.getComment();
  }

  async getSidebar() {
    try {
      this.movieItem = await this.sidebarService.getSidebar();
      console.log(this.movieItem);
    } catch (error) {
      console.error('Error getting sidebar:', error);
    }
  }

  async getComment() {
    try {
      this.commentItem = await this.commentService.getComment(); 
      console.log(this.commentItem);
    } catch (error) {
      console.error('Error getting sidebar:', error);
    }
  }
}
