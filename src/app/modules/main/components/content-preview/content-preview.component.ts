import { Component, OnInit } from '@angular/core';
import { ContentPreviewService } from '../../services/content-preview.service';
import { MoviesModel } from '../../models/movies.model';

@Component({
  selector: 'app-content-preview',
  templateUrl: './content-preview.component.html',
  styleUrls: ['./content-preview.component.scss']
})

export class ContentPreviewComponent {
  movieItem: MoviesModel | any;
  
  generateEmptyArray(score:number,solid:boolean){
    return solid ? new Array(score) : new Array(5-score);
  }
  constructor(private previewService : ContentPreviewService) { }
  
   ngOnInit(): void {
    this.getPreview();
  }
  async getPreview() {
    try {
      this.movieItem = await this.previewService.getPreview();
      // console.log(this.movieItem);
    } catch (error) {
      console.error('Error getting preview:', error);
    }
  }
  async docID(id:string){
    try {
      this.movieItem = await this.previewService.getPreview();
      id=this.movieItem.id;
      console.log(id);
    } catch (error) {
      console.error('Error getting preview:', error);
    }
  }
 
}










