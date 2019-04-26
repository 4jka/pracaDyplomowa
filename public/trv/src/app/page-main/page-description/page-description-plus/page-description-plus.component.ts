import { Component, OnInit } from '@angular/core';
import { Response } from "@angular/http";
import { Router } from '@angular/router';

import { PageDescriptionPlusService } from './page-description-plus.service';
import { ListGroup } from './page-description.interface';
import { PageDescriptionService } from '../page-description.service';
import { AuthGuard } from 'src/app/auth-quard.service';


@Component({
  selector: 'page-description-plus',
  templateUrl: './page-description-plus.component.html',
  styleUrls: ['./page-description-plus.component.css']
})

export class PageDescriptionPlus implements OnInit{
  
  public listGroup: Array<ListGroup> = [];
  
  constructor( private plusService :PageDescriptionPlusService,
               private pageDescriptionService :PageDescriptionService,
               private authGuard :AuthGuard,
               private router: Router ){}
  
  clearInput()
  {
    (<HTMLInputElement>document.querySelector('.add-group-field')).value = "";
  }   

  ngOnInit()
  {
    (<HTMLElement>document.querySelector('.add-group-field')).focus();
    this.buildGroupsList();
  }
  
  buildGroupsList()
  {
    this.plusService.buildGroupsList(this.authGuard.getIdUser()).subscribe((response : Response) => {
      const data: Array<ListGroup> = response.json();
      this.listGroup = data;
    });
  }

  /* Коли в input вписуєш назву */
  createGroup(nameGroup: string) :void
  {
    this.plusService.createGroup(this.authGuard.getIdUser(),nameGroup).subscribe((response : Response) => {
      const newGroupid: number = response.json().insertId;
      const newGroup: ListGroup = {
        id_group: newGroupid,
        name_group: nameGroup
      }
      this.listGroup.push(newGroup);

      this.clearInput();
    });
  }
  
  /* Додаваня місця до групи */
  addPlacesGroup(item: ListGroup) :void 
  {
    const idGroup = item.id_group;
    this.plusService.addPlacesGroup(this.pageDescriptionService.getIDPlace(),idGroup)
      .subscribe((response : Response) => 
      {
        const data = response.json();
      
        if(data.success === false){
          console.log('Miejsce juz dodane do grupy');
        }else{
          console.log('Miejsce dodane');
        }
      });
  }

  hideGroupsList() :void 
  {
    setTimeout(() => {
      this.router.navigate(['/description',this.pageDescriptionService.getIDPlace()]);
    },500);
  }

}