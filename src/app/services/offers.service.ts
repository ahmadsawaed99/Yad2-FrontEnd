import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { offer } from '../models/offer.model';


@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor(private http : HttpClient) { }


  getOffers(){
    return this.offers
  }

  offers : offer[] = [
    {
      id : 1,
      appartmentOwner : 'איתי לוי',
      ownerPhone:'052-8067413',
      realstateTypeName : 'דירה',
      city : 'ראשון לציון' ,
      street : 'החרצית',
      buildingNumber : 9,
      numberOfRooms : 4,
      floor : 5 ,
      size : 98 ,
      price : 2480000,
      lastUpdateDate : 'עודכן היום',
      description : 'דירת 4 חדרים מרווחת ויפה, שטח 98 מ"ר (לפי ארנונה 90 מ"ר). מרפסת שמש חדשה 16 מטר!!! כ"א - צפון המפנק (סלון ומרפסת) ודרום עם הנוף פתוח לפארק. שירותים ומקלחת כפולים, יחידת הורים עם שירותים ומקלחון. שכונה ירוקה, סגורה מכבישים, קרובה לפארק ערים התאומות, החי כיף, פארק הזיכרון, ביה"ס, גנים, מפותחת מאוד בכל הקשור לספורט ופנא',
      realstateCondition :'משופץ',
      entranceDate: 'כניסה גמישה',
      parking : 1 ,
      balconies : 1 ,
      extraFeatures : {
        malit:true,
        mizog : true,
        memad : false,
        sorgeem : false,
        machsan : false,
        gishaLnechim : false,
        meshopetzet : true,
        merohetet : false,
        cosher : false,
        sunHeater : false,
        tadiran : true,
        gamish : false,
      },
      isOpened:false,
      mainImage : 'https://img.yad2.co.il/Pic/202207/03/2_1/o/y2_1_06014_20220703140216.jpeg',
      images : ['https://img.yad2.co.il/Pic/202207/03/2_1/o/y2_3_05250_20220703140226.jpeg','https://img.yad2.co.il/Pic/202207/03/2_1/o/y2_2_07161_20220703140220.jpeg',
      'https://img.yad2.co.il/Pic/202207/03/2_1/o/y2_4_01700_20220703140231.jpeg','https://img.yad2.co.il/Pic/202207/03/2_1/o/y2_6_06078_20220703140240.jpeg',
      'https://img.yad2.co.il/Pic/202207/03/2_1/o/y2_5_03860_20220703140235.jpeg','https://img.yad2.co.il/Pic/202207/03/2_1/o/y2_7_04839_20220703140246.jpeg',
      'https://img.yad2.co.il/Pic/202207/03/2_1/o/y2_7_04839_20220703140246.jpeg','https://img.yad2.co.il/Pic/202207/03/2_1/o/y2_8_03936_20220703140252.jpeg'
    ]

    },
    {
    id : 1,
    appartmentOwner : 'איתי לוי',
    ownerPhone:'052-8067413',
    realstateTypeName : 'דירה',
    city : 'קרית ביאליק' ,
    street : 'הפרפר',
    buildingNumber : 19,
    numberOfRooms : 5,
    floor : 13 ,
    size : 138 ,
    price : 2190000,
    lastUpdateDate : 'עודכן היום',
    description : 'דירת 4 חדרים מרווחת ויפה, שטח 98 מ"ר (לפי ארנונה 90 מ"ר). מרפסת שמש חדשה 16 מטר!!! כ"א - צפון המפנק (סלון ומרפסת) ודרום עם הנוף פתוח לפארק. שירותים ומקלחת כפולים, יחידת הורים עם שירותים ומקלחון. שכונה ירוקה, סגורה מכבישים, קרובה לפארק ערים התאומות, החי כיף, פארק הזיכרון, ביה"ס, גנים, מפותחת מאוד בכל הקשור לספורט ופנא',
    realstateCondition :'משופץ',
    entranceDate: 'כניסה גמישה',
    parking : 1 ,
    balconies : 1 ,
    extraFeatures : {
      malit:true,
      mizog : true,
      memad : false,
      sorgeem : false,
      machsan : false,
      gishaLnechim : false,
      meshopetzet : true,
      merohetet : false,
      cosher : false,
      sunHeater : false,
      tadiran : true,
      gamish : false,
    },
    isOpened:false,
    mainImage : 'https://img.yad2.co.il/Pic/202207/03/2_1/o/y2_1_06014_20220703140216.jpeg',
    images : ['https://img.yad2.co.il/Pic/202207/03/2_1/o/y2_3_05250_20220703140226.jpeg','https://img.yad2.co.il/Pic/202207/03/2_1/o/y2_2_07161_20220703140220.jpeg',
    'https://img.yad2.co.il/Pic/202207/03/2_1/o/y2_4_01700_20220703140231.jpeg','https://img.yad2.co.il/Pic/202207/03/2_1/o/y2_6_06078_20220703140240.jpeg',
    'https://img.yad2.co.il/Pic/202207/03/2_1/o/y2_5_03860_20220703140235.jpeg','https://img.yad2.co.il/Pic/202207/03/2_1/o/y2_7_04839_20220703140246.jpeg',
    'https://img.yad2.co.il/Pic/202207/03/2_1/o/y2_7_04839_20220703140246.jpeg','https://img.yad2.co.il/Pic/202207/03/2_1/o/y2_8_03936_20220703140252.jpeg'
  ]

  }


  ]
}
