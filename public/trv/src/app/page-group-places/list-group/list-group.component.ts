import { Component, OnInit } from "@angular/core";
import { ListGroupService } from "./list-group.service";
import { Response } from "@angular/http";
import { Router } from '@angular/router';
import { ListItemGroup } from "./list-group.interface";
import { PageGroupPlaces } from "../page-group-places.component";
import { AuthGuard } from "../../auth-quard.service";

@Component({
    selector: 'list-group',
    templateUrl: './list-group.component.html',
    styleUrls: ['./list-group.component.css']
})

export class ListGroup implements OnInit{

  listGroup: Array<ListItemGroup> = [];

  constructor(private listGroupService :ListGroupService,
              private pageGroupPlaces :PageGroupPlaces,
              private authGuard :AuthGuard,
              private router :Router){}
     
  deleteItemListGroup(item :ListItemGroup)
  {
    let position = this.listGroup.indexOf(item);
    this.listGroup.splice(position, 1);
  }            

  clearInput()
  {
    (<HTMLInputElement>document.querySelector('.addGroupField')).value = "";
  }  

  ngOnInit(){
      this.buildGroupsList();
  }         
 
  /* Під час створення сторінки */
  private buildGroupsList(){
      this.listGroupService.buildGroupsList(this.authGuard.getIdUser())
        .subscribe((response : Response) => {
          const data = response.json();
          this.listGroup = data;
        });
  }

  /* Коли в input вписуєш назву */
  createGroup(nameGroup: string): void{
    this.listGroupService.createGroup(this.authGuard.getIdUser(),nameGroup).subscribe((response : Response) => {
      const newGroupid: number = response.json().insertId;
      const newGroup: ListItemGroup = {
        id_group: newGroupid,
        name_group: nameGroup
      }
      this.listGroup.push(newGroup);

      this.clearInput();
    });
  }

  /* Передаю id групи */
  setMarkersGroup(idGroup :number){
    this.pageGroupPlaces.setIdGroup(idGroup);
    this.pageGroupPlaces.initUserTravel();
  }

  deleteGroup(item :ListItemGroup, event :Event)
  {
    event.stopPropagation();
    this.deleteItemListGroup(item);
    this.listGroupService.deleteGroup(item.id_group)
      .subscribe((response : Response) => { });
  }

  openGroup(idGroup){
    this.router.navigate(['group/places',idGroup]);
  }
}