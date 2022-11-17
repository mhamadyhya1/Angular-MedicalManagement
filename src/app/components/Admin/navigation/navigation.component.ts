import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private auth :AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.auth.removeToken()
    this.router.navigate(['/login'])
    

  }

}
