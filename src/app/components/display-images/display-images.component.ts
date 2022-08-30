import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-display-images',
  templateUrl: './display-images.component.html',
  styleUrls: ['./display-images.component.css']
})
export class DisplayImagesComponent implements OnInit {

  config: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  };


  constructor() { }



  @Input() images :string[] = ['']

  @Output() closeDisplay  = new EventEmitter();

  // images : string[] = ['https://img.yad2.co.il/Pic/202207/21/2_1/o/y2_1_06870_20220721121121.jpeg','https://img.yad2.co.il/Pic/202207/21/2_1/o/y2_5_07913_20220721121134.jpeg']


  image : string = ''
  index : number = 0

  ngOnInit(): void {

  }

  onClose(){
    this.closeDisplay.emit()
  }

}
