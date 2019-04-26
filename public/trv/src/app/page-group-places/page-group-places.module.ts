import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { PageGroupPlacesRoutingModule } from "./page-group-places-routing.module";
import { PageGroupPlaces } from "./page-group-places.component";
import { PageGroupPlacesService } from "./page-group-places.service";
import { ListGroupModule } from "./list-group/list-group.module";
import { PlaceOfGroupModule } from "./place-of-group/place-of-group.module";
import { ControlMap } from "./control-map.service";
import { DataPlaces } from "./data-places.service";

@NgModule({
    declarations: [
      PageGroupPlaces
    ],
    imports: [
      CommonModule,
      ListGroupModule,
      PlaceOfGroupModule,
      PageGroupPlacesRoutingModule
    ],
    providers: [
      ControlMap,
      DataPlaces,
      PageGroupPlacesService
    ]
  })

export class PageGroupPlacesModule{}