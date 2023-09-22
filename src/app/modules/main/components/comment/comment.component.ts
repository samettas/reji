import { Component,OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { CommentModel } from '../../models/comment.model';
import { ActivatedRoute } from '@angular/router';
import { addDoc, collection } from '@angular/fire/firestore';


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
  
  // async add(name: string) {

  //   name = name.trim();
    
  //   if (!name) { return; }
  
  //   this.commentService.addComment({ name:name,id:Date.now() })
  //     .then(hero => {
  //       //this.heroes.push({name,id:Date.now()}); // Kahramanı heroes listesine ekleyin
  //     })
  //     .catch(error => {
  //       console.error('Hata:', error); // Hata durumunda konsola hata mesajını yazdırın
  //     });
  // }
  // async addComment(){
    
  //   const docRef = await addDoc(collection(this.commentService, "cities"), {
  //   name: "Tokyo",
  //   country: "Japan"
  // });
  // console.log("Document written with ID: ", docRef.id);}
  
  
  
  
  }
  
  


