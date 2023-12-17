export class PaymentDetail {
    paymentDetailId: number = 0;
    cardOwnerName: string;
    cardNumber: string;
    expirationDate: string;
    securityCode: string;

    constructor(paymentDetailId: number, cardOwnerName: string, cardNumber: string, expirationDate:string, securityCode: string) {
        this.paymentDetailId = paymentDetailId;
        this.cardOwnerName = cardOwnerName;
        this.cardNumber = cardNumber;
        this.expirationDate = expirationDate;
        this.securityCode = securityCode;
    }
}
