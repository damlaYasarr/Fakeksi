import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { Location } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';
@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient, 
  
    private location: Location) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser') || '{}')
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  private get httpOptions() {
    const currentUser = this.currentUserSubject.value;
    const token = currentUser ? currentUser.token : null;
  
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
  }
  API = 'https://localhost:7095/api/Auth/login';
  login(email: string, password: string) {
    return this.http.post<any>(this.API, { email, password },this.httpOptions).pipe(
      map((user) => {
        if (user && user.token) {
          // Store user details and token in local storage to keep the user logged in
          localStorage.setItem('currentUser', JSON.stringify(user));
          console.log(user)
          localStorage.setItem('isLoggedIn', 'true');
          this.currentUserSubject.next(user);
        }
        
        return user;
      })
    );
   
  }

  register(email: string, password: string, usernam: string) {
    return this.http.post(
      `https://localhost:7095/api/Auth/register?email=${email}&password=${password}&name=${usernam}`,
      { email, password, usernam }
    );
  }
  logout() {
    localStorage.removeItem('currentUser');
    localStorage.setItem('isLoggedIn', 'false');

    this.currentUserSubject.next({} as User);
  
  }

  getusrid(email: string) {
    return this.http.get(
      'https://localhost:7095/api/User/getuserIdByEmail?email=' + email
    );
  }

}
