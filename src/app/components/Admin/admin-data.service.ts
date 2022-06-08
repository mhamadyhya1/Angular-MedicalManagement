import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Time } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AdminDataService {
   url='http://192.168.0.104:3900/api';
   apiUrl=''

   selectedFile:File;
  days=[
    {name:"Choose Day"},
    {name:"Monday"},
    {name:"Tuesday"},
    {name:"Wednesday"},
    {name:"Thursday"},
    {name:"Friday"},
    {name:"Saturday"}
  ]
  constructor(private http:HttpClient) {}
  
  getAlldays():Array<{name}>{
    return this.days;
  }
  addAnnouncment(uploadData: FormData){
    this. apiUrl = this.url+'/announcement/newAnnouncement';
    return this.http.post(this.apiUrl,uploadData)
  }
  addSpecialist(uploadData:FormData){
    this.apiUrl = this.url+'/Specialist/newSpecialist';
    return this.http.post(this.apiUrl,uploadData)
  }
  getSpecialists():Observable<Specialist[]>{
    this.apiUrl=this.url+'/Specialist/getAllSpecialists'
    return this.http.get<Specialist[]>(this.apiUrl);
  }
  addDoctor(uploadData:FormData){
    this.apiUrl=this.url+'/Doctor/addDoctor'
    return this.http.post(this.apiUrl,uploadData)
  }
  getAllDoctors():Observable<Doctor[]>{
    this.apiUrl=this.url+'/Doctor/getAllDoctors'
    return this.http.get<Doctor[]>(this.apiUrl)
  }
}


export class Announcement{
  _id:string;
  Title:string;
  Details:string;
  image:{path:string}
}
export class Specialist{
  _id:string;
  Name:string;
  image:{path:string};
}
export class Doctor{
  _id:string;
  Fullname:string;
  specialist:string;
  startTime:Time;
  endTime:Time;
  timeInterval:number;
  yearExperience:number;

}