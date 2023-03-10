import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:'root'
})

export class EntryServices {
    constructor(private httpclient:HttpClient){}
    public tagidforentities: number;
    getEntry(){
        return this.httpclient.get('https://localhost:7095/api/TagEntry/GetTagandcount');
    }
    getDailyOneTagAndOneEntry(){
        return this.httpclient.get('https://localhost:7095/api/TagEntry/GetMOSTlikesEntryDetailwithContent');
    }
    getTagIdByName(name:string){
        return this.httpclient.get('https://localhost:7095/api/TagEntry/tagidbyname?name='+name);
    }
    //entrieswithallprofile
   
    getTagsAllEntriesByTagId(id:number){
        return this.httpclient.get('https://localhost:7095/api/TagEntry/entries'+id);
    }
    callingFromTepmlate(){
        console.log("calling from template directlt");
    }
}