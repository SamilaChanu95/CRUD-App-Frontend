import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  // url: string = environment.apiBaseUrl + '/Payment/get-payment-list';
  url: string = '/api/Payment/get-payment-list';

  constructor(private _httpClient: HttpClient) { }

  public getPaymentDetails(): Observable<any> {
    return this._httpClient.get(this.url);
  }

}
