import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/Shared/payment-detail.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit {

  constructor(private _paymentDetails: PaymentDetailService) { }

  ngOnInit(): void {
    this._paymentDetails.getPaymentDetails();
  }

}
