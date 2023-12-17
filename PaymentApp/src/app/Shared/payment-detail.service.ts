import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  // url: string = environment.apiBaseUrl + '/Payment/get-payment-list';
  // url: string = '/api/Payment/get-payment-list';

  constructor(private _httpClient: HttpClient) { }

  public getPaymentDetails(): Observable<any> {
    return this._httpClient.get(`/api/Payment/get-payment-list`); 
  }

  public deletePaymentDetail(id: number): Observable<any> {
    return this._httpClient.delete(`/api/Payment/delete-payment/${id}`); 
  }
}
