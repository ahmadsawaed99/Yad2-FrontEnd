import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdressService {

  constructor(private http:HttpClient) { }


  observable = new Observable((ob)=>{
    setTimeout(()=>ob.next(this.getCities),3000)
    setTimeout(()=>ob.complete(),4000)

  })

  getCities(){
    return this.http.get('https://data.gov.il/api/3/action/datastore_search?resource_id=bf185c7f-1a4e-4662-88c5-fa118a244bda&limit=500000').pipe(
      map((res:any)=>{
        const cites : string[] =[]
        const streets : string[] = []
        const areas : string[] = []
        let all : any = null
        for(let key in res.result.records){
          if(res.result.records.hasOwnProperty(key)){
            let city = res.result.records[key]

            cites.push(city["city_name"].trim())
            streets.push(city["street_name"].trim() +' , ' + city["city_name"].trim())
            areas.push(city["region_name"].trim())

          }
        }
        all = [cites.filter(function(el, index , self){
          return index === self.indexOf(el)
        }).sort(),

          areas.filter(function(el, index , self){
          return index === self.indexOf(el)
        }).sort(),


        streets
      ]
        return all
      })
    )
  }
}

// {
//   "_id": 1,
//   "region_code": 11,
//   "region_name": "ירושלים ",
//   "city_code": 10,
//   "city_name": "תירוש ",
//   "street_code": 9000,
//   "street_name": "תירוש ",
//   "street_name_status": "official ",
//   "official_code": 9000
// }
