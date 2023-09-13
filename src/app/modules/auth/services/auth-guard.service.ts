import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(public authService: AuthService, public router: Router) {}
  canActivate(): boolean {
    if (this.authService.isLoggedIn) {
      console.log(typeof this.authService.isLoggedIn); // User is authenticated, allow access to the route

      return true;
    } else {
      // User is not authenticated, redirect to the login page or any other route
      this.router.navigate(['']); // Change '/login' to your desired login route
      return false;
    }
  }
}
