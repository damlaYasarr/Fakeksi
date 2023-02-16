import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from "../models/user";
import { ResponseModel } from "../models/responsemodel";
const API="https://localhost:7095/api/User/Login";
const headers = new HttpHeaders()
   .append('Content-Type' , 'application/json');
  @Injectable({
    providedIn: 'root'
  })
export class Userservice {
    constructor(private httpclient:HttpClient){}
    

   loginProfile(email:string,password:string): Observable<any> {
        return this.httpclient.post(API, {email, password}, { headers: headers });
      }  
   logout(id:number):Observable<any>{
     return this.httpclient.get('https://localhost:7095/api/User/Logout'+id);
    }  
   
}