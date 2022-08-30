import { Component, Input, OnInit } from '@angular/core';
import { AdressService } from 'src/app/services/adress.service';

@Component({
  selector: 'app-realstate-searchbox',
  templateUrl: './realstate-searchbox.component.html',
  styleUrls: ['./realstate-searchbox.component.css']
})
export class RealstateSearchboxComponent implements OnInit {


  isSelectingRealstateType : boolean = false
  isSelectingRooms : boolean = false

  isSelectingAppartmentSubType : boolean = false
  isSelectingHouseSubType : boolean = false
  isSelectingOtherSubType : boolean = false
  isLocationSearch : boolean = false

  isAllAppartementTypesSelected : boolean = false
  isAllOtherTypesSelected : boolean = false
  isAllHouseTypesSelected : boolean = false

  isAllRealstateTypesSelected : boolean = false

  realstateTypesHasBeenSelected : boolean[] =
   [this.isAllAppartementTypesSelected,this.isAllHouseTypesSelected,this.isAllOtherTypesSelected]

  appartmentTypes : string[] =
  ['דירה','דירת גן','גג/פנטהאוז',
  'דופלקס','דירת נופש',
  'מרתף/פרטר','טריפלקס',
  'יחידת דיור','סטודיו/לופט']

  houseTypes : string[] =
  ['בית פרטי/קוטג׳','דו משפחתי ','משק חקלאי/נחלה  ','משק עזר']

  otherTypes : string[] =
  ['מגרשים','דיור מוגן','בניין מגורים',
  'מחסן','חניה',' קב׳ רכישה/זכות לנכס', 'כללי']

  otherTypesHasBeenChecked : boolean [] = [false,false,false,false,false,false,false]

  houseTypesHasBeenChecked : boolean [] = [false,false,false,false]

  appartmentTypesHasBeenChecked : boolean [] = [false,false,false,false,false,false,false,false,false]

  numberOfAppartmentTypesHasBeenSelected : number = 0
  numberOfHouseTypesHasBeenSelected : number = 0
  numberOfOtherTypesHasBeenSelected : number = 0

  minPrice :any
  maxPrice : any

  minNumberOfRooms  : number = 0
  maxNumberOfRooms  : number = 0

  isSelectingMinNumberOfRooms : boolean = false
  isSelectingMaxNumberOfRooms : boolean = false

  isClickingInsideRooms : boolean = false

  isAdvancedSearch : boolean = false

  adress : string = ''


  streets : string[] = ['תל אביב','תל אביב','תל אביב','תל אביב','תל אביב']
  blocks : string[] = ['תל אביב','תל אביב','תל אביב','תל אביב','תל אביב']
  cities : string[] = ['תל אביב','תל אביב','תל אביב','תל אביב','תל אביב']
  areas : string[] = ['תל אביב','תל אביב','תל אביב','תל אביב','תל אביב']


  streetsToDisplay : string[]
  blocksToDisplay : string[]
  citiesToDisplay : string[]
  areasToDisplay : string[]

  numberOfRooms : number[] = [1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12]

  minNumberOfRoomsList : number[]

  numberOfChanges : number = 0


  constructor(private adressService : AdressService) { }

  ngOnInit(): void {
    this.minNumberOfRoomsList = this.numberOfRooms
  }

  onAdvancedSearchButton(){
    this.isAdvancedSearch = !this.isAdvancedSearch
  }

  numberOfFeatures(event){
   this.numberOfChanges = event
  }

  onMinRooms(min : number){
    this.isSelectingMinNumberOfRooms = false
    this.isClickingInsideRooms = true
    this.minNumberOfRooms = min

  }
  onMaxRooms(max : number){
    this.isSelectingMaxNumberOfRooms = false
    this.isClickingInsideRooms = true
    this.maxNumberOfRooms = max

    this.minNumberOfRoomsList = this.numberOfRooms.filter(v => v < max)

  }

  onMinNumberOfRooms(){
    this.isSelectingMinNumberOfRooms = !this.isSelectingMinNumberOfRooms
    this.isSelectingMaxNumberOfRooms = false
    this.isClickingInsideRooms = true
    this.minNumberOfRooms = 0
  }

