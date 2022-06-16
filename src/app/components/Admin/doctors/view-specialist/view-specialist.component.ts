import { Component, OnInit } from '@angular/core';
import { AdminDataService, Specialist } from '../../admin-data.service';

@Component({
  selector: 'app-view-specialist',
  templateUrl: './view-specialist.component.html',
  styleUrls: ['./view-specialist.component.css']
})
export class ViewSpecialistComponent implements OnInit {
  Specialists:Specialist[];
  constructor(private avc:AdminDataService , ) { }

  ngOnInit(): void {
    this.ShowAllSpecialists();
  }
  
  ShowAllSpecialists(){
    this.avc.getSpecialists().subscribe(
      (data:any)=>{
        this.Specialists=data,
        console.log(this.Specialists);
      }
    )
  }
}
