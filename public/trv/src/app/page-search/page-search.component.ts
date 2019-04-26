import { Component, ViewChild } from '@angular/core';
import { imgGrid } from './page-search.interface';

@Component({
  selector: 'page-search',
  templateUrl: './page-search.component.html',
  styleUrls: ['./page-search.component.css']
})
export class PageSearchComponent {

  @ViewChild('container') container;

  middlemanPlaces(event: imgGrid){
    this.container.clearImages();
    this.container.addImages(event);
  }
}
