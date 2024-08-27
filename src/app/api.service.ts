import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import axios, { Axios } from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // private apiUrl = 'https://fakestoreapi.com';
  private apiUrl = 'https://dummyjson.com';

  constructor() { }

  getItems() {
    return axios.get(`${this.apiUrl}/products`);
  }

  getItemById(id: string) {
    return axios.get(`${this.apiUrl}/products/${id}`);
  }

  public cart: any = []
  public items = new BehaviorSubject<any>([])

  getCart() {
    return this.items.asObservable();
  }

  setCart(items: any) {
    this.cart.push(...items);
    this.items.next(this.cart);
  }

  addToCart(item: any) {
    const existingProduct = this.cart.find((items: any) => items.id === item.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
      existingProduct.total = existingProduct.price * existingProduct.quantity;
    } else {
      this.cart.push({ ...item, quantity: 1, total: item.price });
    }

    this.items.next(this.cart);
    this.getTotalPrice();
  }

  getTotalPrice(): number {
    let allTotal = 0;
    this.cart.map((i: any) => {
      allTotal += i.total
    })
    return allTotal
  }

  deleteItemOnCart(items: any) {
    this.cart.map((i: any, j: any) => {
      if (items.id === i.id) {
        this.cart.splice(j, 1)
      }
    })
    this.items.next(this.cart)
  }

  deleteItems() {
    this.cart = []
    this.items.next(this.cart)
  }
}
