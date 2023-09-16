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
export class CarouselService {
  constructor(private fs: Firestore = inject(Firestore)) {}
  async getCarousel() {
    const docRef = doc(this.fs, 'components', 'carousel');
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return console.log('No such document!');
    }
  }
}
