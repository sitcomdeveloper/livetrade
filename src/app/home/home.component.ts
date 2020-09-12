import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  getLoginDetails: any;
  bindLoginData: any;

  constructor(private router:Router) { }

  ngOnInit(): void {
    // code for receiving login details and bind to header at place of name
    this.getLoginDetails = JSON.parse(localStorage.getItem('project'));
    this.bindLoginData = this.getLoginDetails;

  }
  // logout
  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

}
