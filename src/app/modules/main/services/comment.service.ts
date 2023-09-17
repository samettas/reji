import { Injectable, inject } from '@angular/core';
import { CommentModel } from '../models/comment.model';
import { Firestore, doc, getDoc, setDoc ,collection, query, where, limit, collectionSnapshots} from '@angular/fire/firestore';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  isError: boolean = false;

  
  
  Form = this.fb.group({
    commentt: new FormControl('', Validators.required),
    
  });
  
  constructor(private fs :Firestore=inject(Firestore),private fb: FormBuilder) {}
  ;

  listComments(movieID:string, offset:number=0, step:number=6){
    
    const actorsReferance=collection(this.fs,'comments');
    const actorsQuery=query(actorsReferance,where('movieID','array-contains',movieID),limit(step));

    return collectionSnapshots(actorsQuery);

}
    save() {
      if (this.Form.valid)
        this.fs.register(
          this.Form.value.commentt as string,
          
        );
      else this.isError = true;
    }

  // addComment(comments: CommentModel) {
    
  //   const commentsData = { ...comments }; // comment nesnesini bir kopya olarak alıyorz
    
  //   return setDoc(doc(this.fs, 'comments/' + comments.comment+comments.name ), commentsData);
  
  
  //   }
    // async addComment(id: string) {
    //   const docRef = doc(this.fs, 'movies', id);
    //   const docSnap = await getDoc(docRef);
      
      
    //   if (docSnap.exists()) {
    //     return docSnap.data();
    //   } else {
    //     return console.log('No such document!');
    //   }
    // }
  // addComment(comment: Comment): void {
  //   this.comments.push(comment);
  // }

  

}
