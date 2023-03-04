import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public tagseriousid: number;
  value(){
    return this.tagseriousid;
  }
 
}