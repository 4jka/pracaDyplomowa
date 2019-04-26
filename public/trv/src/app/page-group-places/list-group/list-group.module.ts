import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ListGroup } from "./list-group.component";
import { ListGroupService } from "./list-group.service";
import { RouterModule } from "@angular/router";
import { ScrollModule } from "../../_shared/directives/scroll/scroll.module";

@NgModule({
    declarations: [
        ListGroup
    ],
    imports: [
      CommonModule,
      RouterModule,
      ScrollModule
    ],
    providers: [
      ListGroupService
    ]
  })

export class ListGroupModule{}