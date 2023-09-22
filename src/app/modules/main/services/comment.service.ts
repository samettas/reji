import { Injectable, inject } from '@angular/core';
<<<<<<< HEAD
import { CommentModel } from '../models/comment.model';
import { Firestore, doc, getDoc, setDoc ,collection, query, where, limit, collectionSnapshots, getDocs} from '@angular/fire/firestore';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
=======
import { Auth } from '@angular/fire/auth';
import {
  Firestore,
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from '@angular/fire/firestore';
>>>>>>> 0d13017c6d0b0e516796492349ea12005ff6efc0

@Injectable({
  providedIn: 'root',
})
export class CommentService {
<<<<<<< HEAD
  isError: boolean = false;
  async getComment() : Promise<CommentModel[]>{
    const querySnapshot = await getDocs(collection(this.fs, "comments"));
    const commentItem:CommentModel[] = [];
    querySnapshot.forEach((doc) => {
      commentItem.push(doc.data() as CommentModel);
      console.log(doc.id, " => ", doc.data());
    });
    return commentItem;
  }
  
  
  Form = this.fb.group({
    commentt: new FormControl('', Validators.required),
=======

  constructor(
    private fs: Firestore = inject(Firestore),
    private auth: Auth = inject(Auth)
  ) {}

  async listComments(id: string) {
    const q = query(
      collection(this.fs, 'comments'),
      where('movieID', '==', id)
    );

    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => doc.data());
>>>>>>> 0d13017c6d0b0e516796492349ea12005ff6efc0
    
  }
  async createComment(comment: any) {
    console.log(comment);
  
    const docRef = await addDoc(collection(this.fs, "comments"), comment);

    return docRef;
  }

  
}
