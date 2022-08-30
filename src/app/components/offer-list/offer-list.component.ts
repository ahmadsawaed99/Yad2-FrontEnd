import { Component, OnInit,OnChanges, Input } from '@angular/core';
import { offer } from 'src/app/models/offer.model';
import { OffersService } from 'src/app/services/offers.service';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent implements OnInit {

  constructor(private offerService :OffersService ) { }

  @Input() someHtml: string;

  isSortingBy : boolean = false
  isFiltering : boolean = false

  SortedByDate : boolean = true
  SortedByLowPrice : boolean = false
  SortedByHighPrice : boolean = false

  filterWithPrice : boolean = false
  filterWithPicture : boolean = false

  nu : boolean[] = [true,true,true]

  isVeiwingGallery : boolean = false


  sortedBy : string = 'לפי תאריך'

  offers : offer[]

  ngOnInit(): void {
    this.offers = this.offerService.getOffers();
  }

  onCloseGallery(){
    this.isVeiwingGallery = false
  }

  onVeiwingGallery(){
    this.isVeiwingGallery = true
  }

  ngOnChanges(){
    console.log(this.someHtml)
  }


  onOfferContainer(index : number){
    this.offers[index].isOpened = !this.offers[index].isOpened
  }

  onSortBy(){
    this.isSortingBy = !this.isSortingBy
  }

  onFilter(){
    this.isFiltering = !this.isFiltering
  }

  closeFilter(){
    this.isFiltering = false
  }
  closeSortBy(){
    this.isSortingBy = false
  }

  sortByDate(){
    this.SortedByDate = true
    this.SortedByLowPrice = false
    this.SortedByHighPrice = false
    this.isSortingBy = false
    this.sortedBy = 'לפי תאריך'
  }

  sortByLowPrice(){
    this.SortedByLowPrice = true
    this.SortedByHighPrice = false
    this.SortedByDate = false
    this.isSortingBy = false

    this.sortedBy = 'מחיר - מהזול ליקר'
  }

  sortByHighPrice(){
    this.SortedByHighPrice = true
    this.SortedByLowPrice = false
    this.SortedByDate = false
    this.isSortingBy = false

    this.sortedBy = 'מחיר - מהיקר לזול'
  }

  clearFilter(){
    this.filterWithPicture = false
    this.filterWithPrice = false
  }

}
