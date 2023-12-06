import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { PaymentDetail } from 'src/app/Shared/payment-detail';
import { PaymentDetailService } from 'src/app/Shared/payment-detail.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit, OnDestroy {
  paymentDetails: PaymentDetail [] = [];
  unsubscribe: Subject<void> = new Subject<void>();

  constructor(private _paymentDetails: PaymentDetailService) { }

  ngOnInit(): void {
    this._paymentDetails.getPaymentDetails().pipe(takeUntil(this.unsubscribe)).subscribe((res:any) => {
        this.paymentDetails = res;
        // console.log('this.paymentDetails: ', this.paymentDetails);
      }
    );
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  trackById(item: any): number {
    return item.id;
  }
}
