import { Injectable } from '@angular/core';
import { CarouselItem } from './carousel-item.model';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  private carouselItems: CarouselItem[] = [
    {
      id: 1,
      name: 'John Doe',
      address: '123 Main St, City',
      imageUrl: 'assets/image1.jpg'
    },
    // Add more items here
  ];

  getItems(): CarouselItem[] {
    return this.carouselItems;
  }
}
