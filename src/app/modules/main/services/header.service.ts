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

@Injectable({ providedIn: 'root' })
export class HeaderService {
  constructor(private fs: Firestore = inject(Firestore)) {}

  async getHeader() {
    const docRef = doc(this.fs, 'components', 'header');
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return console.log('No such document!');
    }
  }
  //update header method to update the header
  async updateHeader(header: any) {
    const docRef = doc(this.fs, 'components', 'header');
    await updateDoc(docRef, header);
  }
  //delete header method to delete the header
  async deleteHeader() {
    const docRef = doc(this.fs, 'components', 'header');
    await deleteDoc(docRef);
  }
}
