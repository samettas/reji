import { Component, inject } from '@angular/core';
import { CommentItem, SidebarModel } from '../../models/sidebar.model';
import { Firestore } from 'firebase/firestore';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'main-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent   {
  movieItem: SidebarModel | any;

  constructor(private sidebarService : SidebarService) {}

  ngOnInit(): void {
    this.getSidebar();
  }

  async getSidebar() {
    try {
      this.movieItem = await this.sidebarService.getSidebar();
      console.log(this.movieItem);
    } catch (error) {
      console.error('Error getting sidebar:', error);
    }
  }
}
