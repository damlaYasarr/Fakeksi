import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:'root'
})

export class EntryServices {
    constructor(private httpclient:HttpClient){}
   
    
    public saveUser(user: User): Observable<any> {
        return this.httpclient.post<any>('https://localhost:7095/api/User/Login', user);
      }
    callingFromTepmlate(){
        console.log("calling from template directlt");
    }
}