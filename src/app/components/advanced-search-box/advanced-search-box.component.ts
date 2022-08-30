import { DatePipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppartmentFeatures } from 'src/app/models/appartmentFeatures.model';

@Component({
  selector: 'app-advanced-search-box',
  templateUrl: './advanced-search-box.component.html',
  styleUrls: ['./advanced-search-box.component.css']
})
export class AdvancedSearchBoxComponent implements OnInit {



  @Output() passAppartmetFeatures = new EventEmitter<AppartmentFeatures>()
  @Output() passNumberOfChanges = new EventEmitter<number>()

  date : Date = new Date()
  constructor(private datePipe :DatePipe) { }

  dd = this.datePipe.transform(this.date,'yyyy-MM-dd')
  numberOfFloors : number[] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

  minNumberOfFloorsList :number[]

  isSelectingMinFloor : boolean = false
  isSelectingMaxFloor : boolean = false


  appartmentFeatures : AppartmentFeatures

  numberOfChanges : number

  ngOnInit(): void {
    this.minNumberOfFloorsList = this.numberOfFloors

    this.numberOfChanges = 0


    this.appartmentFeatures = {
      chnia : null,
      malit : null,
      mizog :null,
      merpeset : null,
      memad : null ,
      sorgeem : null,
      machsan : null,
      gishaLnechim : null,
      meshopetzet : null,
      merohetet : null,
      bladiot : null,
      minFloor : null,
      maxFloor : null,
      minSize : null,
      maxSize : null,
      entranceDate : null,
      immediateEntrance : null,
      freeTextSearch : null
    }

  }
  onAll(){
    this.numberOfChanges = this.countChanges()

    this.passNumberOfChanges.emit(this.numberOfChanges)
    this.passAppartmetFeatures.emit(this.appartmentFeatures)
  }


  onSearch(){
    this.passNumberOfChanges.emit(this.numberOfChanges)
    this.passAppartmetFeatures.emit(this.appartmentFeatures)
    console.log(this.appartmentFeatures)
  }

  onMinFloor(){
    this.isSelectingMinFloor = true
    this.isSelectingMaxFloor = false
  }

  onMaxFloor(){
    this.isSelectingMinFloor = false
    this.isSelectingMaxFloor = true
  }

  onAllFloors(i){

    if(i === 1 ){
      this.appartmentFeatures.minFloor = null
      this.isSelectingMinFloor = false
    }
    else{
      this.appartmentFeatures.maxFloor = null
      this.isSelectingMaxFloor = false
    }
    this.numberOfChanges = this.countChanges()

  }

  onBasement(i){
    if(i === 1 ){
      this.appartmentFeatures.minFloor = -1
      this.isSelectingMinFloor = false
      this.numberOfChanges = this.countChanges()

    }
    else{
      this.appartmentFeatures.maxFloor = -1
      this.isSelectingMaxFloor = false
      this.minNumberOfFloorsList = []
      this.numberOfChanges = this.countChanges()

    }

  }

  onFloor(i,floor){

    if(i === 1 ){
      this.appartmentFeatures.minFloor = floor
      this.isSelectingMinFloor = false

      this.onAll()
    }
    else{
      this.appartmentFeatures.maxFloor = floor
      this.isSelectingMaxFloor = false
      this.minNumberOfFloorsList = this.numberOfFloors.filter(v => v<floor)

      this.onAll()
    }




  }

  onCloseFloor(i){
    if (i === 1 ){
      this.isSelectingMinFloor = false
      this.onAll()
    }
    else{
      this.isSelectingMaxFloor = false
      this.onAll()
    }
  }

  onFloorArrow(i){
    if(i === 1){
      this.isSelectingMinFloor = !this.isSelectingMinFloor
    }
    else {
      this.isSelectingMaxFloor = !this.isSelectingMaxFloor
    }
  }

  clear(){
    this.appartmentFeatures = {
      chnia : null,
      malit : null,
      mizog :null,
      merpeset : null,
      memad : null ,
      sorgeem : null,
      machsan : null,
      gishaLnechim : null,
      meshopetzet : null,
      merohetet : null,
      bladiot : null,
      minFloor : null,
      maxFloor : null,
      minSize : null,
      maxSize : null,
      entranceDate : null,
      immediateEntrance : null,
      freeTextSearch : null
    }
    this.onAll()
  }

  countChanges(){
    const booleanProperties = [this.appartmentFeatures.chnia,
      this.appartmentFeatures.malit,this.appartmentFeatures.mizog,
      this.appartmentFeatures.merpeset,this.appartmentFeatures.memad,
      this.appartmentFeatures.sorgeem,this.appartmentFeatures.machsan,
      this.appartmentFeatures.gishaLnechim,this.appartmentFeatures.meshopetzet,
      this.appartmentFeatures.merohetet,this.appartmentFeatures.bladiot,this.appartmentFeatures.immediateEntrance]

    const floorAndSize =
    [this.appartmentFeatures.minFloor,this.appartmentFeatures.maxFloor,
      this.appartmentFeatures.minSize,this.appartmentFeatures.maxSize]

    const EntranceDate = this.appartmentFeatures.entranceDate

    const Text = this.appartmentFeatures.freeTextSearch

    let count = 0

    for(let i=0 ; i< 12 ; i ++){
      if (booleanProperties[i] === true){
        count ++
      }
    }

    if((floorAndSize[0] !== null || floorAndSize[1] !== null)){
      count ++
    }

    if(floorAndSize[2] + floorAndSize[3] > 0 || floorAndSize[2] > 0 || floorAndSize[3] > 0){
      count ++
    }

    if(EntranceDate !== null){
      count ++
    }
    if(Text !==null){
      if(Text.length>0){
        count ++
      }
    }

    return count

  }

}
