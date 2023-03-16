import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from "../models/user";
import { ResponseModel } from "../models/responsemodel";
const API='https://localhost:7095/api/Auth/login';
const headers = new HttpHeaders()
   .append('Content-Type' , 'application/json');
  @Injectable({
    providedIn: 'root'
  })
export class Userservice {
    constructor(private httpclient:HttpClient){}
    private idSource = new BehaviorSubject<number>(0);
    currentId = this.idSource.asObservable();
     
    changeId(id: number) {
      this.idSource.next(id);
       console.log(id)
    }
 userProfileInfo(id:number){
   return this.httpclient.get('https://localhost:7095/api/User/UserProfileDetail?id='+id);
 }
 getuserIdByName(name:string){
     return this.httpclient.get('https://localhost:7095/api/User/getuserIdByname?name='+name)
 }
 getUserAllEntries(id:number){
  return this.httpclient.get('https://localhost:7095/api/TagEntry/getalltagandentrieswithUSER'+id);
 }
 addFollower(id:number, other_id:number){
  return this.httpclient.post(`https://localhost:7095/api/User/addFollower`, {id,other_id});
 } 
 adduserPhoto(){
   
 } 
 changeuserphoto(){
  
 }
   
}