import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { CommonService } from "../../app.service";


@Injectable()
export class PageDescriptionService{

    /* Place id я використовую щоб отримти всю інформацію про місце і 
     додавати до вибранної з лісти групи */
    idPlace :number;

    setIdPlace(idPlace :number){
      this.idPlace = idPlace;
    }
    getIDPlace(): number{
      return this.idPlace;
    }
    constructor(private http: Http,private commonService: CommonService){}    
                
    infoAboutPlace(){
      return this.http.get(this.commonService.getServerUrl() + '/placeById?id_place=' + this.getIDPlace());
    }

}