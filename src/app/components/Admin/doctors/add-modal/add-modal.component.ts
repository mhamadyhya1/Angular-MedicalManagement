import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css']
})
export class AddModalComponent implements OnInit {

  constructor(private modalService: NgbModal) { }
  @ViewChild('content') addview !: ElementRef

  ngOnInit(): void {
  }
  errormessage = '';
  errorclass = '';
  saveresponse: any;
  editdata: any;
  destdata:any;

  empform = new FormGroup({

    code: new FormControl({ value: 0, disabled: true }),
    name: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)])),
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    phone: new FormControl(),
    designation: new FormControl()

  });

  // SaveEmployee() {
  //   if (this.empform.valid) {

  //     console.log(this.empform.getRawValue());

  //     this.service.SaveEmployee(this.empform.getRawValue()).subscribe(result => {
  //       this.saveresponse = result;

  //       if (this.saveresponse.result == 'pass') {

  //         this.errormessage = "Saved Sucessfully";
  //         this.errorclass = "sucessmessage";
  //         setTimeout(()=>{
  //           this.modalService.dismissAll();
  //         },1000)

  //       } else {
  //         this.errormessage = "Failed to save";
  //         this.errorclass = "errormessage";
  //       }
  //     });

  //   } else {
  //     this.errormessage = "Please enter valid data";
  //     this.errorclass = "errormessage";
  //   }
  // }


  // LoadDesignation(){
  //   this.service.GetDesignation().subscribe(result=>{
  //    this.destdata=result;
  //   });
  // }

  // LoadEditData(code: any) {
  //   this.open();
  //   this.service.GetEmployeebycode(code).subscribe(result => {
  //     this.editdata = result;
  //     this.empform.setValue({code:this.editdata.code,name:this.editdata.name,email:this.editdata.email,phone:this.editdata.phone,designation:this.editdata.designation});

  //   });

    

  // }

  // Clearform(){
  //   this.empform.setValue({code:0,name:'',email:'',phone:'',designation:''})
  // }

}
