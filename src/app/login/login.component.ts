import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TradeservicesService } from '../tradeservices.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userwilllogin: any;
  constructor(private fb: FormBuilder, private router: Router, private service: TradeservicesService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      accountnumber: [''],
      password: ['']
    })
  }
  accesstotrade() { 
    // this.router.navigateByUrl('/home');
    const clntloginParamtr = {
      ClientId: this.loginForm.value.accountnumber,
      Password: this.loginForm.value.password
    }
    this.service.loginClient(clntloginParamtr).subscribe(loginRes => {
      if (loginRes) {
        this.router.navigateByUrl('/home');
        this.userwilllogin = loginRes;
        // console.log('userwilllogin', loginRes);
        localStorage.setItem('project', JSON.stringify(loginRes));
        // console.log('stringifydata', JSON.stringify(loginRes));
        this.loginForm.reset();
      } else {
        alert('Invalid Credential');
      }
    },
      err => {
        alert('Error');
      }
    );
  }

}
