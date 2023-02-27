import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
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
    
 

   
}