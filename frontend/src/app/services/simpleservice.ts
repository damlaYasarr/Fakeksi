import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor(private httpclient:HttpClient){}
  public tagseriousid: number;
 
  getTagsAllEntriesByTagId(){
    return this.httpclient.get('https://localhost:7095/api/TagEntry/entries'+this.tagseriousid);
}
}