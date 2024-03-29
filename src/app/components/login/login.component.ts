import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })
  constructor(private auth:AuthService , private router:Router) { }

  ngOnInit(): void {
    this.onSubmit()
  }
  onSubmit():void{
    if(this.loginForm.valid){
      this.auth.login(this.loginForm.value).subscribe((result)=>{
        this.router.navigate(['admin'])
      },
      
  );
    }
  }
}
