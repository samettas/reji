import { Injectable, inject } from '@angular/core';
import { Firestore,collection,doc,getDoc, getDocs } from '@angular/fire/firestore';
import { MoviesModel } from './modules/main/models/movies.model';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private firestore: Firestore = inject(Firestore);
  constructor() { 

  }

  async getMovie(id: string){
    const ref = doc(this.firestore,'/components/content-preview/movie/'+id);
    return await getDoc(ref)
      .then(res=>{return res.data() as MoviesModel})
      .catch(err=>{return undefined})
      .finally(()=>{console.log("getmovie çalıştı.movie id:"+id)});
  }

  async listMovies(){
    try{
      const ref = collection(this.firestore, '/movies');
      const querySnapshot = await getDocs(ref);
    
      const movies: MoviesModel[] = [];
    
      querySnapshot.forEach((doc) => {
        const movieData = doc.data() as MoviesModel;
        movies.push(movieData);
      });
    
      return movies;
    
    }catch{
      return undefined;
    }
      
    

    
    // try{
    //   const querySnapshot = await getDocs(collection(this.firestore, '/movies'));
      
    //   const movies = [];
    //   querySnapshot.forEach((doc) => {
    //     const movieData = doc.data();
    //   });
    //   return movies;
    // }
    // catch(error){
    //   console.error('Hata oluştu:',error);
    //   throw error;
    // }
    
  }
}
