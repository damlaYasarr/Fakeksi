import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EntryServices {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpclient: HttpClient) {}
  public tagidforentities: number;
  getEntry() {
    return this.httpclient.get(
      'https://localhost:7095/api/TagEntry/GetTagandcount'
    );
  }
  getDailyOneTagAndOneEntry() {
    return this.httpclient.get(
      'https://localhost:7095/api/TagEntry/GetMOSTlikesEntryDetailwithContent'
    );
  }
  getTagIdByName(name: string) {
    return this.httpclient.get(
      'https://localhost:7095/api/TagEntry/tagidbyname?name=' + name
    );
  }
  //entrieswithallprofile

  getTagsAllEntriesByTagId(id: number) {
    return this.httpclient.get(
      'https://localhost:7095/api/TagEntry/entries' + id
    );
  }

  addEntry(user_id: number, tag_id: number, def: string): Observable<any> {
    const body = JSON.stringify({ user_id, tag_id, def });
    return this.httpclient.post(
      `https://localhost:7095/api/TagEntry/entryekle?user_id=${user_id}&tag_id=${tag_id}&definition=${def}`,
      body,
      this.httpOptions
    );
  }
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
  addTagandentry(user_id: number, deftag: string,defentry:string ) {
    const body = { user_id, deftag, defentry };
    return this.httpclient.post(
      `https://localhost:7095/api/TagEntry/tagekle?user_id=${user_id}&def=${deftag}&entr_def=${defentry}`,
      body,
      this.httpOptions
    );
  }
  searchtagandname(nn: string) {
    return this.httpclient.get(
      `https://localhost:7095/api/TagEntry/search?nn=` + nn
    );
  }
  getLikeCount(id: number) {
    return this.httpclient.get(
      `https://localhost:7095/api/TagEntry/getlikecount?entryid=` + id
    );
  }
  callingFromTepmlate() {
    console.log('calling from template directlt');
  }
  addLike(user_id: number, entry_id: number) {
    return this.httpclient.post(
      `https://localhost:7095/api/TagEntry/addLike?userid=${user_id}&entryid=${entry_id}`,
      { user_id, entry_id },
      this.httpOptions
    );
  }
  deletelike(user_id: number, entry_id: number) {
    return this.httpclient.delete(
      `https://localhost:7095/api/TagEntry/deletelike?userid=${user_id}&entryid=${entry_id}`
    );
  }

  getEntyIdByName(name: string) {
    return this.httpclient.get(
      `https://localhost:7095/api/TagEntry/entryidbyname?name=${name}`
    );
  }
  gettodayflow(){
    return this.httpclient.get('https://localhost:7095/api/TagEntry/gettodayflow');
  }
}
