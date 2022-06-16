import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminDataService, Doctor } from '../../admin-data.service';

@Component({
  selector: 'app-doctor-view',
  templateUrl: './doctor-view.component.html',
  styleUrls: ['./doctor-view.component.css']
})
export class DoctorViewComponent implements OnInit {
   Doctor: Doctor[];
   message;
   _id;
  constructor(private avc:AdminDataService,private toastr:ToastrService, private router:Router) { }
  
  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.ShowAllDoctors();
  }
  
  ShowAllDoctors(){
    this.avc.getAllDoctors().subscribe(
      (data:any)=>{
        this.Doctor = data
        console.log(this.Doctor)
      }
    )
  }
  DeleteDoctor(dr:Doctor){
    
      const doctor = new Doctor();
       doctor._id =dr._id;
      this.avc.deleteDoctor(doctor).subscribe(data=>{
        this.toastr.success("Deleted Succesful")
        this.ShowAllDoctors()
     },(error)=>{
      this.toastr.error(error.error.message)
     })
    
}
}

