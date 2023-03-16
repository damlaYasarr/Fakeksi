import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, map } from 'rxjs/operators';
@Injectable({
    providedIn:'root'
})

export class EntryServices {
    private baseUrl = 'https://localhost:7095/api/TagEntry';
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
        const body = { userid, tag_id, def };
        console.log(body);
        return this.httpclient.put<any>(`${this.baseUrl}/entryekle`, body).pipe(
          map(user => {
            console.log(user);
          }),
          catchError(error => {
            console.error(error);
            throw error; // re-throw the error to propagate it to the subscriber
          })
        );
      }
    
    searchtagandname(nn:string){
        return this.httpclient.get(`https://localhost:7095/api/TagEntry/search?nn=`+nn);
    }
   getLikeCount(id:number){
    return this.httpclient.get(`https://localhost:7095/api/TagEntry/getlikecount?entryid=`+id)
   }
    callingFromTepmlate(){
        console.log("calling from template directlt");
    }
}