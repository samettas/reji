import { Injectable, inject } from '@angular/core';
import {  Firestore, collection, doc, getDoc, getDocs, query, where} from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';

import { CommentModel } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  

  

  constructor(private fs: Firestore = inject(Firestore)) {}

  
  

  async listComments(id:string ){

    const q = query(collection(this.fs, "comments"), where("movieID", "==", id));

    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc=>doc.data());
    querySnapshot.forEach((doc) => {
      
      console.log(doc.id, " => ", doc.data());
  });
  }

  
  // addComment(commentText: string, movieID?: string): Observable<CommentModel> {
  //   const data = {
  //     comment: commentText,
  //     movieID: movieID
  //   };
  //   return this.firestore
  //     .collection('comments')
  //     .add(data);
  // }
}
