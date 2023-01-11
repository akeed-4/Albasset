import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/internal/operators/tap';
import { Login } from './albaseet/models/login';


@Injectable({
  providedIn: 'root'
})
export class AuthoService {
  
  private url="https://localhost:44389/";
  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
   
    }),

    
     //withCredentials: true,
  };
  constructor(private http:HttpClient) { }
  UserLogin(log: Login):Observable<Login>{

  return this.http.post<Login>(this.url + 'login', log, this.headers).pipe();
     
  
 
  }
  LogoutUsers(){
    return this.http.get(this.url + 'logout',this.headers ).pipe();
  }
}