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
    this.refreshList();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  deletePayment(paymentId: number): void {
    this._paymentDetails.deletePaymentDetail(paymentId).subscribe((res: boolean) => {
      if (res == true) {
        console.log('deleted');
        this.refreshList();
      } else {
        console.log('nor deleted');
        this.refreshList();
      }
    }); 
    console.log('paymentId:', paymentId);
  }

  refreshList() : void {
    this._paymentDetails.getPaymentDetails().pipe(takeUntil(this.unsubscribe)).subscribe((res : PaymentDetail []) => {
        this.paymentDetails = res;
        console.log('paymentDetails:', res);
      }
    );
  }

  trackById(item: any): number {
    return item.id;
  }
}
