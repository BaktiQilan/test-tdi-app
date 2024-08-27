import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  items: any[] = [];
  search: string = ''
  filteredItems: any[] = []


  constructor(private apiService: ApiService, private router: Router) { }

  filter(): any[] {
    if (!this.search) {
      return this.items;
    } else {
      return this.items.filter((item) => {
        return item.title.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  }

  ngOnInit() {
    this.getItems()
  }

  getItems() {
    this.apiService.getItems().then(response => {
      this.items = response.data.products;
      this.items.forEach((i: any) => {
        Object.assign(i, { quantity: 1, total: i.price })
      })
    })
  }

  addCart(item: any) {
    this.apiService.addToCart(item);
  }

  viewDetails(itemId: number) {
    this.router.navigate(['/item-detail', itemId]);
  }

  nextSlide(id: number) {
    const carousel = document.querySelector(`#carouselExample${id}`) as HTMLElement;
    if (carousel) {
      const carouselInstance = new (window as any).bootstrap.Carousel(carousel);
      carouselInstance.next();
    }
  }

  prevSlide(id: number) {
    const carousel = document.querySelector(`#carouselExample${id}`) as HTMLElement;
    if (carousel) {
      const carouselInstance = new (window as any).bootstrap.Carousel(carousel);
      carouselInstance.prev();
    }
  }
}
