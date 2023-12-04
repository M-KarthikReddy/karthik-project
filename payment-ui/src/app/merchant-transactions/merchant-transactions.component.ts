import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-merchant-transactions',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './merchant-transactions.component.html',
  styleUrl: './merchant-transactions.component.scss'
})
export class MerchantTransactionsComponent implements OnInit {

  merchantId = '';
  merchantPayments:any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  trackStatus() {
    this.http.get('http://localhost:9092/transactions/' + this.merchantId).subscribe((response: any) => {
     
    if (response.length > 0) {
        alert("Transactions available");
        this.merchantId = '';
        this.merchantPayments=response;
      } else {
        alert("No transactions available");
      }
    })
  }


}
