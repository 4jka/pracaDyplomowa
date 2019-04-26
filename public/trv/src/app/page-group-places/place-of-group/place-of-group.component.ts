import { Component } from "@angular/core";
import { Response } from "@angular/http";
import { Place } from "../place-of-group.interface";
import { DataPlaces } from "../data-places.service";
import { ControlMap } from "../control-map.service";
import { PlaceOfGroupService } from "./place-of-group.service";


@Component({
    selector: 'place-of-group',
    templateUrl: './place-of-group.component.html',
    styleUrls: ['./place-of-group.component.css']
})

export class PlaceOfGroup{

  constructor( private dataPlaces :DataPlaces,
               private controlMap :ControlMap,
               private placeGroupService :PlaceOfGroupService ){}
      
      
  deletePlace(place :Place){

    this.controlMap.deleteUnion( place.marker );
    this.controlMap.removeMarker( place.marker );
    this.dataPlaces.deletePlace( place );
 
    this.placeGroupService.deleteGroupPlaces(place.id_place,this.dataPlaces.getIdGroup())
      .subscribe((response : Response) => {});

  }
}