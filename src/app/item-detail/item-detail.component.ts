import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Observable, of, switchMap } from 'rxjs';
@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
})
export class ItemDetailComponent implements OnInit {
  itemId: string | null = null;
  itemDetails: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.itemId = params.get('id');
      if (this.itemId) {
        this.apiService.getItemById(this.itemId).then(item => {
          this.itemDetails = item.data;
        })
      }
    });
  }

  getStars(rating: number): number[] {
    return Array(Math.round(rating)).fill(0);
  }

  addCart(item: any) {
    this.apiService.addToCart(item);
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
