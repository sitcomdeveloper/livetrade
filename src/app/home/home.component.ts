import { DOCUMENT } from '@angular/common';
import { Component, OnInit, AfterViewInit, Renderer2, Inject  } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { PopupsComponent } from './popups/popups.component';

declare const TradingView: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit  {
  getLoginDetails: any;
  bindLoginData: any;
// this.Home: any;
  constructor(private router:Router,private modalService: BsModalService, private renderer2: Renderer2, @Inject(DOCUMENT) private _document) { }
  bsModalRef: BsModalRef;

  ngOnInit(): void {
    // code for receiving login details and bind to header at place of name
    this.getLoginDetails = JSON.parse(localStorage.getItem('project'));
    this.bindLoginData = this.getLoginDetails;
  }
  ngAfterViewInit() {
// chart
    const s = this.renderer2.createElement('script');
    s.type = 'text/javascript';
    s.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
    s.text = ``;
    this.renderer2.appendChild(this._document.body, s);

    // const t = this.renderer2.createElement('script');
    // t.type = 'text/javascript';
    // t.src = 'https://s3.tradingview.com/tv.js';
    // t.text = ``;
    // this.renderer2.appendChild(this._document.body, t);
    // new TradingView.widget(
    //   {
    //   "width": 980,
    //   "height": 610,
    //   "symbol": "NASDAQ:AAPL",
    //   "interval": "D",
    //   "timezone": "Etc/UTC",
    //   "theme": "light",
    //   "style": "1",
    //   "locale": "uk",
    //   "toolbar_bg": "#f1f3f6",
    //   "enable_publishing": false,
    //   "allow_symbol_change": true,
    //   "container_id": "tradingview_ddbbe"
    //   }
    //   );
    // economeic calendar
    const t = this.renderer2.createElement('script');
    t.type = 'text/javascript';
    t.src = 'https://s3.tradingview.com/external-embedding/embed-widget-events.js';
    t.text = ``;
    this.renderer2.appendChild(this._document.body, t);
  }
  // logout
  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
    window.location.href = "/login";
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
