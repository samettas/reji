import { Injectable, inject } from '@angular/core';
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

@Injectable({
  providedIn: 'root',
})
export class CommentService {

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
    
  }
  async createComment(comment: any) {
    console.log(comment);
  
    const docRef = await addDoc(collection(this.fs, "comments"), comment);

    return docRef;
  }

  
}
