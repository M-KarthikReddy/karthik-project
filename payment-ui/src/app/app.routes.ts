import { Routes } from '@angular/router';
import { MerchantRegisterComponent } from './merchant-register/merchant-register.component';
import { PaymentStatusComponent } from './payment-status/payment-status.component';
import { PaymentComponent } from './payment/payment.component';
import { MerchantTransactionsComponent } from './merchant-transactions/merchant-transactions.component';

export const routes: Routes = [
    { path: 'payment', component: PaymentComponent },
    { path: 'payment-status', component: PaymentStatusComponent },
    { path: 'register-merchant', component: MerchantRegisterComponent },
    { path: 'merchant-transactions', component: MerchantTransactionsComponent }
];
