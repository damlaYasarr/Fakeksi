import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
const headers = new HttpHeaders()
     .set('Content-Type', 'application/json;charset=UTF-8')     

let options = { headers : headers };
@Injectable({
    providedIn:'root'
})

export class EntryServices {
    private baseUrl = '';
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

    addEntry(user_id: number, tag_id: number, def: string) {
        const body = JSON.stringify({ user_id, tag_id, def });
        return this.httpclient.post(`https://localhost:7095/api/TagEntry/entryekle?user_id=${user_id}&tag_id=${tag_id}&definition=${def}`, body);
      }
    addTag(user_id:number, def:string){
        const body={user_id,def}
        return this.httpclient.post(`https://localhost:7095/api/TagEntry/tagekle?user_id=${user_id}&def=${def}`, body);
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