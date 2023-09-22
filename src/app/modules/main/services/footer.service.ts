import { Injectable, inject } from '@angular/core';
import { Footer } from '../models/footer.model';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  
  constructor(private fs: Firestore = inject(Firestore)) {}

  async getFooter() {
    const docRef = doc(this.fs, 'components', 'footer');
    const docSnap = await getDoc(docRef);
   
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return console.log('No such document!');
    }
  }
}
