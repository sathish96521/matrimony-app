import { Component } from '@angular/core';
import { CarouselService } from './carousel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'matrimony-app';
  carouselItems;

  constructor(private carouselService: CarouselService) {
    this.carouselItems = carouselService.getItems();
  }
}
