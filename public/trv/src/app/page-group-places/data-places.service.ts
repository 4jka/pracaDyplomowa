import { Place } from "./place-of-group.interface";
import { CommonService } from "../app.service";
import { Injectable } from "@angular/core";

@Injectable()
export class DataPlaces {
    
    public idGroup :number;
    public _places :Array<Place>;

    constructor(private commonService :CommonService)
    {
      this._places = [];
    }

    /* Setters */
    public setIdGroup(idGroup :number)
    {
        this.idGroup = idGroup;
    }
    public setPlaces(data) :void
    {
        data = createMarkers(data);
        data = unionIdReplacePlace(data);
        data = setFullImgSrc.call(this, data);
        this._places = data; 
    
        function createMarkers(places) :[{}]
        {
            return places.map( place => 
            {
            let marker = new google.maps.Marker({
                position: { 
                lat: +place.place_coordinate.split(',')[0],
                lng: +place.place_coordinate.split(',')[1]
                }
            });
                    
            place.marker = marker;
            return place;
            });

        }
        //end

        function unionIdReplacePlace(places) :[{}]
        {
            return places.map( el => 
            {
                for(let i = 0; i < el.markerUnion.length; i++)
                {
                    for(let j = 0; j < places.length; j++)
                    {
                        if(+el.markerUnion[i] === places[j].id_place)
                        {
                            el.markerUnion[i] = places[j];
                        }
                    }  
                }
                return el;
            });

        }
        //end

        function setFullImgSrc(places) :[{}]
        {
            return places.map( place => 
            {
                place.path_foto = this.commonService.getServerImgDirectory() + place.path_foto;
                return place;
            });
        }
        //end
    }  

    /* Getters */
    public getIdGroup() :number
    {
        return this.idGroup;
    }
    public getPropertyPlaces(...propertys)
    {
        return this._places.map( el => 
        {
        let filter = {};
        propertys.forEach((property) =>
        {
            filter[property] = el[property];
        });

        return (Object.keys(filter).length > 1) ? 
                    filter : filter[ Object.keys(filter)[0] ];
        });
    }
    public getPlaces(): Array<Place>
    {
        return this._places;
    }
    /* Clear */
    public deletePlace(place: Place)
    {
        let index = this._places.indexOf( place );
        this._places.splice(index, 1);
    }

    public clearPlaces() :void
    {
        this._places = [];
    }
}