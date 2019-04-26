import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { CommonService } from "../app.service";

@Injectable()
export class PageSearchService{

    constructor(private http: Http,
                private commonService: CommonService){}    
                
    getPlaceGridRandom(){
        return this.http.get(this.commonService.getServerUrl() + '/foto');
    }

    /* Search Two Fields */
    getPlaceLocaionAndInterest(table,cryteria){
        console.log(table);
        switch(table){
            case 1:     
                return this.http.get(this.commonService.getServerUrl() +
                    '/placesByRegionAndCategory?id_region='+ cryteria.id_location + 
                    '&id_category=' + cryteria.id_interest);
            break;
            case 2: 
                return this.http.get(this.commonService.getServerUrl() +
                    '/placesByCityAndCategory?id_city='+ cryteria.id_location + 
                    '&id_category=' + cryteria.id_interest);
            break;
        }
    }

    /* Only Click Item List */
    getPlaceLOnlyInterest(idChoosedInterest: number){
        return this.http.get(this.commonService.getServerUrl() + '/placesByCategory?id_category=' + idChoosedInterest);
    }
    getPlaceOnlyLocation(table,id){
        switch(table){
            case 1:     
              return this.http.get(this.commonService.getServerUrl() + '/placesByRegion?id_region=' + id);
            break;
            case 2: 
              return this.http.get(this.commonService.getServerUrl() + '/placesByCity?id_city=' + id);
            break;
        }
    }
    
    /* Build List */
    getDataListInterest(interestValue: string){
        const data = (interestValue !== '') ? 
            this.http.get(this.commonService.getServerUrl() + '/searchCategory?valueSearch=' + interestValue):
            this.http.get(this.commonService.getServerUrl() + '/randCategories');
        return data;
    }
    getDataListLocation(locationValue: string){
        const data = (locationValue !== '') ? 
            this.http.get(this.commonService.getServerUrl() + '/searchPlace?valueSearch=' + locationValue):
            this.http.get(this.commonService.getServerUrl() + '/regions');
        return data;
    }
}