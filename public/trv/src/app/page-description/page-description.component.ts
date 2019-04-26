import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from "@angular/http";
import {} from "googlemaps";

import { PageDescriptionService } from './page-description.service';
import { CommonService } from '../app.service';
import { Photo, InfoPlace } from './page-description.interface';


declare const google: any;
/* Щоб користуватись з карт гугла потрібно
   1.В index.html добавити строку scripts з key
   2.Скачати плагін googlemaps 
   3.Створити файл index.t
   4.Задекларувати переміну google */

@Component({
  selector: 'page-description',
  templateUrl: './page-description.component.html',
  styleUrls: ['./page-description.component.css']
})

export class PageDescription implements OnInit{
    
  /* Перемінні лише для того щоб виводити інформацію в шаблон */
  public title: string;
  public description: string;
  public photoColumn: Array<Photo>= [];

  /* Switcher Video Photo Column  */
  private switcherMedia: boolean = true;

  constructor( private route: ActivatedRoute,
               private descriptionService: PageDescriptionService,
               private commonService: CommonService ){}

  /* Getters Setters */
  private setIDPlace(): void{
    let idPlace = +this.route.snapshot.params['id_place'];
    this.descriptionService.setIdPlace(idPlace);
  }
  private setTitle(newTitle: string): void{
    this.title = newTitle;
  }
  private setDescription(newDescription: string): void{
    this.description = newDescription;
  }
  private setPhotoColumn(newPhoto: Array<Photo>): void{
    for(let i:number = 0; i< newPhoto.length; i++){
        const photo: Photo = {
          title: newPhoto[i].title,
          path_foto: this.commonService.getServerImgDirectory() + newPhoto[i].path_foto
        }
        this.photoColumn.push(photo);
    }
  }
  public inversSwitcherMedia(): void{
    this.switcherMedia = !this.switcherMedia;
  }


  ngOnInit(){
    this.setIDPlace();
    this.infoAboutPlace();
  }

  /* Наповнення сторінки данними коли входжу на неї */
  private infoAboutPlace(){
    this.descriptionService.infoAboutPlace().subscribe((response : Response) => {
        const data: InfoPlace = response.json();
        this.initMap({lat:data.coordinate_x,lng:data.coordinate_y});
        this.setPhotoColumn(data.foto);
        this.setTitle(data.title);
        this.setDescription(data.description);
      });
  }

  private initMap(coordinates: {lat: number,lng: number}): void{
    const lat: number = coordinates.lat;
    const lng: number = coordinates.lng;

    const container: HTMLElement = document.getElementById('map');
    const options = {
        zoom: 7,
        center: { lat: lat, lng: lng },
        disableDefaultUI: true,
        styles: this.commonService.getStyleMap()
    };
    const map = new google.maps.Map(container,options);
    new google.maps.Marker({
        position: { lat: lat, lng: lng },
        map: map
    });
  }

}