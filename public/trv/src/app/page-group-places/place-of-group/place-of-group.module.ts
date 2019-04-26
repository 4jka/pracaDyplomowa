import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PlaceOfGroupService } from "./place-of-group.service";
import { PlaceOfGroup } from "./place-of-group.component";
import { ScrollModule } from "../../_shared/directives/scroll/scroll.module";


@NgModule({
    declarations: [
      PlaceOfGroup
    ],
    imports: [
      CommonModule,
      ScrollModule,
    ],
    providers: [
      PlaceOfGroupService
    ]
  })

export class PlaceOfGroupModule{}