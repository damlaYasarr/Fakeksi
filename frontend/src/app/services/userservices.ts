import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from "../models/user";
import { ResponseModel } from "../models/responsemodel";
const API='https://localhost:7095/api/Auth/login';
const headers = new HttpHeaders()
   .append('Content-Type' , 'application/json');
  @Injectable({
    providedIn: 'root'
  })
export class Userservice {
    constructor(private httpclient:HttpClient){}
    
 
   loginProfile(email:string,password:string) {
        return this.httpclient.post(API, {email, password});
      }  
   logout(id:number):Observable<any>{
     return this.httpclient.get('https://localhost:7095/api/User/Logout'+id);
    }  
    isAdmin(email:string):Observable<any>{
      return this.httpclient.post('https://localhost:7095/api/User/IsAdminOrUser',email);
    }
   
}