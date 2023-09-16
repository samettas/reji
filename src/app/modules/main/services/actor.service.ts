import { Injectable, inject } from '@angular/core';

import {
  Firestore,
  collection,
  collectionData,
  setDoc,
  doc,
  deleteDoc,
  updateDoc,
  collectionSnapshots,
  query,
  where,
  documentId,
  getDoc,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class ActorService {
  constructor(private fs: Firestore = inject(Firestore)) {}

  async getActor(id: string) {
    const docRef = doc(this.fs, 'actors', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return console.log('No such document!');
    }
  }
}
