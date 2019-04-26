import { Injectable } from "@angular/core";
import { AuthGuard } from "../../auth-quard.service";
import { Http, Headers } from "../../../../node_modules/@angular/http";
import { CommonService } from "../../app.service";

@Injectable()
export class PlaceOfGroupService{

  constructor(private http: Http,
              private commonService: CommonService,
              private authGuard :AuthGuard){}    
               
  deleteGroupPlaces(idPlace :number,IdGroup :number)
  {
    const headers = new Headers({
      'jwt': this.authGuard.getToken()
    });
    
    return this.http
      .post( 
        this.commonService.getServerUrl() + '/deletePlaceFromGroup',
        {
          id_group: IdGroup,
          id_place: idPlace
        },
        { headers }
      );
  }

}