import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { ResponseModel } from '../models/responsemodel';
const API = 'https://localhost:7095/api/Auth/login';
const headers = new HttpHeaders().append('Content-Type', 'application/json');
@Injectable({
  providedIn: 'root',
})
export class Userservice {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpclient: HttpClient) {}
  private idSource = new BehaviorSubject<number>(0);
  currentId = this.idSource.asObservable();
   
  changeId(id: number) {
    this.idSource.next(id);
    console.log(id);
  }
  private senderNameSource = new BehaviorSubject<string>("");
  currendSnderName = this.senderNameSource.asObservable();
   
  changesendername(name: string) {
    this.senderNameSource.next(name);
    console.log("aktarılan isim",name);
  }
  userProfileInfo(id: number) {
    return this.httpclient.get(
      'https://localhost:7095/api/User/UserProfileDetail?id=' + id
    );
  }
  getuserIdByName(name: string) {
    return this.httpclient.get(
      `https://localhost:7095/api/User/getuserIdByname?name=${name}` + name
    );
  }
  getUserAllEntries(id: number) {
    return this.httpclient.get(
      'https://localhost:7095/api/TagEntry/getalltagandentrieswithUSER' + id
    );
  }
  addFollower(id: number, other_id: number) {
    return this.httpclient.post(
      `https://localhost:7095/api/User/addFollower?id=${id}&otherid=${other_id}`,
      { id, other_id }
    );
  }
  adduserPhoto(id: number, url: string) {
    return this.httpclient.post(
      'https://localhost:7095/api/Fileupload/imageupload',
      { id, url }
    );
  }

  getUserNameById(id: number) {
    return this.httpclient.get(
      `https://localhost:7095/api/User/GetUserNameById?id=` + id
    );
  }
  getLastMsg(user_id: number) {
    return this.httpclient.get(
      `https://localhost:7095/api/User/getmsgThumbnail?userid=${user_id}`
    );
  }
  sendMsg(id: number, senderid: number, msg: string) {
    const body={id,senderid,msg};
    return this.httpclient.post(
      `https://localhost:7095/api/User/sendmsg?userid=${id}&otherid=${senderid}&msg=${msg}`,
   body, 
   this.httpOptions
    );
  }
 
 
  listallmag(userid1:number, userid2:number){
       return this.httpclient.get(`https://localhost:7095/api/User/GetAllMessagesBetweenUsers?user1=${userid1}&user2=${userid2}`)
  }
  changeuserphoto() {}
  forgotpass() {
    //email aktivasyonu kullan.
  }
}
