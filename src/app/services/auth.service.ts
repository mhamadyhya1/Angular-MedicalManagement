import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }
  setToken(token:string):void{
    localStorage.setItem('token',token)
  }
  removeToken():void{
    localStorage.clear()
  }

  login({username,password}:any):Observable<any>{
     if(username=="Adminuser" && password=="admin123"){
        this.setToken('gjhghgjhgjhgjoiuyt1234566');
        return of({name:'Admin',username:"Adminuser"})
      }
     
  }
}
