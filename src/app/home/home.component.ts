import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { PopupsComponent } from './popups/popups.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  getLoginDetails: any;
  bindLoginData: any;

  constructor(private router:Router,private modalService: BsModalService) { }
  bsModalRef: BsModalRef;

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
  // deposit
  openpopupfordeposit() {
    const initialState = {
      title: '',
      // userId: this.selectedchkbxfrdltclnt,
      adddepositfund: 'adddepositfund'
    };
    // tslint:disable-next-line: max-line-length
    this.bsModalRef = this.modalService.show(PopupsComponent, Object.assign({ show: true }, { class: 'modal450', initialState }));
    this.bsModalRef.content.closeBtnName = 'Cancel';
    this.bsModalRef.content.clddata.subscribe(() => {
      // this.userDetails();
    });
  }

}
