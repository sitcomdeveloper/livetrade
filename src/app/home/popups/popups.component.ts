import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TradeservicesService } from 'src/app/tradeservices.service';
@Component({
  selector: 'app-popups',
  templateUrl: './popups.component.html',
  styleUrls: ['./popups.component.css']
})
export class PopupsComponent implements OnInit {
  @Input() prtdata: any;
  @Output() clddata: EventEmitter<any> = new EventEmitter();
  loginForm: FormGroup;
  title: any;
  getLoginDetails: any;
  bindLoginData: any;
  fundtheAccount: any;
  respons: string;
  constructor(private fb: FormBuilder, private service:TradeservicesService) { }
  private bsmodal: BsModalRef

  ngOnInit(): void {
     // code for receiving login details and bind to header at place of name
     this.getLoginDetails = JSON.parse(localStorage.getItem('project'));
     this.bindLoginData = this.getLoginDetails;
     
    this.loginForm = this.fb.group({
      tpaccount: [''],
      amount: ['']
    })
  }
  hideModal() {
    this.bsmodal.hide();
  }
  addfund() {
    const fndaccntparamtr = {
      TPAccountNumber: this.loginForm.value.tpaccount,
      DepositAmount: this.loginForm.value.amount,
    }
    this.service.fundAccount(fndaccntparamtr).subscribe(giveFund => {
      this.fundtheAccount = giveFund;
      if (giveFund === null) {
        this.respons = 'Amount is added successfully..!'
      } else {
        this.respons = '';
      }
      this.loginForm.reset();
      console.log('fundtheAccount', giveFund);
    })
  }
}
