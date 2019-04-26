import { Place } from "./place-of-group.interface";
import { CommonService } from "../app.service";

/* Google Api */
declare const google :any;

export class ControlMap {

    private map :google.maps.Map;
    private directionsDisplays :Array<any>;
  
    constructor()
    {
      this.directionsDisplays = [];
    }
  
    /* Getters*/
    public getMap() :google.maps.Map
    {
      return this.map;
    }
  
    /* Work With Variables */
    public addDirectionDislays(directionsDisplay :google.maps.DirectionsRenderer) :void
    {
      this.directionsDisplays.push(directionsDisplay);
    }
  
  
    /* Map */  
    public initMap() :void
    {
      let container :HTMLElement = document.getElementById('map');
      let style = new CommonService().getStyleMap();
      let options = {
        zoom: 7,
          center: {
          lat: 52.418396, 
          lng: 19.237807
          },
          disableDefaultUI: true,
          styles: style
      };
      this.map = new google.maps.Map(container, options);
    }
    
    /* Markers */
    public removeMarkers(markers :Array<google.maps.Marker>) :void
    {
      markers.forEach((marker :google.maps.Marker) => 
      {
        marker.setMap(null);
      });
    }
    public removeMarker(marker :google.maps.Marker) :void
    {
      marker.setMap(null); 
    }
    public addMarkers(markers :Array<google.maps.Marker>) :void
    {
      markers.forEach((marker :google.maps.Marker) => 
      {
        marker.setMap( this.getMap() );
      });
    }
  
    public setGreenIcon(marker :google.maps.Marker)
    {
      marker.setIcon("http://maps.google.com/mapfiles/ms/icons/green-dot.png");
    }
  
    public setDefaulIcon(marker)
    {
      if(marker){
        marker.setIcon();
      }
    }
    
    /* info Window */
    public addinfoWindow( dataInfoWindow :Array<{ marker :google.maps.Marker, name_place :string }> ) :void
    {
      let infoWindow :google.maps.InfoWindow;
  
      dataInfoWindow.forEach( data => 
      {
        data.marker.addListener('click', () => showInfoWindow.call(this) );
        data.marker.addListener('rightclick', () => showInfoWindow.call(this) );
  
        function showInfoWindow()
        {
         if(infoWindow) infoWindow.close();
         
         infoWindow = new google.maps.InfoWindow({
          content: data.name_place
         });
         infoWindow.open(this.getMap(), data.marker);
        }
        
      });
    }
  
  
    /* Paint Route */
    public painRouteMarker( start :google.maps.Marker, finish :google.maps.Marker) :void 
    {
      let directionsDisplay = new google.maps.DirectionsRenderer({ 
        map: this.getMap(),
        suppressMarkers: true,
        preserveViewport: true
      });
      const directionsService = new google.maps.DirectionsService;
  
      directionsService.
        route({
          origin: start.getPosition(),
          destination: finish.getPosition(),
          travelMode: 'WALKING'
        }, function(response, status) 
          {
            (status === 'OK') ?
              directionsDisplay.setDirections(response) :
              window.alert('Directions request failed due to ' + status);
          }
        );
  
      directionsDisplay.start = start.getPosition();
      directionsDisplay.finish = finish.getPosition();
      this.addDirectionDislays(directionsDisplay);  
    }
  
    public painRouteMarkers( markers :Array<{ marker :google.maps.Marker, markerUnion: Array<Place> }> )
    {
      for(let i = 0; i < markers.length; i++)
      {
        for(let j = 0; j < markers[i].markerUnion.length; j++)
        {
          this.painRouteMarker(markers[i].marker,markers[i].markerUnion[j].marker);
        }
      }
    }
  
    /* Clear Route */
    public clearRouteMarker( start :google.maps.Marker, finish :google.maps.Marker ) :void 
    {
      this.directionsDisplays.forEach( directions => 
      {
        if((directions.start === start.getPosition() &&
            directions.finish === finish.getPosition()) || 
           (directions.finish === start.getPosition() &&
            directions.start === finish.getPosition()) ) directions.setMap(null);
      });

    }

    public clearUnion() :void
    {
      this.directionsDisplays.forEach( directions => 
        {
           directions.setMap(null);
        });
    }
    public deleteUnion(marker :google.maps.Marker)
    {
      this.directionsDisplays.forEach((direction) =>
      {
        if( direction.start === marker.getPosition() ||
            direction.finish === marker.getPosition())
        {
          direction.setMap(null);
        }
      });
    }

}