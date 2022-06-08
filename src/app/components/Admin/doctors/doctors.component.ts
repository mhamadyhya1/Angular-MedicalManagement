import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent{
 


  constructor(private router:Router, private route:ActivatedRoute) { }


  ngOnInit(): void {
    
  }
  add(){
    this.router.navigate(['./add'], { relativeTo: this.route });
  }
  
}
