import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminDataService, Specialist } from '../../admin-data.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {
  
   Specialists:Specialist[];
   Fullname='';
   specialist='';
   days;
   dayss='';
   Days=[];
   startTime='';
   endTime='';
   timeInterval='';
   yearExperience='';
   selectedFile: File;
   image:any
  constructor(private avc:AdminDataService,private toastr:ToastrService , private router:Router ) { }

  ngOnInit(): void {
    this.ShowAllSpecialists();
    this.days=this.avc.getAlldays();
  }
  addDay(){
    this.Days.push({Days:""})
  }
  removeDay(i){
    this.Days.splice(i,1)
  }
  ShowAllSpecialists(){
    this.avc.getSpecialists().subscribe(
      (data:any)=>{
        this.Specialists=data,
        console.log(this.Specialists);
      }
    )
  }
  onChange(res){
    this.specialist=res
    console.log(this.specialist)
  }
  onChangeDay(res){
    this.dayss=res
    console.log(this.dayss)
  }
  onFileChanged(event){
    this.selectedFile = event.target.files[0];
    if(this.selectedFile!=null){
      let reader = new FileReader()
      reader.onload = (event:any)=>{
        this.image = event.target.result;
      }
      reader.readAsDataURL(this.selectedFile)
    }
    this.image=null;
  }
  create(){
    try{
      const doctor = new FormData()
    doctor.append('Fullname',this.Fullname)
    doctor.append('specialist',this.specialist)
    doctor.append('days',this.dayss)
    doctor.append('startTime',this.startTime)
    doctor.append('endTime',this.endTime)
    doctor.append('timeInterval',this.timeInterval)
    doctor.append('yearExperience',this.yearExperience)
    doctor.append('file',this.selectedFile)
    this.avc.addDoctor(doctor).subscribe(response=>{
      console.log(response)
    })
      this.toastr.success("Doctor added successful")
      this.router.navigate(['admin/doctors/'])
      
    }
    catch (error){
      console.log(error)
}
  }
}
