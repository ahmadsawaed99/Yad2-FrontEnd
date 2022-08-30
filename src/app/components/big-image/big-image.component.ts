import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-image',
  templateUrl: './big-image.component.html',
  styleUrls: ['./big-image.component.css']
})
export class BigImageComponent implements OnInit {

  constructor() { }

  @Input() image : string = ''
  ngOnInit(): void {
  }

}
