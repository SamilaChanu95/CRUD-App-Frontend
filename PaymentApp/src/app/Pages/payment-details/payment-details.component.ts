import { Component, OnInit } from '@angular/core';
import { PaymentDetail } from 'src/app/Shared/payment-detail';
import { PaymentDetailService } from 'src/app/Shared/payment-detail.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit {
  paymentDetails: PaymentDetail [] = [];

  constructor(private _paymentDetails: PaymentDetailService) { }

  ngOnInit(): void {
    this._paymentDetails.getPaymentDetails().subscribe((res:any) => {
        this.paymentDetails = res;
        console.log('this.paymentDetails: ', this.paymentDetails);
      }
    );
  }

}