  onMaxNumberOfRooms(){
    this.isSelectingMaxNumberOfRooms = !this.isSelectingMaxNumberOfRooms
    this.isSelectingMinNumberOfRooms = false
    this.isClickingInsideRooms = true
    this.maxNumberOfRooms = 0
  }

  onRooms(){
    this.isSelectingRooms = !this.isSelectingRooms
  }
  onRealstateType(){
    this.isSelectingRealstateType = !this.isSelectingRealstateType
  }

  onCloseRooms(){
    if(!this.isClickingInsideRooms){
      this.isSelectingRooms = false
      this.isSelectingMaxNumberOfRooms = false
      this.isSelectingMinNumberOfRooms = false
    }
  }
  onCloseRealStateType(){
    this.isSelectingRealstateType = false
    this.isSelectingHouseSubType = false
    this.isSelectingOtherSubType = false
    this.isSelectingAppartmentSubType = false
  }

  onAppartmentSubType(){
    this.isSelectingHouseSubType = false
    this.isSelectingOtherSubType = false
    this.isSelectingAppartmentSubType = !this.isSelectingAppartmentSubType
  }

  onHouseSubType(){
    this.isSelectingAppartmentSubType = false
    this.isSelectingOtherSubType = false
    this.isSelectingHouseSubType = !this.isSelectingHouseSubType
  }

  onOtherSubType(){
    this.isSelectingAppartmentSubType = false
    this.isSelectingHouseSubType = false
    this.isSelectingOtherSubType = !this.isSelectingOtherSubType
  }

  selectAll(){
    this.isAllRealstateTypesSelected = !this.isAllRealstateTypesSelected

    if(this.isAllRealstateTypesSelected){

      this.isAllAppartementTypesSelected = true
      this.isAllHouseTypesSelected = true
      this.isAllOtherTypesSelected = true

      this.setAllTrue(this.realstateTypesHasBeenSelected)

      this.setAllTrue(this.otherTypesHasBeenChecked)
      this.setAllTrue(this.houseTypesHasBeenChecked)
      this.setAllTrue(this.appartmentTypesHasBeenChecked)

      this.numberOfAppartmentTypesHasBeenSelected = this.appartmentTypesHasBeenChecked.length
      this.numberOfHouseTypesHasBeenSelected = this.houseTypesHasBeenChecked.length
      this.numberOfOtherTypesHasBeenSelected = this.otherTypesHasBeenChecked.length


    }
    else{

      this.numberOfAppartmentTypesHasBeenSelected = 0
      this.numberOfHouseTypesHasBeenSelected = 0
      this.numberOfOtherTypesHasBeenSelected = 0

      this.isAllAppartementTypesSelected = false
      this.isAllHouseTypesSelected = false
      this.isAllOtherTypesSelected = false

      this.setAllFalse(this.realstateTypesHasBeenSelected)

      this.setAllFalse(this.otherTypesHasBeenChecked)
      this.setAllFalse(this.houseTypesHasBeenChecked)
      this.setAllFalse(this.appartmentTypesHasBeenChecked)
    }
  }

  onAppartmentType( index : number){

    this.appartmentTypesHasBeenChecked[index] = !this.appartmentTypesHasBeenChecked[index]

    this.numberOfAppartmentTypesHasBeenSelected = this.countSelectedTypes(this.appartmentTypesHasBeenChecked)

    if(this.isAllArrayTrue(this.appartmentTypesHasBeenChecked)){
      this.isAllAppartementTypesSelected=true
    }
    else{
      this.isAllAppartementTypesSelected = false
    }

  }

  onOtherType( index : number){

    this.otherTypesHasBeenChecked[index] = !this.otherTypesHasBeenChecked[index]

    this.numberOfOtherTypesHasBeenSelected = this.countSelectedTypes(this.otherTypesHasBeenChecked)

    if(this.isAllArrayTrue(this.otherTypesHasBeenChecked)){
      this.isAllOtherTypesSelected=true
    }
    else{
      this.isAllOtherTypesSelected = false
    }

  }

