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
    addEntry(userid:number, tag_id:number, def:string){
        return this.httpclient.post(`https://localhost:7095/api/TagEntry/entryekle`, {userid, tag_id, def});
    }
    searchtagandname(nn:string){
        return this.httpclient.get('https://localhost:7095/api/TagEntry/search'+nn);
    }
    callingFromTepmlate(){
        console.log("calling from template directlt");
    }
}