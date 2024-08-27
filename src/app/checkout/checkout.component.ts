import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
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
}
