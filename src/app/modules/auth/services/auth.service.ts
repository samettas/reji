import { Injectable } from '@angular/core';
import {
  Auth,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
} from '@angular/fire/auth';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  setDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private fireStore: Firestore,
    private auth: Auth,
    private router: Router
  ) {}
  // Saving user data in localstorage when logged in and setting up null when logged out

  //register
  register(email: string, password: string, name: string) {
    return createUserWithEmailAndPassword(this.auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        const uid = user?.uid;
        sendEmailVerification(user as any);
        const docRef = doc(this.fireStore, 'users', uid);
        const docData = {
          email: email,
          Name: name,
          phoneNumber: '',
          photoURL:
            'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=',
          comments: [],
          uid: uid,
        };
        setDoc(docRef, docData);
      }
    );
  }

  //login
  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password).then(() => {
      this.router.navigate(['']);
      localStorage.setItem('user', JSON.stringify(this.auth.currentUser));
    });
  }

  logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      localStorage.setItem('user', 'null');
      this.router.navigate(['/']);
    });
  }
  resetpassword(email: string) {
    try {
      sendPasswordResetEmail(this.auth, email);
    } catch (error) {
      console.log(error);
    }
  }

  get isLoggedIn(): boolean {
    const user = this.auth.currentUser;
    if (user) {
      JSON.parse(localStorage.getItem('user')!);

      return true;
    } else {
      return false;
    }
  }
}
