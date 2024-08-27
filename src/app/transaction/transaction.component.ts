import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
})
export class TransactionComponent {
  public items: any = [];
  public total !: number;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getCart()
  }

  getCart() {
    this.apiService.getCart().subscribe(response => {
      this.items = response;
      this.total = this.apiService.getTotalPrice();
    })
  }

  removeItem(item: any) {
    this.apiService.deleteItemOnCart(item);
  }

  deleteItems() {
    this.apiService.deleteItems();
  }
}
