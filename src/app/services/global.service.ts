import {  Injectable, inject } from '@angular/core';
import { AuthService } from '../modules/auth/services/auth.service';
import { Auth } from '@angular/fire/auth';
import { UserService } from '../modules/auth/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {

  public authenticated: boolean = false;
  constructor(private auth:Auth=inject(Auth)) {}

  getUser(){
    const id =this.auth.currentUser?.uid
    console.log('asdfasdfs')
  }
}
