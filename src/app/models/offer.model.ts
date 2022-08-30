import { AppartmentExtraFeatures } from "./appartmentExtraFeatures.model"

export interface offer{
  id:number,
  appartmentOwner:string,
  ownerPhone:string,
  realstateTypeName:string
  city:string,
  street:string,
  buildingNumber:number,
  numberOfRooms:number,
  floor:any,
  size:number,
  price:number,
  lastUpdateDate : string,
  description:string,
  realstateCondition : string,
  entranceDate : string,
  parking : number,
  balconies : number,
  extraFeatures:AppartmentExtraFeatures,
  mainImage : string,
  images : string[],
  isOpened : boolean
}
