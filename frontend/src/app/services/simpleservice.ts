import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';
import { EntryServices } from './entryservices';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private idSource = new BehaviorSubject<number>(0);
  currentId = this.idSource.asObservable();
   public tagname:string;
   ids:number;
  changeId(id: number) {
    this.idSource.next(id);
    this.ids=id;
  }
   
 
 
}