import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  getLoginDetails: any;
  bindLoginData: any;

  constructor() { }

  ngOnInit(): void {
    // code for receiving login details and bind to header at place of name
    this.getLoginDetails = JSON.parse(localStorage.getItem('project'));
    this.bindLoginData = this.getLoginDetails;

  }

}