  onHouseType(index : number){
    this.houseTypesHasBeenChecked[index] = !this.houseTypesHasBeenChecked[index]

    this.numberOfHouseTypesHasBeenSelected = this.countSelectedTypes(this.houseTypesHasBeenChecked)
    if(this.isAllArrayTrue(this.houseTypesHasBeenChecked)){
      this.isAllHouseTypesSelected=true
    }
    else{
      this.isAllHouseTypesSelected = false
    }
  }

  stateSearchInput(event){
    if(event.target.value.length > 1){
      this.isLocationSearch = true
      this.streetsToDisplay = this.streets.filter(v => v.includes(event.target.value))
      this.blocksToDisplay = this.blocks.filter(v => v.includes(event.target.value))
      this.citiesToDisplay = this.cities.filter(v => v.includes(event.target.value))
      this.areasToDisplay = this.areas.filter(v => v.includes(event.target.value))
    }
    else {
      this.isLocationSearch = false
      this.streetsToDisplay = this.streets
      this.blocksToDisplay = this.blocks
      this.citiesToDisplay = this.cities
      this.areasToDisplay = this.areas
    }
  }
  onAdress(adress : string){
    this.adress = adress
    this.isLocationSearch = false
  }

  onCloseLocationSearch(){
    this.isLocationSearch = false
  }

  onAllAppartments(){
    this.isAllAppartementTypesSelected = !this.isAllAppartementTypesSelected

    if(this.isAllAppartementTypesSelected){
      this.setAllTrue(this.appartmentTypesHasBeenChecked)
      this.isAllHouseTypesSelected && this.isAllOtherTypesSelected ?
       this.isAllRealstateTypesSelected = true : null

       this.numberOfAppartmentTypesHasBeenSelected = this.appartmentTypesHasBeenChecked.length

    }
    else{
      this.setAllFalse(this.appartmentTypesHasBeenChecked)
      this.isAllRealstateTypesSelected = false
      this.numberOfAppartmentTypesHasBeenSelected = 0

    }
  }

  onAllHouses(){
    this.isAllHouseTypesSelected = !this.isAllHouseTypesSelected

    if(this.isAllHouseTypesSelected){
      this.setAllTrue(this.houseTypesHasBeenChecked)
      this.isAllAppartementTypesSelected && this.isAllOtherTypesSelected ?
      this.isAllRealstateTypesSelected = true : null

      this.numberOfHouseTypesHasBeenSelected = this.houseTypesHasBeenChecked.length
    }
    else{
      this.setAllFalse(this.houseTypesHasBeenChecked)
      this.isAllRealstateTypesSelected = false
      this.numberOfHouseTypesHasBeenSelected = 0


    }
  }

  onAllOthers(){
    this.isAllOtherTypesSelected = !this.isAllOtherTypesSelected


    if(this.isAllOtherTypesSelected){
      this.setAllTrue(this.otherTypesHasBeenChecked)
      this.isAllAppartementTypesSelected && this.isAllHouseTypesSelected ?
      this.isAllRealstateTypesSelected = true : null
      this.numberOfOtherTypesHasBeenSelected = this.otherTypesHasBeenChecked.length

    }
    else{
      this.setAllFalse(this.otherTypesHasBeenChecked)
      this.isAllRealstateTypesSelected = false

      this.numberOfOtherTypesHasBeenSelected = 0

    }
  }


  //functions for check

  isAllArrayTrue(array : boolean[]){

    for(let i=0;i<array.length;i++){
      if(array[i]=== false){
        return false
      }
    }
    return true

  }

  isPartTrue(array : boolean[]){
    for(let i=0;i<array.length;i++){
      if(array[i]=== true){
        return true
      }
    }
    return false
  }

  setAllTrue(array : boolean[]){
    for(let i=0;i<array.length;i++){
      array[i] = true
    }
  }

  setAllFalse(array : boolean[]){
    for(let i=0;i<array.length;i++){
      array[i] = false
    }
  }

  countSelectedTypes(array:boolean[]){
    let count = 0
    for(let i=0 ; i < array.length ; i++){
      if(array[i] === true){
        count ++
      }
    }
    return count
  }
}
