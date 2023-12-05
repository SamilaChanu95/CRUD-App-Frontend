import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PaymentDetail } from './payment-detail';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  paymentDetails: PaymentDetail [] = [];
  objectAny: any;
  url: string = environment.apiBaseUrl + '/Payment/get-payment-list';

  constructor(private _httpClient: HttpClient) { }

  getPaymentDetails(): void {
    this._httpClient.get(this.url).subscribe(res => {
      if (res) {
        this.objectAny = res;
        console.log('this.objectAny: ', this.objectAny);
      }
    });
  }

}
