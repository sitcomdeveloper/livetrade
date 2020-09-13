import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class TradeservicesService {

  constructor(private http: HttpClient) { }
  // login
  loginClient(clntloginParamtr: any): Observable<any> {
    return this.http.post<any>(API_URL + 'Client/AuthClientByTpAccount', clntloginParamtr);
  }
  // add fund
  fundAccount(fndaccntparamtr: any): Observable<any> {
    return this.http.post<any>(API_URL + 'TradeAccount/AddDeposit', fndaccntparamtr);
  }
}
