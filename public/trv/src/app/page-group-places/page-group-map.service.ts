import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import { CommonService } from "../app.service";

@Injectable()
export class MapService {

  constructor ( private http :Http, private commonService :CommonService ) {}    

  getGroupPlaces(IdGroup: number = 1)
  {
    return this.http
      .get( this.commonService.getServerUrl() + '/coordinateByGroupId?id_group=' + IdGroup );
  }
}










// let infowindow = new google.maps.InfoWindow({
//     content: el.name_place
// });

// marker.addListener('click', function() {
//     infowindow.open(this.map, marker);
//     this.map.setCenter(marker.getPosition());
// });










// @Injectable()
// export class TravelCreationMap{

//   map :google.maps.Map;
//   places :Array<Place> = [];


      // this.places = data.map( place => 
    // {
    //   let marker = new google.maps.Marker(
    //   {
    //     position: { 
    //       lat: +place.place_coordinate.split(',')[0],
    //       lng: +place.place_coordinate.split(',')[1]
    //     },  
    //     map: this.getMap()
    //   });
           
    //   let markerUnion = place.markerUnion.map( id =>
    //   {
         
    //     for(let i = 0; i < data.length; i++){
    //      if(id === data[i].id_place){
    //         return data[i];
    //      }
    //     }
        
    //   });

  

    //   return {
    //     id_place: place.id_place,
    //     name_place: place.name_place,
    //     path_foto: this.commonService.getServerImgDirectory() + place.path_foto,
    //     marker: marker,
    //     markerUnion: markerUnion 
    //   }
    // });

    // this.places[0].markerUnion[0].name_place = '2222';
   
    // console.log( this.places );
//   private setMap(map) :void
//   {
//     this.map = map;
//   }
//   private getMap() :google.maps.Map
//   {
//     return this.map;
//   }



//   // Наш напрямок лінія що поєднує маркери
//   directionsService = new google.maps.DirectionsService;
//   // Цю щтуку привязкуємо на карті і нею ми будемо малювати напрямок.
//   directionsDisplay = new google.maps.DirectionsRenderer({map: this.map});


//   constructor(private http :Http,
//               private commonService :CommonService)
//               {
//                 this.setUsersTravel();
//               }    

//   public initMap() :void
//   {
//     let container = document.getElementById('map');
//     let options = {
//         zoom: 7,
//         center: {
//             lat: 52.418396, 
//             lng: 19.237807
//         },
//         disableDefaultUI: true,
//         styles: this.commonService.getStyleMap()
//     };
//     this.setMap( new google.maps.Map(container, options) );
//   }

//   public setUsersTravel() :void
//   {
//     this.http
//       .get( this.commonService.getServerUrl() + '/coordinateByGroupId?id_group=' + 1)
//       .subscribe((response :Response) => 
//       {
//         // const data = response.json();
//         const data = [
//          { 
//            id_place: 11, 
//            name_place: "majdanek",
//            place_coordinate: "51.226017, 22.605747", 
//            path_foto: "majdanek/1.jpg",
//            markerUnion: [22,23]
//          },
//          { 
//            id_place: 22, 
//            name_place: "Muzeum Wsi Lubelskiej",
//            place_coordinate: "51.262083, 22.506453",
//            path_foto: "muzeum/1.jpg",
//            markerUnion: [24,32]
//          },
//          { 
//            id_place: 23,
//            name_place: "Zamek w Lublinie",
//            place_coordinate: "51.250461,22.572446",
//            path_foto: "zamek/1.jpg",
//            markerUnion: [24]
//          },
//          {
//            id_place: 24,
//            name_place: "Stare Miasto",
//            place_coordinate: "51.246096,22.573542",
//            path_foto: "stareMiasto/1.jpg",
//            markerUnion: [11]
//          },
//          { 
//            id_place: 32,
//            name_place: "Zamek Królewski",
//            place_coordinate: "50.054052, 19.935412",
//            path_foto: "zamekKrolewski/1.jpg",
//            markerUnion: [11,22]
//          }
//         ];

//         this.removeMarkers();
//         this.setPlaces(data);
//       }); 
//   }

  
                
//   getMarkersGroup(idGroup){
//     this.http.get(this.commonService.getServerUrl() + '/coordinateByGroupId?id_group=' + idGroup)
//     .subscribe((response : Response) => {
//         const data = response.json();
//         this.setMarkers();
//         this.removeMarkers();
        
//         console.log(data);
//     }); 
//   }

 

//   painRoute(markerStart,markerFinish){
//     this.directionsService.route({
//         origin: markerStart.getPosition(),
//         destination: markerFinish.getPosition(),
//         travelMode: 'WALKING'
//     }, function(response, status) {
//         if (status === 'OK') {
//           this.directionsDisplay.setDirections(response);
//         } else { window.alert('Directions request failed due to ' + status);}
//     });
//   }



// }

// let infowindow = new google.maps.InfoWindow({
//     content: el.name_place
// });

// marker.addListener('click', function() {
//     infowindow.open(this.map, marker);
//     this.map.setCenter(marker.getPosition());
// });











