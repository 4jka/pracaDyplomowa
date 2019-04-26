import { Component, EventEmitter, Output ,ViewChild, ElementRef } from '@angular/core';
import { Response } from "@angular/http";

import { PageSearchService } from '../page-search.service';
import { listLocation, listInterest, imgGrid } from '../page-search.interface';

@Component({
  selector: 'field-search',
  templateUrl: './field-search.component.html',
  styleUrls: ['./field-search.component.css']
})

export class FieldSearchComponent{
  /* Data for GridImg */
  @Output() givePlaces = new EventEmitter();

  /* Inputs */
  @ViewChild('location') location: ElementRef; 
  @ViewChild('interest') interest: ElementRef; 

   /* Lists */
  listLocation: Array<listLocation> = [];
  listInterest: Array<listInterest> = [];

  /* Choosed Elements */
  choosedLocation: listLocation;
  choosedInterest: listInterest;
  

  /* For Choosed Elements */
  setChoosedLocation(item: listLocation): void{
    this.choosedLocation = item;
  }
  setChoosedInterest(value: listInterest): void{
    this.choosedInterest = value;
  }
  getChoosedLocationId(): number{
    return this.choosedLocation.id;
  }
  getChoosedInterestId(): number{
    return this.choosedInterest.id_category;
  }
  getChoosedLocationTable(): number{
    return this.choosedLocation.id_table;
  }
  isEmptyChoosedLocation(): boolean{
    return this.choosedLocation === undefined;
  }
  isEmptyChoosedInterest(): boolean{
    return this.choosedInterest === undefined;
  }

  /* For Lists */
  setListLocation(list: Array<listLocation>){
    this.listLocation = list;
  }
  setListInterest(list: Array<listInterest>){
    this.listInterest = list;
  }

  /* For Inputs */
  setLocationInputValue(value: string): void{
    this.location.nativeElement.value = value;
  }
  setInterestInputValue(value: string){
    this.interest.nativeElement.value = value;
  }
  getLocationInputValue(): string{
    return this.location.nativeElement.value;
  }
  getInterestInputValue(): string{
    return this.interest.nativeElement.value;
  } 

  constructor(private pageSearchService : PageSearchService){}


    /*|  Click Items  |*/
  locationItemClick(item: listLocation){
    this.setLocationInputValue(item.name);
    this.setChoosedLocation(item);
    this.locationItemGivePlaces(item);
  }
  interestItem(item: listInterest){
    this.setInterestInputValue(item.name_category);
    this.setChoosedInterest(item);
    this.interestItemGivePlaces(item);
  }

  /* Compresion */
  interestItemGivePlaces(item: listInterest){
    if(this.isEmptyChoosedLocation()){
      this.onlyInterestItem(item.id_category);
    }else{
      this.locationChoosedInterestItem(item);
    }
  }
  locationItemGivePlaces(item){
    if(this.isEmptyChoosedInterest()){
      this.onlyLocationItem(item);
    }else{
      this.interestChoosedLocationItem(item);
    }
  }

  /* Search Two Fields */
  interestChoosedLocationItem(item: listLocation){
    const cryteria: { id_location: number,id_interest: number } = {
      id_location: item.id,
      id_interest: this.getChoosedInterestId()
    }
    this.pageSearchService.getPlaceLocaionAndInterest(item.id_table,cryteria)
      .subscribe((response : Response) => {
        const data: Array<imgGrid> = response.json();
        this.givePlaces.emit(data);
    });
  }
  locationChoosedInterestItem(item: listInterest){
    const cryteria: { id_location: number,id_interest: number } = {
      id_location: this.getChoosedLocationId(),
      id_interest: item.id_category
    }
    const table = this.getChoosedLocationTable();
    this.pageSearchService.getPlaceLocaionAndInterest(table,cryteria)
      .subscribe((response : Response) => {
        const data: Array<imgGrid> = response.json();
        this.givePlaces.emit(data);
      });
  }

  /* Only Click Item List*/
  onlyInterestItem(idChoosedInterest: number){
    this.pageSearchService.getPlaceLOnlyInterest(idChoosedInterest)
      .subscribe((response : Response) => {
        const data: Array<imgGrid> = response.json();
        this.givePlaces.emit(data);
      });
  }
  onlyLocationItem(item: listLocation){
    this.pageSearchService.getPlaceOnlyLocation(item.id_table,item.id)
        .subscribe((response : Response) => {
          const data: Array<imgGrid> = response.json();
          this.givePlaces.emit(data);
    });
  }

  /* Build List */
  buildListLocation(): void{
    const locationValue = this.getLocationInputValue();
      this.pageSearchService.getDataListLocation(locationValue)
        .subscribe((response : Response) => {
          const data: Array<listLocation> = response.json();
          this.setListLocation(data);
        });
  }
  buildListInteres(): void{
    const interestValue: string = this.getInterestInputValue();
      this.pageSearchService.getDataListInterest(interestValue)
        .subscribe((response : Response) => {
          const data: Array<listInterest> = response.json();
          this.setListInterest(data);
        });
  }


  /* ADD Focus inputLocation inputInterest Lista */
  addLocationFocus(): void{
    this.removeFocusListInterest();
    this.addFocusSearch();
    this.addFocusListLocation();
    this.buildListLocation();
  }
  addInterestFocus(){
    this.removeFocusListLocation();
    this.addFocusSearch();
    this.addFocusListInterest();
    this.buildListInteres();
  }

  /* Function For Add Focus */
  addFocusSearch(){
    Array.from( document.querySelectorAll('.searchField') ).forEach(function (element){
      element.classList.add('focus');
    });
    document.querySelector('.focus-blackout').classList.add('focus');
  }
  addFocusListLocation(){
    document.querySelector('.listLocation').classList.add('focus');
  }
  addFocusListInterest(){
    document.querySelector('.listInterest').classList.add('focus');
  }


  /* REMOVE Focus inputLocation inputInterest Lista */
  removeLocationFocus():void{
    this.removeFocusSearch();
    setTimeout(()=>{
      this.removeFocusListLocation();
    },180)
  }
  removeInterestFocus():void{
    this.removeFocusSearch();
    setTimeout(()=>{
      this.removeFocusListInterest();
    },180)
  }
  /* Function For Remove Focus */
  removeFocusSearch(){
    Array.from( document.querySelectorAll('.searchField') ).forEach(function (element){
      element.classList.remove('focus');
    });
    document.querySelector('.focus-blackout').classList.remove('focus');
  }
  removeFocusListLocation(){
    document.querySelector('.listLocation').classList.remove('focus');
  }
  removeFocusListInterest(){
    document.querySelector('.listInterest').classList.remove('focus');
  }
}
