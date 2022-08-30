import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-images-gallery',
  templateUrl: './images-gallery.component.html',
  styleUrls: ['./images-gallery.component.css']
})
export class ImagesGalleryComponent implements OnInit {

  constructor() { }

  @Input() images :string[] = ['']
  @Input() mainImage : string = ''
  allImages :string[]
//   images : string[] = ['https://img.yad2.co.il/Pic/202207/21/2_1/o/y2_1_06870_20220721121121.jpeg'
//   ,'https://img.yad2.co.il/Pic/202207/21/2_1/o/y2_5_07913_20220721121134.jpeg',
//   'https://img.yad2.co.il/Pic/202207/21/2_1/o/y2_5_07913_20220721121134.jpeg',
//   'https://img.yad2.co.il/Pic/202207/21/2_1/o/y2_5_07913_20220721121134.jpeg',
//   'https://img.yad2.co.il/Pic/202207/21/2_1/o/y2_5_07913_20220721121134.jpeg',
//   'https://img.yad2.co.il/Pic/202207/21/2_1/o/y2_5_07913_20220721121134.jpeg'
// ]


  isVeiwingImages : boolean = false

  @Output() closeGallery  = new EventEmitter();

  ngOnInit(): void {
    this.allImages = this.images
    this.allImages.push(this.mainImage)
  }
  onImage(){

    this.isVeiwingImages = true
  }

  onCloseDisplay(){
    this.isVeiwingImages = false
  }

  onCloseGallery(){
    this.closeGallery.emit()
  }

}
