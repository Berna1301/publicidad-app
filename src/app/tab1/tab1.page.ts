import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  constructor() {}

  ngOnInit() {
    // Inicia el autoplay del swiper al cargar el componente
    const swiperContainer = document.querySelector('swiper-container');
    if (swiperContainer) {
      swiperContainer.swiper.autoplay.start();
    }
  }

  swiperSlideChanged(e: any) {
    console.log('changed: ', e);
  }
}
