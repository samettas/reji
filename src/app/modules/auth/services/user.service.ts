import { Injectable, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private fireStore: Firestore, private auth: Auth) {}

  //get user data
  async getUser(id: string) {
    const user = this.auth.currentUser;
    const docRef = doc(this.fireStore, 'users', user!.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return console.log('No such document!');
    }
  }
  async getComments(id: string) {
    const user = this.auth.currentUser;
    const docRef = doc(this.fireStore, 'comments', user!.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return console.log('No such document!');
    }
  }
}
