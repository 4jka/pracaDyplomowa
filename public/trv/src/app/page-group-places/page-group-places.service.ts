import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";

import { CommonService } from "../app.service";
import { AuthGuard } from "../auth-quard.service";

@Injectable()
export class PageGroupPlacesService {

  constructor ( private http :Http, 
                private commonService :CommonService,
                private authGuard :AuthGuard ) {}    

  getGroupPlaces(IdGroup :number)
  {
    const headers = new Headers({
      'jwt': this.authGuard.getToken()
    });
    return this.http
      .get( this.commonService.getServerUrl() + '/coordinateByGroupId?id_group=' + IdGroup ,{
        headers:headers
      });
  }

  addUnionDataBase(idGroup :number,idMainPlace :number,idAddingPlace :number)
  {
    const headers = new Headers({
      'jwt': this.authGuard.getToken()
    });
    return this.http
      .post( this.commonService.getServerUrl() + '/addUnionPoint',
      {
        id_group: idGroup,
        id_place: idMainPlace,
        union_point: idAddingPlace
      },
      { headers}
    );
  }

  deleteUnionDataBase(idGroup :number,idMainPlace :number,idAddingPlace :number)
  {
    const headers = new Headers({
      'jwt': this.authGuard.getToken()
    });
    return this.http
      .post( this.commonService.getServerUrl() + '/deleteUnion',
      {
        id_group: idGroup,
        id_place: idMainPlace,
        union_point: idAddingPlace
      },
      { headers}
    );
  }

}







