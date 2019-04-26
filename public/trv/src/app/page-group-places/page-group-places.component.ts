import { Component, OnInit } from '@angular/core';
import { Response } from "@angular/http";
import { PageGroupPlacesService } from './page-group-places.service';
import { ControlMap } from './control-map.service';
import { DataPlaces } from './data-places.service';
import { Place } from './place-of-group.interface';


@Component({
  selector: 'page-group-places',
  templateUrl: './page-group-places.component.html',
  styleUrls: ['./page-group-places.component.css']
})

export class PageGroupPlaces implements OnInit {

  private switcherMode :boolean;
  private mainMarker :Place;

  constructor( private pageGroupPlacesService :PageGroupPlacesService,
               private controlMap :ControlMap,
               private dataPlaces :DataPlaces )
  {
    this.switcherMode = true;
  }

  ngOnInit()
  {
    this.controlMap.initMap();
  }

  /* Setters */
  public setMainMarker(place :Place) :void
  {
    this.mainMarker = place;
  }
  public clearMainMarker() :void
  {
    this.mainMarker = undefined;
  }
  public addUnion(place :Place) :void
  {
    this.mainMarker.markerUnion.push(place);
  }
  public setIdGroup(idGroup :number)
  {
    this.dataPlaces.setIdGroup(idGroup);
  }

  /* Getters*/
  public getMainMarker() :google.maps.Marker 
  {
    if(this.mainMarker === undefined) return ;

    return this.mainMarker.marker;
  }
  public getMainId() :number 
  {
    if(this.mainMarker === undefined) return ;

    return this.mainMarker.id_place;
  }
  /* Clear */
  public deleteUnion(place: Place)
  {
        let index = this.mainMarker.markerUnion.indexOf( place );
        if( index !== -1)  this.mainMarker.markerUnion.splice(index, 1);
  }

  public initUserTravel() :void
  {
    this.pageGroupPlacesService
      .getGroupPlaces(this.dataPlaces.getIdGroup())
        .subscribe((response :Response) => 
        { 
         
          const data = response.json();
          console.log( 'init' );
          console.log( data );
          this.clearMap();
          this.dataPlaces.setPlaces( data );
          this.fillMap();
          this.runModes( this.dataPlaces.getPlaces() );

        }); 
  }

  private clearMap() :void
  {
    this.clearMainMarker();
    this.controlMap.removeMarkers( this.dataPlaces.getPropertyPlaces('marker') );
    this.controlMap.clearUnion();
    this.dataPlaces.clearPlaces();
  }
  private fillMap()
  {
    this.controlMap.addMarkers( this.dataPlaces.getPropertyPlaces('marker') );
    this.controlMap.painRouteMarkers( this.dataPlaces.getPropertyPlaces('marker','markerUnion') );
    this.controlMap.addinfoWindow( this.dataPlaces.getPropertyPlaces('marker', 'name_place') );
  }
  //end


  /* Modes */
  public runModes(places :Array<Place>)
  {
    places.forEach((place :Place) => 
    {
      place.marker.addListener('click', () => 
      {
        if( this.getMainMarker() )
        {
          this.controlMap.setDefaulIcon( this.getMainMarker() );

          if(this.switcherMode){
            this.addUnion(place);
            this.addUnionDataBase(this.dataPlaces.getIdGroup(), this.getMainId(), place.id_place);
            this.controlMap.painRouteMarker(this.getMainMarker(), place.marker);

          }else{
            this.deleteUnion(place);
            this.deleteUnionDataBase(this.dataPlaces.getIdGroup(), this.getMainId(), place.id_place);
            this.controlMap.clearRouteMarker( this.getMainMarker(), place.marker);
          }
          this.controlMap.setGreenIcon(place.marker);
          this.setMainMarker(place);
        }
        else
        {
          this.controlMap.setGreenIcon(place.marker);
          this.setMainMarker(place);
        }
      });

      place.marker.addListener('rightclick', () => 
      {
        this.controlMap.setDefaulIcon( this.getMainMarker() );
        this.controlMap.setGreenIcon(place.marker);
        this.setMainMarker(place);
      });

    });
  }

  modeCreateTravel() :void 
  {
    this.switcherMode = true;

  }
  modeDeleteTravel() :void 
  {
    this.switcherMode = false;
  }

  addUnionDataBase(idGroup :number,idMainPlace :number,idAddingPlace :number) :void
  {
    this.pageGroupPlacesService
      .addUnionDataBase(idGroup,idMainPlace,idAddingPlace)
        .subscribe((response :Response) => {}); 
  }

  deleteUnionDataBase(idGroup :number,idMainPlace :number,idAddingPlace :number) :void
  {
    this.pageGroupPlacesService
      .deleteUnionDataBase(idGroup,idMainPlace,idAddingPlace)
        .subscribe((response :Response) => {}); 
  }

}





