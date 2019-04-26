import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { CommonService } from "../../app.service";
import { AuthGuard } from "../../auth-quard.service";


@Injectable()
export class ListGroupService{

  constructor(private http: Http,
              private authGuard :AuthGuard,
              private commonService: CommonService){}    
                
  buildGroupsList(idUser: number){
      const headers = new Headers({
        'jwt': this.authGuard.getToken()
      });
      return this.http.get(this.commonService.getServerUrl() + '/groupByUserId?id_user=' + idUser,{
          headers: headers
      });
  }

  /* Коли в input вписуєш назву */
  createGroup(idUser: number,nameGroup: string){
      const headers = new Headers({
        'jwt': this.authGuard.getToken()
      });
      return this.http.post(this.commonService.getServerUrl() + '/addGroup',{
          id_user: idUser,
          name_group: nameGroup
      },{ headers });
  }
  
  deleteGroup(idGroup: number){
    const headers = new Headers({
      'jwt': this.authGuard.getToken()
    });
    return this.http.post(this.commonService.getServerUrl() + '/deleteGroup',{
        id_group: idGroup,
    },{ headers });
  }
}