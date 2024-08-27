import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  public totalItems: number = 0;
  public cart: any = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getCart()
  }

  getCart() {
    this.apiService.getCart().subscribe(response => {
      this.cart = response;
      this.totalItems = this.cart.reduce((sum: number, item: any) => sum + item.quantity, 0);
    })
  }
}
