import { ReadVarExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { event } from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { AdminDataService } from '../../admin-data.service';

@Component({
  selector: 'app-add-specialist',
  templateUrl: './add-specialist.component.html',
  styleUrls: ['./add-specialist.component.css']
})
export class AddSpecialistComponent implements OnInit {

  Name='';
  selectedFile: File;
  image: any; 
  message:any;
  constructor(private asv:AdminDataService ,private toastr:ToastrService , private router:Router ) { }

  ngOnInit(): void {
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
  addSpecialist(){
    try{
      const specialist =  new FormData();
    specialist.append('Name',this.Name);
    specialist.append('file',this.selectedFile);
    this.asv.addSpecialist(specialist).subscribe(response=>
    console.log(response)
  )
  this.toastr.success("Specialist added successful")
  this.router.navigate(['admin/doctors/'])
    }
    catch (error){
      console.log(error)
}
}
}
