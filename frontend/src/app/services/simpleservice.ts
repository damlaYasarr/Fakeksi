import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private idSource = new BehaviorSubject<number>(0);
  currentId = this.idSource.asObservable();
   public tagname:string;
  constructor() { }

  changeId(id: number) {
    this.idSource.next(id);
  }
 
}