import { Component, OnInit } from '@angular/core';
import { AdminDataService, Doctor } from '../../admin-data.service';

@Component({
  selector: 'app-doctor-view',
  templateUrl: './doctor-view.component.html',
  styleUrls: ['./doctor-view.component.css']
})
export class DoctorViewComponent implements OnInit {
   Doctor: Doctor[];
  constructor(private avc:AdminDataService) { }
  
  ngOnInit(): void {
    this.ShowAllDoctors();
  }
  delete(){
    console.log("deleted")
  }
  ShowAllDoctors(){
    this.avc.getAllDoctors().subscribe(
      (data:any)=>{
        this.Doctor = data
        console.log(this.Doctor)
      }
    )
  }

}
