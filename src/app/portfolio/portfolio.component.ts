import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  imagesURL: string[] = [
    './assets/port1.png',
    './assets/port2.png',
    './assets/port3.png',
    './assets/port4.png',
    './assets/port5.png',
    './assets/port6.png',
  ];
  flag: boolean = true;
  currentImage: number = 0;
  closeLightBox(e: Event): void {
    e.stopPropagation();
    this.flag = true;
  }
  openLightBox(): void {
    this.flag = false;
  }
  currentImageIndex(currentIndex: number): void {
    this.currentImage = currentIndex;
  }
  imgLightBox(e: Event): void {
    e.stopPropagation();
  }
}
