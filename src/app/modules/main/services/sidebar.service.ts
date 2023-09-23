 import { Injectable, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { SidebarModel } from '../models/sidebar.model';
import { collection, doc, getDocs } from 'firebase/firestore';
import { CommentModel } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(private fs: Firestore = inject(Firestore)) { }

  async getSidebar() : Promise<SidebarModel[]>{
    const querySnapshot = await getDocs(collection(this.fs, "movies"));
    const movieItems:SidebarModel[] = [];
    querySnapshot.forEach((doc) => {
      movieItems.push(doc.data() as SidebarModel);
      console.log(doc.id, " => ", doc.data());
    });
    return movieItems;
  }
  
}
