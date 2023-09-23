import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authenticationservice';



@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    user_id:any;
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
           
            return true;
        }
        localStorage.removeItem('user_id');
        // not logged in so redirect to login page with the return url
        this.router.navigateByUrl(('/(bla:home/login'));
        return false;
    }
}
