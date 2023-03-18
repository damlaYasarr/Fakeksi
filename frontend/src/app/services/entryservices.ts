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
        return this.httpclient.post('https://localhost:7095/api/TagEntry/tagekle', body);
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
    Save(user_id: number, tag_id: number, def: string): Observable<any> {
        const body = { user_id, tag_id, def };
        const headers = new HttpHeaders({
          'Content-Type': 'application/json'
        });
        const options = { headers };
      
        return this.httpclient.post<any>( 'https://localhost:7095/api/TagEntry/entryekle', body, options).pipe(
            catchError(this.handleError))
        
      }
      private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          console.error('Bir hata oluştu: ', error.error.message);
        } else {
          console.error(`HTTP hatası: ${error.status} ${error.statusText}`);
        }
        return throwError('Bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
      }
}