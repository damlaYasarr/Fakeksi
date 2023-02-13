import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from "../models/user";
import { ResponseModel } from "../models/responsemodel";
@Injectable({
    providedIn:'root'
})

export class userservice {
    constructor(private httpclient:HttpClient){}
   
    
    

   public loginProfile(email:string, password:string): Observable<ResponseModel> {
  
        const authData: User = {email: email, password: password};
        return this.httpclient.post<ResponseModel>('https://localhost:7095/api/User/Login', authData);
      }  
    callingFromTepmlate(){
        console.log("calling from template directlt");
    }
}