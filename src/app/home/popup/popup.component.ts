import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TradeservicesService } from 'src/app/tradeservices.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  @Input() prtdata: any;
  @Output() clddata: EventEmitter<any> = new EventEmitter();
  title: any;
  dpositfnd = true;
  adddepositfund: any;
  UserFormInfo: FormGroup
  getLoginDetails: any;
  bindLoginData: any;
  fundtheAccount: any;
  respons: string;
  constructor(private bsmodal: BsModalRef, private fb: FormBuilder, private service:TradeservicesService) { }

  ngOnInit(): void {
    // code for receiving login details and bind to header at place of name
    this.getLoginDetails = JSON.parse(localStorage.getItem('project'));
    this.bindLoginData = this.getLoginDetails;

    this.UserFormInfo = this.fb.group({
      trdeaccount: [''],
      amount: ['']
    })
    // if(this.adddepositfund === 'adddepositfund') {
    //   this.dpositfnd = true;
    // } else {
    //   this.dpositfnd = false;
    // }
  }
  hideModal() {
    this.bsmodal.hide();
  }
  // add fund
  addfund() {
    const fndaccntparamtr = {
      TPAccountNumber: this.UserFormInfo.value.trdeaccount,
      DepositAmount: this.UserFormInfo.value.amount,
    }
    this.service.fundAccount(fndaccntparamtr).subscribe(giveFund => {
      this.fundtheAccount = giveFund;
      if (giveFund === null) {
        this.respons = 'Amount is added successfully..!'
      } else {
        this.respons = '';
      }
      this.UserFormInfo.reset();
      console.log('fundtheAccount', giveFund);
    })
  }

}
