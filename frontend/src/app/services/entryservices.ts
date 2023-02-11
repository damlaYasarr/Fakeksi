import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:'root'
})

export class EntryServices {
    constructor(private httpclient:HttpClient){}
   
    getEntry(){
        return this.httpclient.get('https://localhost:7095/api/TagEntry/GetTagandcount');
    }

    callingFromTepmlate(){
        console.log("calling from template directlt");
    }
}