import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AdminDataService } from '../../admin-data.service';
import { Alert } from 'bootstrap';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  Title='';
  Details='';
  selectedFile: File;
  image: any;
  

  constructor(private asv : AdminDataService) { }

  ngOnInit(): void {
  }
  onFileChanged(event){
    this.selectedFile = event.target.files[0];
    if (this.selectedFile!=null){
      let reader = new FileReader();
      reader.onload = (event:any)=>{
        this.image = event.target.result;
      }
      reader.readAsDataURL(this.selectedFile);
    
    }
    this.image= null;
  }
  addAnnouncement(){
    const announcement = new FormData();
    announcement.append('Title' , this.Title);
    announcement.append('Details' , this.Details);
    announcement.append('file', this.selectedFile);
    this.asv.addAnnouncment(announcement).subscribe(data=>{
      alert(JSON.stringify(data))
    })
  }
}

