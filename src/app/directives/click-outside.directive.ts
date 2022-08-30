import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Output,EventEmitter, Inject, AfterViewInit } from '@angular/core';
import { filter, fromEvent } from 'rxjs';


@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {

  constructor(private el : ElementRef) { }


  @Output() clickOutSide = new EventEmitter();
  @HostListener('document:click',['$event.target'])
  onClick(target : any){
    const clickedInSide = this.el.nativeElement.contains(target)

    if(!clickedInSide){
      this.clickOutSide.emit(target)

    }
  }





}
