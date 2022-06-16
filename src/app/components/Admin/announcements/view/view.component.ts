import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminDataService, Announcement } from '../../admin-data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  Announcement: Announcement[];
  message;
  _id;
  constructor(private avc:AdminDataService , private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.ShowAllAnnouncement()
  }
  ShowAllAnnouncement(){
    this.avc.getAllAnnouncements().subscribe(
      (data:any)=>{
        this.Announcement = data
        console.log(this.Announcement)
      }
    )
  }

DeleteAnnouncement(ar:Announcement){
  const announcement = new Announcement()
  announcement._id = ar._id;
  this.avc.deleteAnnouncement(announcement).subscribe(data=>{
  this.toastr.success("Delete Succesful")
  this.ShowAllAnnouncement();
  })
  console.log(announcement._id)
}
}
