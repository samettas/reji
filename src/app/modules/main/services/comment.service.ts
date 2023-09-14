import { Injectable, inject } from '@angular/core';
import { CommentModel } from '../models/comment.model';
import { Firestore, doc, getDoc, setDoc ,collection, query, where, limit, collectionSnapshots} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  

  constructor() {}
  private fs :Firestore=inject(Firestore);

  listComments(movieID:string, offset:number=0, step:number=6){
    
    const actorsReferance=collection(this.fs,'comments');
    const actorsQuery=query(actorsReferance,where('movieID','array-contains',movieID),limit(step));

    return collectionSnapshots(actorsQuery);

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
